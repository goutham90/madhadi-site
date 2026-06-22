---
title: "Form: Change Request and Change Control Record"
description: "A plug-and-play change control record for validated computerized systems: every field an inspector expects, with enforced approve-before-implement sequencing, a filled specimen, and the findings it prevents."
pubDate: 2026-06-21
docType: "Form"
pillar: "csv-csa"
relatedArticles: ["change-control-validated-systems"]
tags: ["change control", "change request", "csv", "validation", "form", "configuration management"]
tier: "Intermediate"
---

This is a ready-to-use change control record. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document and change numbers, and route it through the controlling SOP. A worked filled specimen follows the blank form so you can see how a completed record reads. This form pairs with the change control SOP and the impact-and-risk assessment template; attach the assessment to this record rather than duplicating it here.

## Document control header

| Field | Entry |
|---|---|
| Form title | Change Request and Change Control Record |
| Form number | `<<FILL: FORM-ID, e.g. FORM-VAL-021-01>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Controlling SOP | `<<FILL: SOP-ID for change control>>` |
| Retention | Per records retention schedule, not less than `<<FILL: retention period>>` |

## Section A. Change identification (completed by requestor)

| Field | Entry |
|---|---|
| Change control ID | `<<FILL: e.g. CC-2026-0142>>` |
| Date raised | `<<FILL: date>>` |
| Requestor (name, role) | `<<FILL>>` |
| Title | `<<FILL: one line, plain language>>` |
| Description of change | `<<FILL: what is changing, in enough detail to assess without a meeting>>` |
| Validated system (name, ID) | `<<FILL: SYSTEM NAME / ID>>` |
| Configuration item(s) affected | `<<FILL: the specific component, e.g. application version, audit trail config>>` |
| Current state / baseline value | `<<FILL: e.g. v8.2.1>>` |
| Proposed state / target value | `<<FILL: e.g. v8.4.0>>` |
| Reason for change | `<<FILL: defect fix / upgrade / security patch / new requirement / obsolescence>>` |
| Supporting documents attached | `<<FILL: release notes, vendor regulatory support package, ref numbers>>` |
| Requested implementation window | `<<FILL: date or "to be scheduled after approval">>` |

## Section B. Impact and risk assessment (completed by validation / CSV)

| Field | Entry |
|---|---|
| Assessment reference | `<<FILL: attached impact-and-risk assessment ID>>` |
| GxP functions reviewed | `<<FILL: count or "see attached function-by-function table">>` |
| Functions affected | `<<FILL: list, or "none, see attached basis">>` |
| Within validated design space | Yes / No / Partly (explain) |
| Audit trail / electronic records affected | Yes / No (if Yes, see assessment) |
| Data integrity risk during transition | `<<FILL: describe and how mitigated>>` |
| Rollback plan exists and tested | Yes / No |
| Impact conclusion | No impact / Low impact / High impact |
| Assessor (name, role, date) | `<<FILL>>` |

## Section C. Categorization

| Field | Entry |
|---|---|
| Category assigned | 1 Minor / 2 Major / 3 Significant |
| Basis for category | `<<FILL: tie to the impact conclusion, not the requestor's label>>` |
| If category escalated from default, why | `<<FILL: or N/A>>` |

## Section D. Implementation and test plan (completed before approval)

| Field | Entry |
|---|---|
| Implementation steps and sequence | `<<FILL: or reference attached plan>>` |
| Who implements | `<<FILL: role/name>>` |
| Rollback plan | `<<FILL: or reference attached>>` |
| Test plan reference | `<<FILL: protocol ID or attached>>` |
| Acceptance criteria | `<<FILL: what counts as pass, including boundary / challenge cases>>` |
| Independent test reviewer | `<<FILL: not the person implementing>>` |

## Section E. Pre-implementation approval

The change must not be implemented until every required signature below is dated. The approval date must precede the implementation date in Section F.

| Role | Name | Signature | Date | Required for category |
|---|---|---|---|---|
| Requestor | `<<FILL>>` | | | 1, 2, 3 |
| System owner | `<<FILL>>` | | | 2, 3 |
| IT / system administrator | `<<FILL>>` | | | 2, 3 |
| Validation / CSV | `<<FILL>>` | | | 2, 3 |
| Quality Assurance | `<<FILL>>` | | | 1, 2, 3 |

## Section F. Implementation record (completed at implementation)

| Field | Entry |
|---|---|
| Implemented by (name, role) | `<<FILL>>` |
| Implementation date | `<<FILL: must be on or after the approval date>>` |
| Deviations from the plan | `<<FILL: none, or describe>>` |
| Rollback invoked | No / Yes (if Yes, reference deviation) |

## Section G. Verification and test evidence

