---
title: "User Requirements, Functional/Design Specs, and the Traceability Matrix"
description: "How to author testable URS, functional and design specifications, and build a forward and backward requirements traceability matrix that links each requirement to its risk and its test evidence."
pubDate: 2026-06-20
tags: ["csv", "requirements", "traceability", "gamp5", "validation", "specifications", "risk-based"]
pillar: "csv-csa"
tier: "Intermediate"
---

Validation does not start with testing. It starts with a clear statement of what the system has to do, written so precisely that someone other than the author can prove it later. If your User Requirements Specification is vague, every downstream document inherits the vagueness, and you end up testing things nobody can agree on. Traceability is the discipline that ties it all together: every requirement gets a risk decision, every risk-relevant requirement gets a test, and every test traces back to a requirement that someone actually asked for. Get this layer right and the rest of a computerized system validation is mostly execution. Get it wrong and you generate a binder of paper that an inspector can pull apart in twenty minutes.

This article covers the three core specification deliverables (URS, functional spec, design spec), how to write requirements that are actually testable, and how to build and maintain a Requirements Traceability Matrix (RTM) that survives an audit.

---

## Where these documents sit in the V-model

The specification documents are the left arm of the validation V-model. The classic structure pairs each specification with the qualification activity that verifies it:

| Specification (left side) | Verifies against | Qualification (right side) |
|---|---|---|
| User Requirements Specification (URS) | User needs, business and regulatory needs | Performance Qualification (PQ) / User Acceptance Testing (UAT) |
| Functional Specification (FS) | What the system does | Operational Qualification (OQ) |
| Design Specification (DS) / Configuration Spec | How the system is built | Installation Qualification (IQ) |

Reading the V-model is simple: a requirement written on the left is proven by the test directly across from it on the right. A URS line is satisfied by PQ or UAT, a function described in the FS is exercised in OQ, and a design or configuration item is confirmed in IQ. The traceability matrix is the literal wiring between the two arms.

This pairing is not arbitrary. It is the structure behind GAMP 5 Second Edition (ISPE, 2022), *A Risk-Based Approach to Compliant GxP Computerized Systems*, which is the most widely used industry framework for CSV. It is also consistent with EU GMP Annex 11 (*Computerised Systems*) and with the FDA's *Computer Software Assurance for Production and Quality System Software* guidance (final, September 2025), which shifts emphasis toward critical thinking and risk rather than documentation volume but still expects requirements and traceability for higher-risk functions.

EU GMP Annex 11, clause 4.4 makes the same point in regulatory terms: the User Requirements Specification should set out the system's required functions, be grounded in a documented risk assessment and GMP impact, and stay traceable across the whole lifecycle.

That single clause is the regulatory hook for almost everything in this article: requirements must exist, must be risk-based, and must be traceable across the lifecycle.

---

## The User Requirements Specification (URS)

### What it is and why it is required

The URS is the system owner's statement of what the system must do, expressed in the language of the business and the user, not the language of the vendor's engineering team. It is written before you select or configure a system, and it is owned by the regulated company, never by the supplier. The supplier may help, but the company owns the requirements because the company carries the regulatory accountability.

Regulatory basis:
- **EU GMP Annex 11, clause 4.4** requires a URS based on documented risk assessment and GMP impact, traceable throughout the lifecycle.
- **GAMP 5 Second Edition** treats requirements as the foundation of the specification and verification approach and the anchor for risk assessment.
- **21 CFR Part 11** and **EU GMP Annex 11** create the obligation that electronic records and signatures controls (audit trail, access control, e-signatures) be specified and verified, which means those controls have to appear as requirements before they can be tested.

The quality rationale: you cannot validate against an undefined target. If the requirement is "the system shall manage samples," there is no objective pass or fail. A requirement is the acceptance criterion for the whole system. Vague requirements produce vague tests, which produce a validation that proves nothing.

### What goes in a URS

A complete URS usually contains:

- **Document control header**: title, document number, version, effective date, author, reviewers, approvers.
- **Purpose and scope**: what the system is, what business process it supports, what is in and out of scope.
- **System overview / context**: where the system sits, what it interfaces with, the regulated GxP use.
- **Assumptions, constraints, dependencies**: existing infrastructure, hosting model, mandated standards.
- **Requirements, grouped by category**, each with a unique ID:
  - Functional / process requirements (what the system must do)
  - Data requirements (what data is captured, calculated, stored, retained)
  - Interface requirements (integrations with other systems and instruments)
  - Regulatory / data integrity requirements (audit trail, e-signatures, access control, time stamps, retention)
  - Security and access requirements (roles, authentication, segregation of duties)
  - Performance and capacity requirements (response time, concurrent users, throughput)
  - Environmental / operational requirements (backup, restore, archiving, disaster recovery)
  - Reporting and printing requirements
