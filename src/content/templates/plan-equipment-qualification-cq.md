---
title: "Equipment Qualification and Commissioning Plan (ASTM E2500)"
description: "A plug-and-play risk- and science-based commissioning and qualification plan for manufacturing equipment: system classification, critical aspects, verification strategy, use of vendor documentation, roles, and acceptance, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Plan"
pillar: "equipment-qualification"
relatedArticles: ["equipment-qualification-lifecycle", "commissioning-qualification-astm-e2500", "factory-site-acceptance-testing"]
tags: ["commissioning", "qualification", "astm e2500", "annex 15", "critical aspects", "verification", "equipment qualification"]
tier: "Advanced"
---

This is a ready-to-use commissioning and qualification (C&Q) plan built on the ASTM E2500 risk- and science-based approach. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your system list and risk assessments, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Commissioning and Qualification Plan for `<<FILL: project / facility / equipment scope>>` |
| Document number | `<<FILL: CQP-ID, e.g. CQP-ENG-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Engineering / C&Q Lead>>` |
| Site / area | `<<FILL: site, building, area, equipment train>>` |
| Linked documents | `<<FILL: VMP-ID, project plan, URS register>>` |

## 1. Purpose

This plan defines how `<<FILL: COMPANY NAME>>` commissions and qualifies the equipment and systems in scope using a risk- and science-based approach aligned with ASTM E2500 and EU GMP Annex 15. The objective is to deliver documented evidence that each system is fit for its intended use, focusing verification effort on the aspects that affect product quality and patient safety rather than testing every feature with equal weight. The plan sets out the classification, the critical aspects, the verification strategy, the use of vendor documentation, the roles, and the acceptance basis for release to qualified-state use.

## 2. Scope

This plan applies to the systems listed in section 6 at `<<FILL: site / area>>`. It covers the full C&Q lifecycle: requirements definition, design review and design qualification, factory and site acceptance testing, commissioning, and the qualification verification that confirms critical aspects. It addresses direct-impact, indirect-impact, and no-impact systems and the differing verification each receives. It does not cover process validation (process performance qualification), cleaning validation, computer system validation of standalone software, or analytical method validation, which are governed by `<<FILL: cross-reference VMP / SOP-IDs>>`. Where a system has an embedded computerized element, the GAMP-based software lifecycle in `<<FILL: CSV SOP-ID>>` runs in parallel and is referenced here, not duplicated.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| C&Q lead / qualification engineer | Authors this plan, owns the system classification and the critical-aspects determination, sequences commissioning and qualification, and compiles the final summary. |
| Subject matter expert (SME) | Owns the technical correctness of the requirements, the risk assessment, the design review, and the acceptance of verification results for their discipline (process, automation, utilities, facilities). |
| Quality unit / Quality Assurance | Approves this plan, the system classifications, the critical-aspects list, the acceptance criteria for qualification, deviations on qualification tests, and the final summary; confirms the quality-relevant decisions are sound and independent. |
| Vendor / supplier | Executes factory acceptance testing, supplies design documentation and test evidence, and supports site acceptance testing per the agreed scope. |
| Engineering / project | Delivers the installed system, manages commissioning, and resolves construction and installation punch-list items. |
| End user / operations | Confirms the intended use, supports operability checks, and inherits the qualified system with its maintenance and calibration program. |

## 4. Definitions

