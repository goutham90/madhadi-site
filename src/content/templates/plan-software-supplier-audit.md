---
title: "Plan: Remote and Postal Software Supplier Audit"
description: "A plug-and-play audit plan for a software supplier: scope and objectives, the document request list, the live agenda with a sampling strategy that defeats a curated demo, interview targets, the postal-audit evidence package, finding classification, and the report structure, with a filled specimen."
pubDate: 2026-06-23
docType: "Plan"
pillar: "csv-csa"
relatedArticles: ["software-supplier-assessment-csa"]
tags: ["csa", "vendor audit", "remote audit", "supplier assessment", "csv", "sdlc", "plan"]
tier: "Advanced"
---

This is a ready-to-use audit plan for a remote or postal (documentary) audit of a software supplier. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control. A worked filled specimen follows the template. This is general guidance to adapt, not regulatory advice. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Audit title | Software Supplier Audit: `<<FILL: supplier / product>>` |
| Document number | `<<FILL: audit plan ID>>` |
| Audit type | `<<FILL: remote / postal>>` |
| Lead auditor | `<<FILL>>` |
| Date(s) | `<<FILL>>` |
| Governing SOP | `<<FILL: software supplier assessment SOP-ID>>` |

## 1. Objective and scope

State why this audit is being run and what it covers.

| Field | Entry |
|---|---|
| Objective | Confirm the supplier's quality system and SDLC are sound enough to rely on for `<<FILL: product and version>>` |
| Product and version in scope | `<<FILL>>` |
| Risk tier (from the assessment) | `<<FILL: High / Medium>>` |
| Areas in scope | QMS, requirements and traceability, testing, defect management, change and release, security and hosting |
| Areas out of scope | `<<FILL>>` |

## 2. Audit team and supplier contacts

| Role | Name | Note |
|---|---|---|
| Lead auditor | `<<FILL>>` | |
| Software-literate SME | `<<FILL>>` | Required for SDLC evaluation |
| QA observer | `<<FILL>>` | |
| Supplier quality contact | `<<FILL>>` | |
| Supplier technical contacts | `<<FILL: a developer and a tester, not only the quality manager>>` | |

## 3. Document request list (send 2 to 4 weeks ahead)

| # | Requested item | Pre-read or live | Received? |
|---|---|---|---|
| 1 | Current QMS certificate(s) and scope (ISO 9001 / 13485) | Pre-read | `<<FILL>>` |
| 2 | Index of SDLC procedures with version and approval dates | Pre-read | `<<FILL>>` |
| 3 | Requirements-to-test traceability for the version in scope (redacted) | Pre-read | `<<FILL>>` |
| 4 | Test strategy and the test / validation summary for the version | Pre-read | `<<FILL>>` |
| 5 | Defect severity definitions and a defect-log extract | Pre-read | `<<FILL>>` |
| 6 | Change and release procedure plus a recent release record | Pre-read | `<<FILL>>` |
| 7 | Security: SOC 2 Type II or ISO 27001 report; vulnerability and patch policy | Pre-read | `<<FILL>>` |
| 8 | Backup, restore, and disaster-recovery summary (hosted products) | Pre-read | `<<FILL>>` |
| 9 | Subcontractor / open-source component control approach | Pre-read | `<<FILL>>` |

## 4. Live agenda (remote audit)

| Time | Session | Notes |
|---|---|---|
| `<<FILL>>` | Opening meeting: scope, attendees, screen-share ground rules | |
| `<<FILL>>` | QMS walkthrough: document control, training, CAPA | |
| `<<FILL>>` | Live SDLC evidence: supplier opens their real requirements, test, and defect tools | Sample per section 5 |
| `<<FILL>>` | Change and release: open a recent release record live | |
| `<<FILL>>` | Security and hosting review | |
| `<<FILL>>` | Interviews: a developer and a tester | |
| `<<FILL>>` | Closing meeting: preliminary observations, agree facts, report timeline | |

## 5. Sampling strategy (defeat the curated demo)

- Name the records yourself in the live session; do not accept the records offered.
- Trace at least one requirement end to end: requirement to design reference to code reference to test result.
- Ask to see a failed test and how it was investigated and closed.
- Sample across at least two recent releases, not one.
- For a hosted product, ask the supplier to show real access-control and audit-trail configuration, not slides.

## 6. Postal (documentary) audit specifics

When the audit is postal rather than live:

- Request objective evidence (redacted real records), not statements.
- Specify the exact version so the evidence matches what you will run.
- Require a signed attestation from the supplier's quality function that the evidence is true and current.
- Score the package against a checklist and issue a formal report just as for a live audit.
- Escalate to a remote or on-site audit if the package raises a question you cannot resolve on paper.

## 7. Finding classification

| Severity | Meaning |
|---|---|
| Critical | A failure that undermines reliance; the supplier work cannot be trusted as-is |
| Major | A significant gap requiring CAPA before reliance is acceptable |
| Minor | A gap that does not block reliance but needs correction |
| Observation | A recommendation, no nonconformity |

## 8. Acceptance criteria for the audit

- The agenda areas were covered and the requested documents were received or their absence noted.
- At least one requirement was traced end to end and a failed test was examined.
- Records were sampled across two or more releases (live) or objective evidence with attestation was provided (postal).
- A developer and a tester were interviewed (live).
- Findings are classified and an audit report is issued with the reliance recommendation.

## 9. Report structure

Supplier and product; scope and method; team and dates; evidence examined (named records); findings by severity with CAPA and due dates; the reliance recommendation feeding the assessment report; conclusion; auditor signatures.

## 10. References

> FDA Computer Software Assurance final guidance (24 September 2025); EU GMP Annex 11 sections 3.1 and 3.2; PIC/S PI 011; GAMP 5 Second Edition (described in original wording). Confirm current versions before issue.

## 11. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Lead auditor | `<<FILL>>` | | |
| QA | `<<FILL>>` | | |

---

## Filled specimen

A remote audit plan executed for an example configured EBR platform (illustrative).

| Field | Entry |
|---|---|
| Supplier / product / version | Example EBR vendor / EBR platform / 5.2 |
| Type and tier | Remote audit, tier High |
| Records named live | Requirement REQ-441 traced to test TC-441; failed test TC-388 and its resolution; release records 5.1 and 5.2 |
| Interviews | One developer (build pipeline), one QA tester (regression suite) |
| Findings | Major: no regression evidence for the 5.2 point release. CAPA: supplier to provide regression report, due 21 June 2026, reliance on 5.2 held until received |
| Reliance recommendation | Approve reliance on delivered workflow engine and standard reports once the regression evidence is received; test configured review steps and custom calculations in-house |

The audit found a real gap (missing regression evidence) precisely because the auditor named the records and sampled two releases instead of accepting the demo.

## Common inspection findings this plan prevents

- An audit that reviewed the quality manual but never examined software engineering evidence.
- A "sales demo" audit where the supplier showed only polished records.
- A postal audit that was a glorified questionnaire with no objective evidence or attestation.
- Reliance on a point release whose regression testing was never confirmed.

## How to adapt this plan

1. Set the document number and link the governing SOP.
2. Tune the document request list and agenda to the product type.
3. Keep the sampling strategy intact; it is the part that finds real gaps.
4. Feed the reliance recommendation into the supplier assessment report.
5. Confirm the references against current published versions before issue.