- **Glossary and references.**
- **A placeholder for traceability** (or a reference to the separate RTM).

### How to write a testable requirement (step by step)

This is the part interviewers probe and inspectors exploit. A requirement is testable when a competent tester, with no access to the author, can design a single objective test that yields an unambiguous pass or fail.

1. **One requirement per statement.** If you can split a sentence at the word "and," you probably have two requirements. Split them. Compound requirements create partial-pass ambiguity.
2. **Use "shall" for mandatory, "should" for desirable.** Reserve "shall" for verifiable obligations. Tag desirables clearly so they do not block release.
3. **Make it measurable.** Replace "fast" with "within 3 seconds," "limited" with "no more than 5 concurrent users," "secure" with the actual control.
4. **State the trigger, the action, and the expected result.** "When a user with the Analyst role submits a result, the system shall require a reason-for-change comment before saving."
5. **Avoid solution language in the URS.** The URS says what, not how. "The system shall prevent a user from approving their own data" is a requirement. "The system shall use a database trigger to block self-approval" is design, and it belongs in the DS.
6. **Assign a unique, stable ID.** Never renumber. IDs are the spine of traceability.
7. **Add a priority / criticality field and a GxP flag.** This drives later risk assessment and lets you scale verification effort.
8. **Reference the source.** Tie each requirement to a regulation, an SOP, a business need, or a process step, so an orphan requirement is visible.

### Acceptance criteria: what a good URS looks like

- Every requirement has a unique ID, is atomic, and is independently testable.
- No requirement contains "etc.," "user-friendly," "as appropriate," or "industry standard" as the operative term.
- Regulatory requirements (Part 11 / Annex 11 controls) are explicitly present, not assumed.
- GxP-relevant requirements are flagged.
- The document is reviewed and approved by the system owner, QA, and an SME before configuration starts.
- Each requirement can be answered "yes, it does that, and here is the test that proves it."

### Worked example: URS extract for a LIMS

| Req ID | Requirement | Type | GxP | Priority |
|---|---|---|---|---|
| URS-012 | The system shall enforce unique user identifiers; the same user ID shall not be reassigned to a different individual. | Security | Yes | Mandatory |
| URS-013 | When a saved GxP record is modified, the system shall record a time-stamped, attributable audit trail entry capturing old value, new value, user, date/time, and reason. | Data Integrity | Yes | Mandatory |
| URS-014 | The system shall prevent a user from electronically approving a result that the same user entered. | Security | Yes | Mandatory |
| URS-015 | The system shall apply a result against specification and flag any out-of-specification value before the record can be approved. | Functional | Yes | Mandatory |
| URS-016 | The system shall return a sample search result within 5 seconds for up to 50 concurrent users. | Performance | No | Desirable |
| URS-017 | The system shall retain electronic records and their audit trails in retrievable form for a minimum of the period defined in the records retention SOP. | Data Integrity | Yes | Mandatory |

Compare URS-013 to a bad version: "The system shall have an audit trail." The bad version is true of almost any product and proves nothing. URS-013 names the fields, the trigger, and the attributes, so a tester can modify a record and check each captured element.

---

## The Functional Specification (FS)

### What it is and why

The FS describes what the system does to satisfy the URS: the functions, behaviors, screens, workflows, calculations, and rules. It is the bridge between user intent (URS) and technical build (DS). For a configured commercial product the FS often takes the form of a configuration specification plus the vendor's functional documentation. For custom or bespoke software it is a full functional design document.

GAMP 5 scales the FS to the software category. A GAMP Category 3 (non-configured, used as supplied) product may rely heavily on the supplier's documentation, with a thin company FS. A Category 4 (configured) product needs a configuration specification describing every GxP-relevant setting. A Category 5 (custom / bespoke) product needs a full functional and design specification because nobody else has verified that code.

### What goes in an FS

- Functional description of each module and workflow.
- Business rules and calculations, stated exactly (formulas, rounding, units).
- Screen / field descriptions, mandatory vs optional fields, field validations.
- User roles and the permissions each role holds.
- State transitions and workflow logic (draft, submitted, reviewed, approved, cancelled).
- Audit trail behavior: what events are logged and what each entry contains.
- Electronic signature behavior: meaning of signature, components captured, signing workflow.
- Interfaces: data exchanged, direction, format, frequency, error handling.
- Error and exception handling, alarms, and messages.
- Reports and outputs.