- **Commissioning**: the planned and controlled engineering work, with its own documentation and oversight, that brings facilities, systems, and equipment up from installation to a working, checked-out, and safe condition ready to hand to the people who will run them (the sense used in ISPE Baseline Guide Volume 5 and ASTM E2500). Commissioning is an engineering activity; it can generate evidence usable for qualification when planned and executed under quality oversight.
- **Qualification**: the documented verification that critical aspects perform as intended and meet predetermined acceptance criteria, confirming the system is fit for its intended use.
- **Critical aspect (CA)**: any part of how a system works, what it does, or what it must achieve that has to be right for the product to stay consistently within quality and for patients to be safe (the concept defined in ASTM E2500 and ISPE Baseline Guide Volume 5). Critical aspects are determined from product quality and process risk, not from a generic feature checklist.
- **Critical design element (CDE)**: the specific part of the engineered design chosen to make a critical aspect achievable, so that a shortfall in this design element would leave the linked critical aspect unmet (the term as used in ASTM E2500 and ISPE Baseline Guide Volume 5).
- **Direct-impact system**: a system whose operation can act on product quality, so its critical aspects are confirmed through qualification (a classification level described in ISPE Baseline Guide Volume 5).
- **Indirect-impact system**: a system that serves or feeds a direct-impact system without itself acting on product quality, so it is commissioned rather than qualified (same source).
- **No-impact system**: a system whose operation cannot reach product quality, so commissioning alone is sufficient (same source).
- **Subject matter expert (SME)**: the individual with specific expertise in a discipline who makes and is accountable for technical decisions within that discipline.
- **Verification**: the application of engineering and quality methods (review, inspection, testing) to confirm a system meets the acceptance criteria for its intended use, planned to the level of risk.

## 5. The risk- and science-based approach

This plan applies the ASTM E2500 lifecycle, summarized below, with EU GMP Annex 15 as the GMP qualification framework. The two are compatible: Annex 15 expects URS, design qualification, installation qualification, operational qualification, and performance qualification stages; ASTM E2500 lets verification be planned by risk and lets commissioning evidence be reused for qualification under quality oversight, so the same test is not repeated as IQ and again as OQ.

| Lifecycle step | What happens | Output |
|---|---|---|
| Requirements (URS) | Define intended use, process needs, regulatory and quality requirements | Approved URS register |
| Risk assessment | Identify hazards to product quality and patient safety, determine critical aspects and critical design elements | System impact assessment, critical-aspects list |
| Specification and design | Specify and design to meet requirements; review design against critical aspects (design qualification) | Design review / DQ record |
| Verification (FAT, SAT, commissioning, qualification) | Apply tests scaled to risk; verify critical aspects | Executed protocols, commissioning records |
| Acceptance and release | Confirm critical aspects met, dispositions, hand over | Summary report, release to qualified state |
| Ongoing | Maintain the qualified state through calibration, maintenance, and change control | Periodic review, change records |

Science and risk decide the testing depth. A no-impact pump gets a commissioning check that it runs. A direct-impact sterilizer gets qualification of every critical aspect (temperature uniformity, lethality, load configurations) against predetermined acceptance criteria, with the quality unit approving those criteria before execution.

## 6. System classification (impact assessment)

Each system is classified by its impact on product quality. The classification sets the verification level. Record the basis for each classification; do not classify by equipment type alone.

| System / ID | Description | Impact classification | Verification level | Basis (reference assessment) |
|---|---|---|---|---|
| `<<FILL: system / ID>>` | `<<FILL: e.g. lyophilizer LY-201>>` | `<<FILL: Direct / Indirect / No impact>>` | `<<FILL: Qualify critical aspects / Commission / Commission>>` | `<<FILL: reference Attachment 1>>` |
| `<<FILL: system / ID>>` | `<<FILL: e.g. chilled-water skid>>` | `<<FILL: Indirect>>` | `<<FILL: Commission>>` | `<<FILL>>` |
| `<<FILL: system / ID>>` | `<<FILL: e.g. compressed-air dryer>>` | `<<FILL: No impact>>` | `<<FILL: Commission>>` | `<<FILL>>` |

| Item | Entry |
|---|---|
| Impact assessment method | `<<FILL: reference SOP and Attachment 1>>` |
| Quality unit approval of classifications | `<<FILL: required before verification begins>>` |

Indirect-impact and no-impact systems are commissioned to good engineering practice. Direct-impact systems carry the critical aspects in section 7 and receive qualification verification.

## 7. Critical aspects and critical design elements

For each direct-impact system, derive the critical aspects from product quality and process risk, then identify the design elements that control them. Verify each critical aspect; this is what qualification proves. A function that is not a critical aspect is commissioned, not qualified.

