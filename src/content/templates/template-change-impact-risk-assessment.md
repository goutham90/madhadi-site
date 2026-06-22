---
title: "Template: Change Impact and Risk Assessment for Validated Systems"
description: "A plug-and-play impact-and-risk assessment for changes to validated systems: function-by-function impact analysis, risk scoring, revalidation scope, and a defensible conclusion, with a filled specimen and the findings it prevents."
pubDate: 2026-06-21
docType: "Risk Assessment"
pillar: "csv-csa"
relatedArticles: ["change-control-validated-systems"]
tags: ["change control", "impact assessment", "risk assessment", "revalidation", "csv", "validation"]
tier: "Advanced"
---

This is a ready-to-use impact-and-risk assessment. Replace every `<<FILL: ...>>` placeholder with your own specifics, attach it to the change control record, and route it through the controlling SOP. A worked filled specimen follows the template so you can see the level of detail an inspector expects. This is the analytical heart of a change control: it is the document a reviewer reads first to judge how well your change program actually reasons.

## Document control header

| Field | Entry |
|---|---|
| Document title | Change Impact and Risk Assessment |
| Assessment ID | `<<FILL: e.g. AS-2026-0142>>` |
| Linked change control ID | `<<FILL: e.g. CC-2026-0142>>` |
| Validated system (name, ID) | `<<FILL: SYSTEM NAME / ID>>` |
| Controlling SOP | `<<FILL: SOP-ID for change control>>` |
| Assessor (name, role) | `<<FILL>>` |
| Date | `<<FILL: date>>` |

## 1. Change summary

| Field | Entry |
|---|---|
| Description of change | `<<FILL: what is changing>>` |
| Configuration item(s) | `<<FILL: the specific component>>` |
| Current state | `<<FILL: e.g. v8.2.1>>` |
| Proposed state | `<<FILL: e.g. v8.4.0>>` |
| Source of change information | `<<FILL: vendor release notes RN-x, requirement, defect ticket>>` |

State up front that the requestor's description is the hypothesis under test, not the conclusion. The assessment exists to confirm or correct it.

## 2. Function-by-function impact analysis

List the GxP functions of the system, taken from the user requirements, functional requirements, or the requirements traceability matrix. For each, state whether the change affects it, the basis for that judgment, and the testing it drives. Do not write a single blanket conclusion; the table is the evidence that you actually reasoned function by function.