### How to do it

1. Take each URS requirement and describe the function that delivers it. One URS line may map to several FS functions, and one FS function may serve several URS lines. That many-to-many mapping is normal and is exactly what the RTM captures.
2. Where the URS said "what," now say "how the system behaves" without yet specifying internal build. The FS is still observable behavior, not code.
3. Pull regulatory behavior out explicitly. Do not bury audit trail and e-signature behavior inside prose; give them their own sections so they get tested.
4. For configured products, list every GxP-relevant configuration parameter with its intended value, because configuration is the thing that changes a generic product into your validated system.

### Acceptance criteria

- Every URS requirement is addressed by at least one FS item (forward coverage).
- Every FS item traces back to a URS requirement or a documented justification (no orphan functions).
- Calculations are specified to the level a tester can compute the expected result by hand.
- Configuration values are explicit and match what is actually loaded.

### Worked example: FS extract serving the URS above

| FS ID | Function | Traces to URS |
|---|---|---|
| FS-031 | On Save of any record whose object type is flagged "GxP-controlled," the system writes an audit record with fields: object ID, field name, prior value, new value, user ID, UTC timestamp, local timestamp, and mandatory reason text. | URS-013 |
| FS-032 | The result-approval action checks the entering user ID against the current user ID; if equal, the Approve button is disabled and a message "Approver cannot be the originator" is shown. | URS-014 |
| FS-033 | On result entry, the system compares the numeric result to the method's lower and upper spec limits stored on the test definition and sets status = OOS if outside limits; an OOS status blocks the Approve workflow until an investigation reference is linked. | URS-015 |
| FS-034 | User roles Analyst, Reviewer, Approver, and Administrator are configured; Approver and Administrator are mutually exclusive for any single user. | URS-012, URS-014 |

---

## The Design Specification (DS)

### What it is and why

The DS describes how the system is built to deliver the functions: architecture, data model, code modules, database design, server topology, infrastructure, configuration at the technical level, and any custom code. For Category 3 products the DS is largely supplier-held and confirmed through the supplier assessment. For Category 5 custom software the DS is detailed and is the basis for code review and IQ.

The risk rationale: the deeper the customization, the more you must specify and verify, because reused commercial code carries the weight of the wider user base while bespoke code does not. The DS is where you document the things only the builder knows: the actual database tables, the scripts, the server names, the interfaces at a technical level, and the security architecture.

### What goes in a DS

- System architecture diagram (clients, servers, databases, interfaces, network zones).
- Hardware and infrastructure specification (or reference to the qualified infrastructure).
- Software inventory and versions (OS, database, middleware, application).
- Data model / database schema for GxP data, including audit trail tables.
- Detailed configuration and any custom code, scripts, macros, or formulas.
- Interface design (protocols, mappings, field-level transforms).
- Security design (authentication method, password policy enforcement, role-permission matrix as built).
- Backup, recovery, and archiving design.

### How and acceptance criteria

Each FS function is mapped to the design element that implements it. Acceptance: every FS item traces to a DS element (forward), every DS element traces back to an FS item (backward, no gold-plating), and custom code items are flagged for code review. For a configured COTS product, do not over-engineer a DS; a configuration spec plus the qualified-infrastructure reference is often enough, and GAMP 5 explicitly supports scaling effort to risk and novelty.

A practical note: not every project produces three separate documents. Small, low-risk, configured systems frequently merge FS and DS, or merge URS and FS. That is acceptable as long as the content exists and the traceability holds. What matters is the chain of specify, build, verify, not the number of cover pages.

---

## The Requirements Traceability Matrix (RTM)

### What it is and why it is required

The RTM is a single table that shows, for every requirement, the design that implements it, the risk decision attached to it, and the test that proves it, with the result. It is the evidence that your validation is complete: nothing was specified and forgotten, and nothing was tested without a reason.

Regulatory basis:
- **EU GMP Annex 11, clause 4.4**: user requirements should be traceable throughout the lifecycle.
- **GAMP 5 Second Edition** describes traceability between requirements, risk assessment, specification, and verification as a core expectation, scaled to risk.
- **FDA CSA guidance (final, September 2025)** keeps traceability for higher-risk functions while encouraging less ceremony for low-risk ones; you still have to show that critical functions were verified.
- For combination products and software regulated as a medical device, the same requirement-to-design-to-verification traceability is expected by analogous device frameworks: **21 CFR Part 820.30** design controls (harmonized under the **QMSR**, 21 CFR Part 820 as amended, effective 2 February 2026, aligning with **ISO 13485:2016**) and **IEC 62304**. The discipline is identical to the GAMP 5 / Annex 11 model above, because the underlying logic is universal across GxP.

