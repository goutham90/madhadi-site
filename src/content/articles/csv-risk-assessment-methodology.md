---
title: "CSV Risk Assessment: How to Scope and Execute a Risk-Based Validation"
description: "A working guide to validation risk assessment — FMEA, risk ranking matrices, criticality determination, GAMP 5 software categorization, and how to use risk to set your testing scope without over-validating or under-validating."
pubDate: 2026-01-02
tags: ["CSV", "risk assessment", "GAMP", "validation", "FMEA"]
tier: "Intermediate"
pillar: "csv-csa"
---

Risk assessment is the analytical step that determines how much validation work a system actually requires. Done well, it protects product quality and data integrity without generating documentation for its own sake. Done poorly, it either leaves real risks unaddressed or creates mountains of testing for functions that carry no GxP risk.

The regulatory basis is clear: FDA's CSA guidance (2022), GAMP 5 Second Edition, and ICH Q9(R1) all emphasize that validation effort should be proportionate to risk. The question is how to apply that principle in practice.

---

## Step 1: Define the System and Its GxP Context

Before assigning any risk scores, you need to understand what the system does and where it sits in the regulated environment.

**Questions to establish GxP context:**

- Does this system generate, store, process, or transmit data used to make GxP decisions? (Release decisions, in-process decisions, batch approval, clinical data)
- Does this system control or monitor a process that directly affects product quality?
- Does this system generate records required by FDA, EMA, or other regulatory authorities?
- Is this system referenced in any regulatory submission?

If the answer to all of these is no, the system isn't a GxP system and doesn't require validation in the pharmaceutical sense. Validate your manufacturing execution system. Don't validate your expense reporting software.

If the answer to any of these is yes, the system is in scope. Now determine the extent of GxP use. A LIMS used to manage laboratory samples and results is deeply GxP. The same LIMS instance used only to track reagent inventory for non-GxP lab supplies might not be.

---

## Step 2: GAMP 5 Software Category Assignment

GAMP 5 Second Edition (2022) categorizes software into four types. The category drives the baseline validation approach before risk-based adjustments.

**Category 1: Infrastructure Software**
Operating systems, database platforms, network software, virtualization software. These are not directly validated but are qualified as supporting infrastructure. Installation and configuration qualification, vendor documentation review.

**Category 3: Non-Configured Software**
Software used essentially as delivered, with no configuration for GxP use beyond basic setup. Off-the-shelf tools used as-is. Limited validation required: confirm the software does what the vendor says it does for the specific use case.

**Category 4: Configured Software**
Software with a standard application platform (LIMS, MES, CTMS, eQMS) that is configured for site-specific use. The configuration drives the function. Most GxP enterprise software is Category 4. Full IQ/OQ/PQ, with validation scope focused on configured functions, especially GxP-critical ones.

**Category 5: Custom Software**
Software written specifically for the organization: custom scripts, custom applications, bespoke manufacturing control software. Highest validation burden because there's no vendor testing to use. Full software development lifecycle documentation, code review, and complete functional testing.

**Assignment note:** Category assignment isn't always obvious. A LIMS configured extensively for a specific process may border on Category 5 for those custom elements. Document your rationale.

---

## Step 3: Identify GxP-Critical Functions

Not every function in a Category 4 system needs the same level of testing. Identify which functions directly support or affect:

- Data used for batch release decisions
- Patient safety
- Regulatory record integrity
- Process control for critical quality attributes

For a LIMS, critical functions typically include: sample tracking and chain of custody, result entry and specification comparison, OOS flagging, batch status management, access control enforcement, and audit trail completeness. The user management module, report formatting options, and dashboard customization are not critical GxP functions.

Creating a criticality matrix is useful here:

| Function | GxP Impact | Criticality |
|---|---|---|
| Sample login and assignment | Direct: determines what is tested and when | High |
| Result entry and spec comparison | Direct: determines pass/fail and batch disposition | High |
| Access control configuration | Direct: determines who can do what | High |
| Report template formatting | Indirect: cosmetic | Low |
| Dashboard configuration | None: display only | None |
| Email notification settings | None: administrative | None |

---

## Step 4: Risk Assessment Using FMEA

Failure Mode and Effects Analysis (FMEA) is the most commonly used structured risk assessment method for CSV. For each critical function, identify potential failure modes and assess them.

**FMEA components:**

*Failure Mode:* What could go wrong with this function?

*Effect:* What happens to the system, process, or data if this failure occurs?

*Severity (S):* How serious is the effect? Scale of 1-5 or 1-10. Higher = more severe.

| Score | Severity |
|---|---|
| 1 | No GxP impact |
| 2 | Minor: administrative impact only |
| 3 | Moderate: potential impact on record integrity, detectable |
| 4 | Major: impact on batch quality decisions or critical records |
| 5 | Critical: direct patient safety or regulatory submission impact |

*Probability of Occurrence (O):* How likely is this failure mode to occur? Consider vendor maturity, system complexity, and configuration history.

