---
title: "Checklist: Periodic TMF Review and Inspection-Readiness Health Check"
description: "A plug-and-play checklist for the scheduled TMF health check: completeness, timeliness, quality, placeholders, reconciliation, and retrieval, with pass/fail/NA items, a filled specimen, and the findings it prevents."
pubDate: 2026-06-25
docType: "Checklist"
pillar: "clinical-gcp"
relatedArticles: ["etmf-trial-master-file"]
tags: ["TMF", "eTMF", "checklist", "clinical-gcp", "inspection-readiness", "ICH E6", "QC"]
tier: "Intermediate"
---

This is a ready-to-use checklist for a periodic TMF review (the formal health check) and for pre-inspection readiness. Replace every `<<FILL: ...>>` placeholder with your specifics. Score each item Pass, Fail, or NA, and convert every Fail into a tracked action with an owner and a date. A filled specimen follows. Verify cited regulations against the current source. This is general guidance to adapt, not legal or regulatory advice.

## Header

| Field | Entry |
|---|---|
| Study / protocol | `<<FILL>>` |
| Review type | `<<FILL: start-up / quarterly / database lock / pre-inspection>>` |
| Review period | `<<FILL: from>>` to `<<FILL: to>>` |
| Reviewer | `<<FILL: name, role>>` |
| Date | `<<FILL>>` |
| Reference model version | `<<FILL>>` |

## 1. Structure and governance

| # | Item | Reference | Result |
|---|---|---|---|
| 1.1 | TMF Management Plan is current, approved, and matches the file in use | TMF Plan | Pass / Fail / NA |
| 1.2 | Reference-model version stated and applied consistently | TMF Plan | Pass / Fail / NA |
| 1.3 | Study TMF Index is tailored; exclusions documented with rationale | E6 Section 8 | Pass / Fail / NA |
| 1.4 | Expected-document list loaded into the eTMF and drives completeness | TMF Plan | Pass / Fail / NA |

## 2. Completeness

| # | Item | Reference | Result |
|---|---|---|---|
| 2.1 | Completeness measured against the tailored expected list, not an out-of-box list | TMF Plan | Pass / Fail / NA |
| 2.2 | Completeness weighted by criticality (safety, consent, approvals weighted high) | E6 Section 8 | Pass / Fail / NA |
| 2.3 | Trial, country, and site completeness each at or above target | TMF Plan | Pass / Fail / NA |
| 2.4 | High-risk artifacts present: consent versions, IRB/IEC and regulatory approvals, delegation logs, safety reports | E6 Section 8 | Pass / Fail / NA |

## 3. Timeliness

| # | Item | Reference | Result |
|---|---|---|---|
| 3.1 | Timeliness measured from the trigger event, not the upload date | ALCOA+ contemporaneous | Pass / Fail / NA |
| 3.2 | Critical/safety documents meet the critical timeliness target | TMF Plan | Pass / Fail / NA |
| 3.3 | No pattern of late filing at any single site | E6 Section 8 | Pass / Fail / NA |

## 4. Quality

| # | Item | Reference | Result |
|---|---|---|---|
| 4.1 | QC first-pass rate at or above target | TMF Plan | Pass / Fail / NA |
| 4.2 | Misclassification rate below target | TMF Plan | Pass / Fail / NA |
| 4.3 | No superseded versions filed as current (sample-checked) | E6 Section 8 | Pass / Fail / NA |
| 4.4 | True-copy verification present for scanned originals | 21 CFR Part 11 / Annex 11 | Pass / Fail / NA |

## 5. Placeholders and exceptions

| # | Item | Reference | Result |
|---|---|---|---|
| 5.1 | Every empty placeholder has a dated rationale or expected date | E6 Section 8 | Pass / Fail / NA |
| 5.2 | No back-dated documents; gaps handled with current-dated notes | data integrity | Pass / Fail / NA |
| 5.3 | Open placeholders trending down with owners assigned | TMF Plan | Pass / Fail / NA |

## 6. Reconciliation

| # | Item | Reference | Result |
|---|---|---|---|
| 6.1 | Sponsor TMF reconciles with each ISF for sites in scope | E6 Section 8 | Pass / Fail / NA |
| 6.2 | Reconciliation documented, not just asserted | E6 Section 8 | Pass / Fail / NA |
| 6.3 | Any prior CRO transfer closed with a dual-signed reconciliation statement | TMF Plan | Pass / Fail / NA |

## 7. eTMF system controls

| # | Item | Reference | Result |
|---|---|---|---|
| 7.1 | eTMF validated; access role-based with unique logins (no shared accounts) | 21 CFR Part 11 / Annex 11 | Pass / Fail / NA |
| 7.2 | Audit trail captures status changes, metadata edits, and deletions, and is reviewable | Annex 11 section 9 | Pass / Fail / NA |
| 7.3 | System clock controlled so filing dates and timestamps are reliable | Annex 11 | Pass / Fail / NA |

## 8. Inspection readiness

| # | Item | Reference | Result |
|---|---|---|---|
| 8.1 | Named-document retrieval tested for speed and accuracy | inspection practice | Pass / Fail / NA |
| 8.2 | Inspector direct access arranged where required | EU 536/2014 Art. 57 | Pass / Fail / NA |
| 8.3 | A current TMF narrative exists: structure, metrics, known gaps, remediation | inspection practice | Pass / Fail / NA |
| 8.4 | Staff who answer TMF questions briefed to explain structure and gaps honestly | inspection practice | Pass / Fail / NA |

## 9. Outcome and actions

| Finding (each Fail) | Risk | Action | Owner | Due | Closed |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 10. Signoff

| Role | Name | Signature | Date |
|---|---|---|---|
| Reviewer | `<<FILL>>` | | |
| TMF Lead | `<<FILL>>` | | |
| Clinical QA | `<<FILL>>` | | |

---

## Filled specimen

The following shows two lines from a completed pre-inspection review. Details are illustrative; replace with your own.

| # | Item | Result | Note |
|---|---|---|---|
| 2.4 | High-risk artifacts present | Fail | Site 11 missing IRB approval for Amendment 3; pending file |
| 8.1 | Retrieval tested | Pass | 10 named documents retrieved in under 2 minutes each |

Action from 2.4: chase the Amendment 3 IRB approval from site 11, risk-assess the gap, document the expected date; owner TMF Lead; due in 5 business days; status open. The point of the checklist is that a Fail becomes a dated action with an owner, not a note that disappears.

## Common inspection findings this checklist prevents

- A TMF assembled before inspection rather than maintained continuously.
- Completeness measured against the wrong denominator, hiding real gaps.
- Late filing patterns at a single site missed because only trial-level metrics were viewed.
- Empty placeholders and back-dated documents.
- Audit-trail review for the eTMF never demonstrated.

## How to adapt this checklist

1. Set the study, reference-model version, and targets in the header and rows.
2. Add study-specific high-risk artifacts to section 2.4 (for example eConsent validation for a decentralized trial).
3. Point references to your TMF Management Plan and SOPs.
4. Confirm every regulation against the current published version before use.