The quality rationale lives in two failure modes the RTM is built to catch:
- **Coverage gaps**: a requirement with no test. The system might not actually do what you said it does, and you will never find out until an inspector or a user does.
- **Orphans**: a test or a design element with no parent requirement. Either you are testing something nobody asked for (wasted effort, untraceable scope) or, worse, scope crept in undocumented.

### Forward vs backward traceability

This distinction is the single most common interview question on the topic, so be precise.

- **Forward traceability** runs URS to FS to DS to test. You read it as: every user requirement is carried forward into design and into a test. Forward tracing finds **coverage gaps**: a URS line with no test downstream means an untested requirement.
- **Backward traceability** runs test to DS to FS to URS. You read it as: every test, and every design element, traces back to a real requirement. Backward tracing finds **orphans**: a test or design feature with no requirement parent, which is unjustified scope.

A complete RTM is bidirectional. Forward proves completeness of coverage. Backward proves nothing extra crept in. You need both, and an inspector who knows the topic will ask which direction catches which problem.

### What goes in an RTM

Minimum columns:

| Column | Purpose |
|---|---|
| URS ID | The user requirement |
| Requirement text (short) | Readability without opening the URS |
| GxP / criticality flag | Drives test rigor |
| Risk ID / risk class | Link to the risk assessment and resulting controls |
| FS ID | Functional design item(s) |
| DS / config ID | Design or configuration item(s) |
| Test case ID(s) | OQ / PQ / UAT scripts that verify it |
| Test result | Pass / Fail / Pass-with-deviation, with deviation ref |
| Verification method | Test, inspection, review, vendor evidence |
| Status | Open / Verified / Deferred |

The risk column is what turns a clerical table into a risk-based one. It records the link required by Annex 11 clause 4.4 (requirements based on documented risk assessment) and lets you justify why a low-risk requirement got a lighter test or a vendor-evidence approach rather than a full script.

### How to build and maintain an RTM (step by step)

1. **Seed it from the URS.** Every approved URS ID becomes a row. Do this as the URS is approved, not at the end.
2. **Attach the risk assessment.** Run your risk assessment (see [csv-risk-assessment-methodology](/articles/csv-risk-assessment-methodology) and [quality-risk-management](/articles/quality-risk-management)) and write each requirement's risk class and resulting controls into its row. High-risk and GxP-critical requirements get full functional verification; low-risk requirements can use review or supplier evidence.
3. **Map design.** As FS and DS are written, fill the FS and DS columns. Many-to-many links are normal; record all of them.
4. **Map tests.** As OQ/PQ/UAT protocols are authored, put the test case IDs against each requirement. Now run the two checks: every requirement has at least one test (forward), and every test maps to at least one requirement (backward).
5. **Resolve gaps before execution.** A requirement with no test is either untested (write the test) or deliberately verified another way (record the method and rationale). A test with no requirement is either scope creep (add the requirement and approve it) or junk (remove it).
6. **Update during execution.** As tests pass or fail, record results and link any deviations (see [validation-test-failure-management](/articles/validation-test-failure-management)). A failed test leaves the requirement Open until the deviation is closed and the retest passes.
7. **Close it in the validation summary.** The Validation Summary Report (see [validation-summary-report-and-release](/articles/validation-summary-report-and-release)) cites the completed RTM as proof that all requirements were verified or formally deferred with justification.
8. **Keep it alive.** Under change control, any new or changed requirement re-enters the RTM and re-triggers tracing. A stale RTM that does not match the live system is itself a finding.

### Worked example: an RTM extract

| URS ID | Requirement (short) | GxP | Risk | FS ID | DS ID | Test ID | Result |
|---|---|---|---|---|---|---|---|
| URS-013 | Audit trail on GxP record change with old/new value, user, time, reason | Yes | High | FS-031 | DS-AUD-01 (audit_log table) | OQ-104 | Pass |
| URS-014 | Block self-approval of own result | Yes | High | FS-032, FS-034 | DS-SEC-07 | OQ-110, PQ-022 | Pass |
| URS-015 | Flag OOS before approval | Yes | High | FS-033 | DS-CAL-03 | OQ-118 | Fail / DEV-2026-031, retest OQ-118R Pass |
| URS-016 | Search within 5s for 50 users | No | Low | FS-040 | DS-INF-02 | OQ-130 (load test) | Pass |
| URS-017 | Retain records and audit trail per SOP | Yes | High | FS-045 | DS-ARC-01 | PQ-030 (restore + read-back) | Pass |