| Score | Occurrence |
|---|---|
| 1 | Very unlikely: well-established function in mature software |
| 2 | Unlikely: established function with minor customization |
| 3 | Possible: new configuration or integration point |
| 4 | Likely: complex custom configuration or novel use case |
| 5 | Very likely: poorly defined requirements or immature software |

*Detectability (D):* If this failure occurs, how easily will it be detected before it causes an impact?

| Score | Detectability |
|---|---|
| 1 | Immediately detectable by the system or user |
| 2 | Detectable through normal review process |
| 3 | May be missed in routine review |
| 4 | Unlikely to be detected without targeted audit |
| 5 | Not detectable: failure is silent |

*Risk Priority Number (RPN):* S × O × D. Higher RPN = higher priority for validation attention.

**Using FMEA output:**

High-severity, low-detectability failures demand scripted testing with documented expected results, regardless of occurrence probability. A silent failure in audit trail capture (Severity 5, Detectability 5) is a critical testing priority even if it's unlikely to occur.

Low-severity functions can be addressed with unscripted exploratory testing, vendor documentation review, or brief confirmation checks rather than formal scripted protocols.

---

## Step 5: Testing Scope Decision

The output of FMEA drives your testing approach for each function:

| Risk Level | Appropriate Testing Approach |
|---|---|
| High: S≥4 or RPN>50 | Scripted testing with explicit expected results; documented test execution; deviation handling |
| Medium: S=3 or RPN 25-50 | Scripted or structured unscripted testing; documented execution |
| Low: S≤2 or RPN<25 | Exploratory unscripted testing; or vendor documentation review only |
| None: no GxP impact | No testing required; document rationale |

FDA's CSA guidance explicitly supports this approach: "FDA recommends that testing be based on risk, with emphasis on critical functionality." This isn't a loophole for skipping testing. It's a directive to stop testing low-risk functions at the same depth as high-risk ones.

---

## Step 6: use Vendor Documentation

For functions addressed through vendor documentation rather than site testing, you need to assess what documentation actually exists and whether it's sufficient.

**Minimum vendor documentation requirements to rely on:**

- Evidence of a Software Development Life Cycle (SDLC) process at the vendor
- Test documentation showing the function was tested during development
- A regulatory support package or IQ/OQ documentation template
- Statement of GxP applicability or regulatory compliance for the function in question

Document your assessment of vendor documentation quality. "We relied on vendor documentation for Category 3 functions X, Y, and Z. We reviewed vendor's quality system documentation and confirmed [specific documentation] was available and relevant."

**When vendor documentation is insufficient:**

- Vendor has no formal quality system
- Documentation is generic and doesn't address your specific configuration
- The function has been customized beyond the vendor-validated configuration
- The vendor can't provide documentation upon request

In these cases, site testing is required regardless of the risk rating.

---

## Step 7: Document the Risk Assessment Output

The risk assessment document is a validation deliverable. It must contain:

- System description and GxP context
- GAMP 5 category assignment with rationale
- List of identified critical functions
- FMEA table with scores and rationale
- Summary of testing approach by function
- Vendor documentation assessment
- Approval signatures (author and QA)

The risk assessment is written before protocols are finalized, because the protocols should flow from the risk assessment. If the testing scope in the protocols doesn't match the risk assessment, something is wrong with one of them.

---

## Common Risk Assessment Mistakes

**Rating everything high to avoid scrutiny.** If every function is rated "critical" and every test is scripted and formal, you haven't done a risk assessment, you've done a complete-documentation approach disguised as a risk assessment. The FDA and GAMP both want to see genuine differentiation.

**Rating everything low to minimize work.** The opposite problem. Audit trail configuration rated "low" because "we trust the vendor" is not a defensible risk assessment when audit trail completeness is a direct GxP requirement.

**No evidence to support scores.** Severity scores without explanation of why the impact reaches that level. Occurrence scores without reference to vendor maturity, system complexity, or prior use history. Detectability scores without considering how the failure would actually be found.

**Risk assessment disconnected from protocols.** A risk assessment that identifies high-risk functions but protocols that don't test those functions, or that test them superficially. The risk assessment and the protocols must be coherent.

**Not updating the risk assessment when scope changes.** If a new interface is added to the system, or a new critical function is identified during testing, the risk assessment must be updated. It's a living document through the validation lifecycle.

---

## Revalidation Risk Assessment

When a change is made to a validated system, a new risk assessment is needed, but scoped to the change. The change control record should include an impact assessment that asks:

- What does this change affect in the validated system?
- Which validated functions are potentially impacted?
- Is the change within the validated design space (no revalidation needed) or outside it (revalidation required)?
- What testing is needed to verify the change doesn't adversely affect validated functions?

The impact assessment drives the revalidation scope. A minor configuration change to a report template may require only a brief confirmation test. A major software version upgrade affecting core database structures may require re-execution of critical OQ test scripts.

Risk-based validation only works when the risk assessment is done honestly and used to make real decisions about scope. When it's a formality, it produces exactly the kind of bloated, useless validation documentation that GAMP 5 Second Edition was trying to replace.