| System | Critical aspect (CA) | Why it is critical (quality / patient risk) | Critical design element (CDE) | Acceptance criterion | Verification stage |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL: e.g. chamber temperature uniformity>>` | `<<FILL: under-process affects sterility / potency>>` | `<<FILL: probe count, jacket control loop>>` | `<<FILL: e.g. all probes within +/- 1.0 C of setpoint>>` | `<<FILL: OQ / PQ>>` |
| `<<FILL>>` | `<<FILL: e.g. alarm on out-of-range condition>>` | `<<FILL: undetected excursion reaches product>>` | `<<FILL: alarm setpoint, interlock>>` | `<<FILL: alarm activates at limit, logged>>` | `<<FILL: OQ>>` |
| `<<FILL>>` | `<<FILL: e.g. product-contact material>>` | `<<FILL: leachables / corrosion to product>>` | `<<FILL: 316L, surface finish, certificate>>` | `<<FILL: material certificate verified, Ra confirmed>>` | `<<FILL: IQ / DQ>>` |

The critical-aspects list is approved by the quality unit before verification begins. Add, remove, or change a critical aspect only through a documented assessment, not silently during execution.

## 8. Verification strategy: commissioning versus qualification

State which evidence comes from commissioning and which from qualification, and where commissioning evidence is reused for qualification. This is the core of the E2500 efficiency, and it is the most-challenged decision in an inspection, so the rationale must be written down.

| Activity | Performed by | Quality oversight | Reused for qualification? | Notes |
|---|---|---|---|---|
| Design review / design qualification (DQ) | SME + C&Q | Quality reviews critical-aspect coverage | Yes | Confirms design satisfies critical aspects before build |
| Factory acceptance test (FAT) | Vendor + SME | Witnessed / reviewed per risk | Where pre-approved and under oversight | See section 9 on vendor documentation |
| Site acceptance test (SAT) | Engineering + SME | Witnessed / reviewed per risk | Where pre-approved and under oversight | Confirms transport and installation did not invalidate FAT |
| Installation verification (IQ-type) | Engineering + C&Q | Quality reviews critical installation items | Critical items only | Commissioning installation checks cover non-critical items |
| Operational verification (OQ-type) | C&Q + SME | Quality approves acceptance criteria | Yes for critical aspects | Tests critical functions against predetermined criteria |
| Performance verification (PQ-type) | C&Q + operations | Quality approves and reviews | Yes for critical aspects | Confirms performance under intended-use conditions |

Conditions for reusing commissioning evidence as qualification evidence (all must hold):

1. The test was planned in an approved protocol with predetermined acceptance criteria for the critical aspect it covers.
2. The test method, instruments, and acceptance criteria were approved by the quality unit before execution.
3. Calibrated, traceable instruments were used and the calibration is current and recorded.
4. The execution, results, and any deviations are documented, reviewed, and approved.
5. The system configuration tested matches the final installed and released configuration, with change control closing any gap.

Where any condition is not met, the critical aspect is verified separately in a qualification protocol. Do not relabel an uncontrolled commissioning check as qualification after the fact.

## 9. Use of vendor documentation

Vendor documentation may be reused to reduce duplicate testing when it is assessed, traceable, and brought under quality oversight. It does not transfer the company's accountability for the qualified state.

| Vendor deliverable | Use in C&Q | Acceptance condition |
|---|---|---|
| Material certificates (mill / 3.1 certificates) | Evidence for product-contact material critical aspect | Verified against design spec, retained, traceable to component |
| Calibration certificates | Evidence instruments are calibrated at FAT | Traceable standard, in date, range and tolerance fit purpose |
| FAT protocol and results | Reuse for qualification where pre-approved | Protocol reviewed and approved by SME and quality before FAT; deviations resolved |
| Design documents (P&IDs, drawings, software design) | Inputs to design review / DQ and traceability | Reflect as-built; under change control once accepted |
| Vendor IQ/OQ packages | Starting point, not automatic acceptance | Assessed for critical-aspect coverage and gaps; supplemented where thin |

Assess vendor packages before relying on them. A vendor IQ/OQ that tests features the vendor cares about is not the same as verifying the critical aspects that matter for your product. Map the vendor evidence to your critical-aspects list and fill the gaps. Record the supplier assessment per `<<FILL: supplier qualification SOP-ID>>`.

## 10. Requirements traceability

Maintain traceability from each user requirement and each critical aspect through the design to the verification that confirms it. This proves nothing was missed and nothing untraced was added.

| Item | Entry |
|---|---|
| Traceability tool | `<<FILL: traceability matrix reference / tool>>` |
| Trace direction | URS to design (CDE) to verification (protocol step) to result, both ways |
| Coverage rule | Every critical aspect traces to at least one executed, passed verification |

Reference the traceability matrix in Attachment 2. An untraceable critical aspect is treated as not verified.

## 11. Deviations during C&Q

Any failure to meet an acceptance criterion, any departure from an approved protocol, or any test instrument found out of calibration is documented and assessed before the affected critical aspect is accepted.

1. Record the deviation against the protocol and the critical aspect affected, per `<<FILL: deviation SOP-ID>>`.
2. Assess impact on product quality and on the validity of related results, including whether calibration loss invalidates earlier readings.
3. Quality approves the disposition for any deviation on a qualification test or a critical aspect.
4. Do not release the system to qualified-state use with an open deviation on a critical aspect.

## 12. Acceptance criteria for the plan

The C&Q effort is acceptable, and a system is released to qualified-state use, when all of the following are true:

- The system is classified, the classification is approved by quality, and the verification level matches the classification.
- For direct-impact systems, every critical aspect is identified, approved, traced, and verified against its predetermined acceptance criterion with a passing result.
- All reused commissioning and vendor evidence meets the conditions in sections 8 and 9, with quality oversight documented.
- All deviations on critical aspects are closed or dispositioned with quality approval.
- The traceability is complete: every critical aspect maps to executed, passed verification.
- The summary report is issued and approved by the quality unit, with the qualified state and any conditions stated.

## 13. Summary report

On completion, the C&Q lead issues report `<<FILL: report number>>` summarizing the systems and classifications, the critical aspects and their verification results against acceptance criteria, all reused commissioning and vendor evidence with its oversight basis, all deviations and their resolution, the traceability conclusion, and the release decision. The quality unit approves the report.

## 14. Attachments

| No. | Attachment |
|---|---|
| 1 | System impact assessments (classification basis) |
| 2 | Requirements-to-verification traceability matrix |
| 3 | Critical-aspects and critical-design-elements register |
| 4 | Vendor documentation assessment and supplier qualification records |
| 5 | Commissioning-evidence reuse rationale per critical aspect |
| 6 | Protocol index (FAT, SAT, DQ, IQ/OQ/PQ-type) |

## 15. References

> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> ASTM E2500, Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment.
> ICH Q9, Quality Risk Management.
> ICH Q10, Pharmaceutical Quality System.
> ICH Q8(R2), Pharmaceutical Development (for the science-based intended-use basis).
> 21 CFR 211.63, 211.65, 211.67, and 211.68 (equipment design, construction, cleaning, and automatic equipment).
> ISPE Baseline Guide Volume 5, Commissioning and Qualification (second edition), for the system-classification and critical-aspects method. The second edition reframes the legacy direct/indirect/no-impact impact assessment as system classification with critical aspects and critical design elements.
> USP <1058>, Analytical Instrument Qualification, where a system includes analytical instrumentation.

Confirm the current version and clause numbers of each reference before issue.

## 16. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 17. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (C&Q lead) | `<<FILL>>` | | |
| Reviewer (SME) | `<<FILL>>` | | |
| Reviewer (Engineering) | `<<FILL>>` | | |
| Approver (Quality) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the classification, critical-aspects, and verification-strategy sections completed for an example steam sterilizer, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System | Steam sterilizer (autoclave) STZ-110, jacketed chamber, PLC-controlled |
| Impact classification | Direct impact (sterilizes product-contact components; failure affects sterility) |
| Verification level | Qualify all critical aspects; commission non-critical utilities serving it |
| Critical aspect 1 | Chamber temperature uniformity. CDE: 12 calibrated thermocouples, chamber control loop. Acceptance: all probes within +/- 1.0 C of 121 C at plateau across 3 consecutive cycles. Stage: OQ |
| Critical aspect 2 | Lethality delivered to the cold spot. CDE: cycle time at temperature, load pattern. Acceptance: F0 at or above 15 minutes at the slowest-heating location for each validated load. Stage: PQ |
| Critical aspect 3 | Door interlock and cycle-fail alarm. CDE: interlock logic, alarm setpoints. Acceptance: door cannot open mid-cycle; a sub-plateau temperature aborts the cycle and logs the fault. Stage: OQ |
| Critical aspect 4 | Product-contact material and finish. CDE: 316L chamber, Ra at or below specified. Acceptance: mill certificate verified, finish confirmed. Stage: DQ / IQ |
| FAT reuse | Vendor FAT thermocouple-mapping protocol pre-approved by SME and quality; calibrated traceable probes; results and one deviation (probe drift, re-run) documented. Reused as OQ evidence for uniformity; SAT confirmed transport did not invalidate it |
| Vendor docs reused | 316L mill certificate (CA4), instrument calibration certificates at FAT (re-verified on site before PQ), P&ID accepted under change control |
| Commissioning only | Chilled-water and plant-steam supply skids classified indirect impact, commissioned to good engineering practice, not qualified |
| Deviation | One OQ uniformity run showed a single probe 1.3 C low; traced to a loose junction, corrected, run repeated, all probes within +/- 1.0 C; deviation closed with quality approval before PQ |
| Result | All four critical aspects verified against predetermined criteria; traceability complete; summary report approved; sterilizer released to qualified state with the three validated load patterns |

In this example the team classified the sterilizer as direct impact, derived the critical aspects from sterility risk rather than from a generic checklist, reused a pre-approved vendor FAT mapping under quality oversight instead of repeating it on site, commissioned the supporting utilities without qualifying them, and held release until the single failing probe was resolved. That sequence, classify by impact, verify critical aspects against predetermined criteria, reuse controlled evidence, and refuse release with an open critical-aspect deviation, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this plan prevents

- Every system qualified to the same depth with no impact classification, wasting effort on no-impact systems while under-testing direct-impact ones.
- Critical aspects copied from a generic feature list with no link to product quality or patient risk.
- The same function tested as IQ and again as OQ and again as PQ because commissioning and qualification were never separated.
- Commissioning or vendor evidence relabeled as qualification after the fact, with no pre-approved protocol, no predetermined acceptance criteria, and no quality oversight at the time of test.
- Vendor IQ/OQ accepted whole, testing the vendor's features but never mapped to the company's critical aspects, leaving gaps unverified.
- A test instrument found out of calibration with no assessment of whether earlier qualification readings were invalidated.
- Acceptance criteria written after the test was run, or loosened to match the result.
- Critical aspects with no traceable verification, or verifications performed for functions that were never traced to a requirement.
- A system released to qualified-state use with an open deviation on a critical aspect.

## How to adapt this plan

1. Set your document number, owner, report number, and effective date in the header, and link your validation master plan and project plan.
2. Replace the system list in section 6 with your real systems and the impact classification you assigned each one, referencing the impact assessment that justifies it.
3. Derive the critical aspects in section 7 from your own product quality and process risk assessment, and define the predetermined acceptance criterion for each before any verification runs.
4. Fill the verification-strategy table in section 8 to show exactly which commissioning and vendor evidence you will reuse for qualification, and confirm each reuse meets all five conditions.
5. Complete the vendor documentation assessment in section 9 and map every reused vendor deliverable to a critical aspect, filling the gaps the vendor package does not cover.
6. Build the traceability in section 10 so every critical aspect maps to an executed, passed verification before release.
7. Point the cross-references in sections 2, 9, and 11 to your real CSV, supplier qualification, and deviation procedures.
8. Confirm every regulation in section 15 against the current published version before issue.