Read URS-015 across the row: a high-risk requirement, traced to one function, one design element, one OQ test that initially failed, raised a deviation, and passed on retest. The single row tells the whole story, which is exactly what an inspector wants to see.

---

## GxP tagging and risk-based scaling

Not every requirement carries the same regulatory weight, and treating them all identically wastes effort and dilutes attention from the ones that matter. GxP tagging is the act of marking which requirements touch product quality, patient safety, or data integrity. Those are the requirements that drive the depth of testing.

A workable scheme:
- **GxP-critical**: directly affects product quality, patient safety, or data integrity (audit trail, e-signature, calculations on release data, OOS handling, access control). Full functional verification, usually scripted OQ/PQ, independent review.
- **GxP-supporting**: indirect quality impact (some reports, some workflow conveniences on controlled data). Verified, but the method can be lighter.
- **Non-GxP / business**: usability, performance niceties. Verified to business satisfaction, often via UAT, with minimal formal CSV burden.

This is the practical expression of the FDA CSA guidance and GAMP 5: spend assurance effort where the risk is, and use the least burdensome method that produces adequate confidence for the risk involved. The RTM's risk and GxP columns are where that decision is recorded and defended. See [data-criticality-and-data-risk](/articles/data-criticality-and-data-risk) and [computer-software-assurance-fda](/articles/computer-software-assurance-fda) for how criticality drives method selection.

---

## Roles and responsibilities

| Role | Responsibility |
|---|---|
| System / Process Owner | Owns the URS; ensures requirements reflect real business and regulatory needs; approves specifications; accountable for the system. |
| Subject Matter Expert (SME) | Supplies process knowledge; writes and reviews requirements for correctness and completeness; defines acceptance criteria. |
| Quality Assurance (QA) | Reviews and approves URS, FS, DS, RTM; confirms GxP requirements and data integrity controls are present and traced; gatekeeper for risk-based decisions and release. |
| Validation Lead / CSV Engineer | Coordinates the V-model deliverables; builds and maintains the RTM; runs tracing checks; manages deviations against tests. |
| Supplier / Vendor | May draft FS/DS for their product; provides functional and design documentation; supports requirement clarification. Does not own the URS. See [software-supplier-assessment-csa](/articles/software-supplier-assessment-csa). |
| IT / Infrastructure | Owns infrastructure design elements in the DS; confirms qualified infrastructure for IQ. |
| Author (any) | Each deliverable has a named author; authorship must be independent enough that the same person does not write a requirement and then sign it off as the sole quality reviewer. |

A clean segregation matters here: the people who write requirements should not be the only people who approve that those requirements were met. QA independence in approving the URS and the RTM is a control, not a formality.

---

## Common mistakes and real inspection-finding patterns

These are the patterns that recur in inspection findings and audit observations across the industry. None are tied to any specific company; they are generic and well known.

- **Untestable requirements.** "User-friendly," "fast," "as needed," "industry standard." There is no objective pass. Inspectors read this as a system whose acceptance was never truly defined.
- **Coverage gaps.** A URS requirement, especially a data integrity one, with no test against it. The classic version is an audit trail requirement that is stated but never actually verified, then found later to not capture old values or to be switched off.
- **Orphan tests and undocumented scope.** Tests or functions with no parent requirement, indicating scope that crept in without assessment. Or the reverse: the system does something GxP-relevant that no requirement ever captured, so it was never risk-assessed.
- **Missing data integrity requirements.** No requirement for audit trail review, time synchronization, unique user IDs, or e-signature components, so Part 11 / Annex 11 controls were never specified or tested. See [21-cfr-part-11-eu-annex-11](/articles/21-cfr-part-11-eu-annex-11).
- **Requirements written by the vendor and rubber-stamped.** The URS reads like the vendor's brochure and reflects what the product does rather than what the company needs. The regulated company owns the requirements; an inspector probes who actually authored them.
- **RTM created at the end.** A matrix back-filled after testing, reverse-engineered to look complete. It tends to be internally inconsistent, and the inconsistencies are easy to find by sampling a few requirements and chasing them through.
- **No risk linkage.** Every requirement tested identically, with no documented rationale for depth. This is both inefficient and out of step with Annex 11 clause 4.4 and CSA.
- **Stale RTM after changes.** Post-go-live changes that updated the system but not the traceability, so the validated state on paper no longer matches reality. A change control that does not re-trace is the root cause.
- **Compound requirements.** One requirement with three "ands," tested with one script, leaving two-thirds unverified but appearing covered.