| GxP function (from URS / FRS / RTM) | Affected? | Basis (release note item, code area, design space) | Testing required |
|---|---|---|---|
| `<<FILL: function 1, e.g. sample login / chain of custody>>` | Yes / No | `<<FILL>>` | `<<FILL: none / confirmatory / regression / full>>` |
| `<<FILL: function 2, e.g. result entry and rounding>>` | Yes / No | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: function 3, e.g. specification / OOS evaluation>>` | Yes / No | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: function 4, e.g. audit trail capture>>` | Yes / No | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: function 5, e.g. electronic signature>>` | Yes / No | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: function 6, e.g. report / CoA generation>>` | Yes / No | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: add rows for every GxP function>>` | | | |

## 3. Design space and electronic records

| Question | Answer |
|---|---|
| Is the change within the validated design space? | Yes / No / Partly: `<<FILL: explain>>` |
| Does it affect audit trail capture or content? | Yes / No: `<<FILL>>` |
| Does it affect electronic signatures or record integrity? | Yes / No: `<<FILL>>` |
| Does it affect data retention, archival, or backup? | Yes / No: `<<FILL>>` |
| Does it affect any ALCOA+ property of the records? | Yes / No: `<<FILL: which property>>` |

If any answer in this section is Yes, the change defaults to the highest category and the burden is on the rest of the assessment to argue it down with evidence.

## 4. Risk evaluation

Score the change on severity and probability, then read the risk level from the matrix. Severity is the consequence if the change introduces a defect in an affected function. Probability is how likely the change is to introduce a defect, given how it was developed and tested upstream (a mature vendor-validated patch carries different residual risk than a custom configuration written last week).

| Risk factor | Rating | Justification |
|---|---|---|
| Severity (impact on patient safety, product quality, data integrity) | High / Medium / Low | `<<FILL>>` |
| Probability (likelihood the change introduces a defect) | High / Medium / Low | `<<FILL: maturity of the change, upstream testing, complexity>>` |
| Detectability (likelihood a defect would be caught by routine controls) | High / Medium / Low | `<<FILL: existing checks, audit trail review, second-person review>>` |

| Severity \ Probability | Low | Medium | High |
|---|---|---|---|
| **High** | Medium | High | High |
| **Medium** | Low | Medium | High |
| **Low** | Low | Low | Medium |

Resulting risk level: `<<FILL: Low / Medium / High>>`. Where detectability is poor (a defect would not be caught by routine controls), raise the testing depth one step regardless of the matrix output, and record why.

## 5. Data integrity risk during the transition

The change itself can put data at risk even if the end state is fine. Address the transition, not just the destination.

| Transition risk | Present? | Mitigation |
|---|---|---|
| Data loss or corruption during migration / upgrade | Yes / No | `<<FILL: backup verified before change, dry run, checksum>>` |
| Period where the audit trail is off or incomplete | Yes / No | `<<FILL: window controlled, manual record, verified re-enabled>>` |
| Configuration drift between environments | Yes / No | `<<FILL: baseline compared before and after>>` |
| In-flight records or open transactions affected | Yes / No | `<<FILL: quiesce, schedule, reconcile>>` |
| Rollback would lose or alter records | Yes / No | `<<FILL: rollback tested, record-preserving>>` |

## 6. Conclusion and revalidation scope

State one conclusion and tie the testing scope to the functions flagged in section 2, not to the category label.

| Field | Entry |
|---|---|
| Impact conclusion | No impact / Low impact / High impact |
| Change category (predicted) | 1 Minor / 2 Major / 3 Significant |
| Functions requiring revalidation | `<<FILL: list from section 2>>` |
| Functions requiring confirmatory check only | `<<FILL: list>>` |
| Functions not requiring testing (and why) | `<<FILL: list with basis>>` |
| Reliance on vendor documentation | `<<FILL: regulatory support package ID and what it covers, or N/A>>` |
| Site-specific testing where use diverges from vendor | `<<FILL: describe, or N/A>>` |
| Test protocol(s) to be executed | `<<FILL: protocol IDs>>` |

The conclusion must follow from the table. "No impact" with no function analysis is an assertion, not an assessment, and will be rejected.

## Acceptance criteria

This assessment is complete and defensible when all of the following are true:

- Every GxP function is listed in section 2 with an affected / not-affected call and a stated basis, not a single blanket conclusion.
- Sections 3 and 5 address audit trail, electronic records, ALCOA+, and the transition itself, not only the end state.
- The risk level in section 4 is derived from severity and probability with written justification, and poor detectability raises the testing depth.
- The revalidation scope in section 6 maps directly to the functions flagged as affected, with a stated reason for any function not tested.
- Reliance on vendor documentation is identified and supplemented with site-specific testing where the configuration or use diverges.

## References

> EU GMP Annex 11, sections 1 (risk management), 4 (validation), and 10 (change and configuration management).
> ICH Q9 (Quality Risk Management) for the severity / probability / detectability framework.
> GAMP 5, Second Edition (2022), risk-based approach and supplier reliance.
> FDA Computer Software Assurance for Production and Quality System Software (draft 2022, finalized 2025).
> ICH Q8(R2) (design space) and Q12 (lifecycle management) for the process-change analogue.
> 21 CFR Part 11; 21 CFR 211.68; 21 CFR 820.70(i) for device software.

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen

The following shows the assessment completed for an example LIMS upgrade, so you can see the specificity an inspector wants instead of a one-line conclusion. The company, system, and numbers are illustrative; replace them with your own.

**Change summary:** Upgrade of LIMS from v8.2 to v8.4 (vendor minor release, source: release notes RN-8.4). Configuration item: application version, CC-2026-0142.

**Function-by-function impact (section 2):**

| GxP function (from RTM) | Affected? | Basis | Testing required |
|---|---|---|---|
| Sample login and chain of custody | No | Release notes show no change to login module | None |
| Result entry and significant-figure rounding | Yes | Release note item 4.1 changes the rounding engine | Regression across boundary values |
| Specification evaluation / OOS flagging | Yes | Depends on rounded result | Verify OOS triggers at spec limits with known data |
| Audit trail capture | No | No change noted; verify by spot check | Confirmatory check only |
| Electronic signature on approval | No | No change noted | None |
| CoA report generation | Yes | Templates re-rendered by new reporting engine | Compare CoA output before/after for a known sample |

**Design space and records (section 3):** Partly within design space; rounding and reporting outputs are GxP. Audit trail and e-signature not changed (confirmatory only). ALCOA+ accuracy is touched through rounding, so the change carries Category 3 weight.

**Risk evaluation (section 4):** Severity High (rounding feeds OOS decisions and the CoA). Probability Medium (vendor-validated minor release, but the rounding engine was rewritten). Detectability Medium (second-person review of results plus audit trail review). Risk level: High.

**Transition risk (section 5):** Full backup verified before upgrade; upgrade run first in the qualification environment; baseline compared before and after; rollback tested and record-preserving. No in-flight transactions during the maintenance window.

**Conclusion (section 6):** High impact, Category 3. Revalidation of rounding, OOS flagging, and CoA output; confirmatory checks on audit trail and e-signature; no testing on login or chain of custody (unchanged per release notes). Vendor regulatory support package RSP-8.4 reviewed and relied on for general functional testing; site-specific testing added for the local CoA templates and custom spec limits. Protocols VT-2026-0142-A (rounding/OOS) and VT-2026-0142-B (CoA) to be executed.

The conclusion writes itself from the table: a scope you can defend line by line, with a clear reason for each function tested and each function not tested.

## Common inspection findings this template prevents

- A "no GxP impact" conclusion with no analysis of which functions were considered.
- A revalidation scope that retests everything (signaling you do not understand your own system) or nothing (a finding waiting to happen).
- Risk asserted as "low" with no severity / probability reasoning behind it.
- An assessment that addresses the end state but ignores data loss or audit-trail gaps during the transition itself.
- Blind reliance on a vendor regulatory support package with no site-specific testing where your configuration diverges.
- A category set before the assessment, with the analysis bent to fit the fast lane.

## How to adapt this template

1. Set your assessment and change control IDs and the controlling SOP in the header.
2. Replace the example functions in section 2 with the actual GxP functions from your requirements traceability matrix for this system.
3. If your quality system uses a different risk method (for example an FMEA with a risk priority number), substitute it in section 4 but keep severity, probability, and detectability traceable.
4. For cloud and SaaS changes, add a row in section 5 for the shared-responsibility split and the vendor notification timeline.
5. Confirm every regulation in the references against the current published version before issue.