| Field | Entry |
|---|---|
| Test protocol executed (ID) | `<<FILL>>` |
| Result | Pass / Pass with handled failures / Fail |
| Test failures and disposition | `<<FILL: none, or reference test-failure record and root cause>>` |
| Evidence location | `<<FILL: where executed protocols are filed>>` |
| Reviewed by (independent, date) | `<<FILL>>` |

## Section H. Baseline update and closure

| Field | Entry |
|---|---|
| Configuration baseline updated | Yes / No |
| Baseline item(s) changed | `<<FILL: from value to value, this CC ID recorded>>` |
| Related deviation / CAPA | `<<FILL: number or N/A>>` |
| All actions complete | Yes / No |
| QA closure (name, signature, date) | `<<FILL>>` |

## Acceptance criteria

This record is complete and defensible when all of the following are true:

- Sections A through C identify what changed, on which system and item, why, and the assessed category, with the category tied to the impact conclusion.
- The implementation and test plan (Section D) was defined before the approvals in Section E were signed.
- Every signature required for the assigned category is present and dated in Section E.
- The implementation date in Section F is on or after the latest pre-implementation approval date in Section E.
- Section G shows executed test evidence with an independent review, and any failure is dispositioned, not silently re-run.
- Section H confirms the baseline is updated to the new state and QA has signed closure after all testing.

## References

> EU GMP Annex 11, section 10 (change and configuration management).
> 21 CFR 211.68, 211.100; 21 CFR Part 11; 21 CFR 820.30(i), 820.70(i).
> GAMP 5, Second Edition (2022); ICH Q9 and Q10.

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen

The following shows the record completed for an example chromatography data system patch, so you can see the detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

**Section A**

| Field | Entry |
|---|---|
| Change control ID | CC-2026-0188 |
| Date raised | 03 June 2026 |
| Requestor | M. Sato, QC Systems Analyst |
| Title | Vendor patch 6.3.2-hf1 to chromatography data system, described as "minor printing fix" |
| Validated system | Chromatography Data System, server CDS-PRD-01 |
| Configuration item | Application patch level; vendor notes also touch reporting engine |
| Current / proposed state | 6.3.2 to 6.3.2-hf1 |
| Reason for change | Vendor hotfix |
| Supporting documents | Vendor release note RN-6.3.2-hf1 attached |

**Section B**

| Field | Entry |
|---|---|
| Functions reviewed | 9 (see attached function table, assessment AS-2026-0188) |
| Functions affected | CoA report rendering (shares code with print module) |
| Within validated design space | Partly: reporting output is a GxP output |
| Audit trail affected | No (confirmatory check only) |
| Impact conclusion | Low impact: verify CoA output on affected templates |

**Section C** Category assigned: 2 Major. Basis: affects a non-critical-path GxP output (CoA rendering), not core result calculation; escalated from the requestor's "minor printing fix" label because rendering of a GxP output is in scope.

**Section E** Requestor M. Sato 04 Jun; System owner A. Lindqvist 05 Jun; IT D. Cho 05 Jun; Validation P. Rao 08 Jun; QA R. Gomez 09 Jun 2026.

**Section F** Implemented by D. Cho on 11 June 2026 (after the 09 June QA approval). No deviations from plan.

**Section G** Protocol VT-2026-0188 executed; result Pass. CoA before/after comparison on three template types matched expected output. Reviewed by P. Rao, 12 June 2026.

**Section H** Baseline updated 6.3.2 to 6.3.2-hf1 against CC-2026-0188. No related deviation. QA closed by R. Gomez, 12 June 2026.

In this example the requestor's "minor printing fix" label was not accepted at face value; the assessment found the patch touched CoA rendering, the change was categorized Major and tested on that output, approval preceded implementation, and the baseline was updated at closure. That is the difference between a controlled change and an uncontrolled one with a label on it.

## Common inspection findings this form prevents

- A change record with no impact assessment, only the requestor's description.
- An implementation date that precedes the approval date.
- A category set from the requestor's label rather than from the impact conclusion.
- A record closed before the test evidence is complete, or evidence reviewed by the same person who made the change.
- A configuration baseline that no longer matches what is running, because the baseline field was never updated.
- A change that bundled extra reconfiguration outside its stated scope, so it cannot be told what was tested for what.

## How to adapt this form

1. Set your form number and the controlling SOP ID in the header.
2. Align the category column in Section E with your own tier scheme and required signatories.
3. If you run change control in a validated electronic workflow, map each section to a system field and make sure the tool enforces the approve-before-implement gate between Sections E and F.
4. Attach, do not retype, the impact-and-risk assessment and the executed test protocols; keep this record as the index that ties them together.
5. Confirm every regulation in the references against the current published version before issue.