---

## Interview-ready questions and answers

**What is the difference between forward and backward traceability, and what does each catch?**
Forward runs from user requirement down to test and confirms every requirement is covered; it catches coverage gaps. Backward runs from test up to requirement and confirms every test and design feature has a requirement parent; it catches orphans and undocumented scope. A complete RTM is bidirectional.

**Who owns the URS?**
The regulated company, specifically the system or process owner, with SME and QA input. The supplier can help author it but never owns it, because the company holds the regulatory accountability.

**What makes a requirement testable?**
It is atomic (one requirement), unambiguous, measurable, and stated as a trigger plus an expected result, with a unique ID. A tester with no access to the author can design one objective pass/fail test for it.

**Where does risk enter the requirements process?**
Each requirement gets a documented risk and GxP classification, per Annex 11 clause 4.4. That classification drives how rigorously it is verified. High-risk and GxP-critical requirements get full functional testing; low-risk ones can use lighter methods or supplier evidence. The link is recorded in the RTM.

**How does the V-model connect specifications to qualification?**
URS verifies via PQ/UAT, FS via OQ, DS via IQ. Each left-arm specification has a right-arm test, and the RTM is the wiring between them.

**A URS has 200 requirements. Do you test all 200 the same way?**
No. You tag them by GxP impact and risk. Critical functions get scripted, independently reviewed verification; non-GxP requirements get lighter, often UAT-based confirmation. You document the rationale, consistent with GAMP 5 and the FDA CSA guidance. Testing everything identically is neither required nor efficient.

**What do you do with a requirement that has no corresponding test?**
First decide if it is genuinely untested (write and execute a test) or verified by another method like document inspection or supplier evidence (record the method and rationale in the RTM). Either way it cannot stay as a silent gap. A genuinely untested GxP requirement blocks release.

**How is GAMP category relevant to specifications?**
Category drives effort. A non-configured product (Cat 3) leans on supplier documentation with a thin company spec. A configured product (Cat 4) needs a configuration specification for GxP settings. Custom software (Cat 5) needs full FS and DS plus code review, because no external user base has exercised that code.

**An inspector asks you to prove your audit trail requirement was met. Walk me through it.**
Open the RTM, find the audit trail URS line, follow it to the FS item describing what is logged, to the DS element (the audit table or module), to the OQ test that modified a record and verified old value, new value, user, time stamp, and reason were captured, and to the passed result with any deviation reference. That single row is the proof chain.

---

## Practical tips

- Build the RTM in the same tool you will maintain it in, from day one. A matrix maintained as a living artifact from URS approval onward never has the back-fill credibility problem.
- Number requirements with stable IDs and never renumber. Insert with new IDs; retire by marking, not deleting.
- Pull every Part 11 / Annex 11 control into explicit requirements up front, using a standard checklist, so data integrity controls are never assumed.
- Keep the GxP and risk columns mandatory. A blank risk cell is an unfinished requirement.
- Run the forward and backward checks as a formal gate before test execution starts, not after.
- When you merge documents (URS plus FS, or FS plus DS) for a small low-risk system, say so explicitly and keep the traceability intact; the content matters, not the document count.
- Treat the RTM as a change-control object. Any change to the system re-enters the matrix and re-triggers tracing, and the change record references the updated RTM.

---

## Related articles

- [validation-deliverables-guide](/articles/validation-deliverables-guide)
- [writing-validation-protocols-and-reports](/articles/writing-validation-protocols-and-reports)
- [gamp5-csv-framework](/articles/gamp5-csv-framework)
- [csv-risk-assessment-methodology](/articles/csv-risk-assessment-methodology)
- [computer-software-assurance-fda](/articles/computer-software-assurance-fda)
- [validation-test-failure-management](/articles/validation-test-failure-management)
- [validation-summary-report-and-release](/articles/validation-summary-report-and-release)
- [21-cfr-part-11-eu-annex-11](/articles/21-cfr-part-11-eu-annex-11)
- [data-criticality-and-data-risk](/articles/data-criticality-and-data-risk)
- [change-control-validated-systems](/articles/change-control-validated-systems)
