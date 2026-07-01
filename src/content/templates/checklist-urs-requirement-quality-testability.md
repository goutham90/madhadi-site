---
title: "Checklist: URS Requirement Quality and Testability Review"
description: "A plug-and-play review checklist to confirm each requirement in a URS is atomic, testable, uniquely identified, risk- and GxP-classified, and free of solution language, before configuration and testing begin, with a filled specimen and the regulations it satisfies."
pubDate: 2026-07-01
docType: "Checklist"
pillar: "csv-csa"
relatedArticles: ["user-requirements-and-traceability"]
tags: ["urs", "requirements", "testability", "review", "traceability", "gamp 5", "csv"]
tier: "Intermediate"
---

This is a ready-to-use checklist for reviewing a User Requirements Specification before it is approved and before configuration or testing starts. It catches the requirement defects that quietly wreck a validation: vague wording, compound statements, missing IDs, absent data integrity controls, and solution language that belongs in a design spec. Run it per requirement for the critical ones, and per document for the whole-URS checks. Mark Pass, Fail, or N/A with a note; any Fail is fixed before approval. Replace every `<<FILL: ...>>` placeholder with your own specifics. A worked filled specimen follows. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| URS under review | `<<FILL: title and doc no>>` |
| System | `<<FILL: system name / ID>>` |
| GAMP category | `<<FILL: 3 / 4 / 5>>` |
| Reviewer(s) | `<<FILL: names and roles, incl. QA and SME>>` |
| Review date | `<<FILL: date>>` |

## Part A: whole-document checks (run once for the URS)

| # | Item | Reference | Result |
|---|---|---|---|
| A1 | Document control is complete: title, number, version, author, reviewers, approvers, effective date. | GDocP | Pass / Fail / NA |
| A2 | Purpose, scope, and system context (interfaces, GxP use) are stated. | Annex 11 | Pass / Fail / NA |
| A3 | Requirements are grouped by category (functional, data, interface, data integrity, security, performance, operational, reporting). | GAMP 5 | Pass / Fail / NA |
| A4 | Part 11 / Annex 11 controls are present as explicit requirements: audit trail, unique user IDs, access control/segregation of duties, e-signature components, time synchronization, record retention. | 21 CFR Part 11; Annex 11 | Pass / Fail / NA |
| A5 | The URS reflects the company's needs, not a vendor brochure; authorship is the regulated company's. | Annex 11 cl. 4.4 | Pass / Fail / NA |
| A6 | Every requirement has a unique, stable ID with no renumbering. | GAMP 5 | Pass / Fail / NA |
| A7 | A GxP flag and a risk/priority field exist on every requirement. | ICH Q9; Annex 11 cl. 4.4 | Pass / Fail / NA |
| A8 | The document is set up to trace into the RTM (IDs usable as the traceability spine). | Annex 11 cl. 4.4 | Pass / Fail / NA |
| A9 | Reviewed and approved by system owner, QA, and an SME before configuration. | ICH Q10 | Pass / Fail / NA |

## Part B: per-requirement checks (run for each requirement, at least all GxP-critical ones)

| # | Item | Result |
|---|---|---|
| B1 | Atomic: one requirement per statement (no hidden "and" splitting it into two). | Pass / Fail / NA |
| B2 | Unambiguous: no "user-friendly," "fast," "as appropriate," "as needed," "industry standard," "etc." as the operative term. | Pass / Fail / NA |
| B3 | Measurable: quantities and limits are stated (time, count, threshold, tolerance). | Pass / Fail / NA |
| B4 | Stated as trigger plus action plus expected result, so a tester can design one objective pass/fail test. | Pass / Fail / NA |
| B5 | "Shall" for mandatory, "should" for desirable, used consistently; desirables will not block release. | Pass / Fail / NA |
| B6 | No solution/design language (names what, not how; internal mechanisms belong in the DS). | Pass / Fail / NA |
| B7 | Unique ID present and stable. | Pass / Fail / NA |
| B8 | GxP flag and risk/priority set, consistent with the requirement's impact. | Pass / Fail / NA |
| B9 | Source referenced (regulation, SOP, business need, process step) so it is not an orphan. | Pass / Fail / NA |
| B10 | A competent tester with no access to the author could verify it from the text alone. | Pass / Fail / NA |

## Acceptance criteria

The URS is ready for approval when every Part A item is Pass, every GxP-critical requirement passes all Part B checks, and every Fail has been corrected (not waived). A single untestable or compound GxP-critical requirement is enough to send the document back.

## References

> EU GMP Annex 11 (Computerised Systems), clause 4.4 (URS based on documented risk assessment, traceable across the lifecycle).
> 21 CFR Part 11 (electronic records and signatures).
> ISPE GAMP 5, Second Edition (requirements as the anchor for specification, risk, and verification).
> FDA, Computer Software Assurance for Production and Quality Management System Software (final, 24 September 2025).
> ICH Q9 (Quality Risk Management); ICH Q10 (Pharmaceutical Quality System).

Confirm the current version and clause numbers before issue, and confirm the in-force Annex 11.

## Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| Reviewer (SME) | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the per-requirement check applied to three requirements from an illustrative LIMS URS, so you can see how the review catches defects.

| Req ID | Requirement text (as submitted) | Check result | Reviewer action |
|---|---|---|---|
| URS-041 | The system shall be user-friendly and fast. | B2 Fail, B3 Fail, B1 Fail (compound) | Rejected. Split and rewritten: URS-041a response time within 5 seconds for a sample search at 50 concurrent users (Desirable); usability moved to a UAT acceptance task. |
| URS-052 | When a saved GxP record is modified, the system shall record a time-stamped, attributable audit entry capturing old value, new value, user, date/time, and reason. | All Pass | Accepted. GxP flag Yes, risk High, traced to OQ. |
| URS-058 | The system shall use a database trigger to prevent self-approval of results. | B6 Fail (solution language) | Rewritten as URS-058: the system shall prevent a user from approving a result the same user entered. The database-trigger detail moved to the design specification. |

The point the specimen makes: URS-052 sails through because it is atomic, measurable, and stated as trigger plus result; URS-041 and URS-058 fail on specific, nameable defects, and the reviewer records the exact fix rather than a vague "improve." That is what turns a review from a rubber stamp into a control.

## Common inspection findings this checklist prevents

- A URS full of untestable requirements ("user-friendly," "as appropriate"), so acceptance was never truly defined.
- Data integrity controls (audit trail, unique IDs, e-signature) assumed rather than written as requirements, so they were never specified or tested.
- Compound requirements tested with a single script, leaving part of the requirement unverified but appearing covered.
- A URS that reads like the vendor's product description, with no evidence the regulated company defined its own needs.
- Requirements with no IDs or with renumbering, so the traceability matrix cannot hold.

## How to adapt this checklist

1. Set the URS, system, and GAMP category in the header.
2. Align the Part A data integrity row (A4) with your standard Part 11 / Annex 11 control list.
3. For a low-risk configured product, you may run Part B only on the GxP-critical requirements and sample the rest; record that scoping decision.
4. Keep QA and an SME as named reviewers; requirement quality is not a solo review.
5. Confirm every regulation against the current published version before issue.
