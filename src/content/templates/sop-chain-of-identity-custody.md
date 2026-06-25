---
title: "SOP: Chain of Identity and Chain of Custody for Cell and Gene Therapy"
description: "A plug-and-play SOP for COI and COC in autologous and patient-specific CGT: identifier assignment, two-identifier verification at every handoff, condition monitoring, reconciliation, and break handling, with a filled specimen."
pubDate: 2026-06-25
docType: "SOP"
pillar: "cell-gene-therapy"
relatedArticles: ["atmp-gmp-cell-gene-manufacturing"]
tags: ["cell-gene-therapy", "ATMP", "chain-of-identity", "chain-of-custody", "SOP", "GMP", "traceability"]
tier: "Advanced"
---

This is a ready-to-use SOP for chain of identity (COI) and chain of custody (COC) in cell and gene therapy. Replace every `<<FILL: ...>>` placeholder with your own specifics and route it through document control. A filled specimen follows. Verify each cited regulation against the current source. This is general guidance to adapt, not legal or regulatory advice.

## Document control header

| Field | Entry |
|---|---|
| Document title | Chain of Identity and Chain of Custody for CGT |
| Document number | `<<FILL: e.g. SOP-MFG-040>>` |
| Version | `<<FILL: e.g. 1.0>>` |
| Effective date | `<<FILL: date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of CGT Operations>>` |
| Applies to | `<<FILL: products / sites in scope>>` |

## 1. Purpose

This procedure ensures that, for autologous and patient-specific allogeneic products, the identity of the patient is maintained unbroken from collection to administration (chain of identity), and that physical possession and storage conditions are documented and within limits throughout (chain of custody). The objective is to make a patient mix-up impossible, not merely unlikely, and to detect any condition excursion that could compromise the product.

## 2. Scope

Applies to all material derived from or destined for an identified patient: apheresis or tissue collection, transport, manufacturing, cryopreservation, release, return shipment, thaw, and administration, across `<<FILL: collection sites, manufacturing site, treatment sites>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Collection site staff | Assign the COI identifier and a secondary identifier at collection; first custody handoff. |
| Manufacturing operations | Verify identity at receipt and each step; carry the COI identifier into the batch record; segregate concurrent batches. |
| QC / QA | Oversee COI/COC integrity; manage deviations on any break; support disposition. |
| Cold-chain / logistics | Qualified shippers, continuous condition monitoring, custody documentation. |
| Treating clinical team | Bedside two-identifier verification against the patient before administration. |

## 4. Definitions

- **Chain of identity (COI)**: the unbroken documented link between the patient and every material derived from or destined for that patient.
- **Chain of custody (COC)**: the documented history of physical possession and storage/transport conditions.
- **COI identifier**: a unique, patient-linked identifier (for example a Donor/Patient Identification Number) assigned at the earliest point and carried on every record, label, and the batch.
- **Two-identifier check**: verification using at least two independent identifiers (for example the COI number plus date of birth, or plus a second site identifier).

## 5. Procedure: chain of identity

1. **Assign at collection.** The collection site applies the COI identifier and at least one secondary identifier to the bag and the accompanying record before the material leaves the room.
2. **Verify at every handoff.** Each receiving party performs an independent two-identifier check and records who checked, when, and the result. No material advances until the check passes.
3. **Carry into the batch record.** The COI identifier is the batch identifier or is rigidly cross-referenced to it. For single-patient batches the batch record and the COI record are effectively one object.
4. **Re-verify before any irreversible step.** Before cryopreservation, before any pooling, and before administration, repeat the two-identifier verification.
5. **Reconcile at the bedside.** At administration the clinical team verifies the product label against the patient's own identifiers in the patient's presence. This is the last gate.

Where the program pseudonymises identity, the manufacturing site holds a pseudonymised key and the treating site holds the link back to the named patient; the chain is unbroken but patient-identifying data is protected.

## 6. Procedure: chain of custody

1. **Use qualified shippers.** For cryopreserved product, use vapor-phase liquid nitrogen dry shippers; qualify hold time with margin (for example a 10-day rated shipper for a 3-day route).
2. **Monitor continuously.** Attach a logger that records throughout, not a min/max logger, so a transient excursion is captured.
3. **Document custody at each leg.** Sending organisation, courier, receiving organisation, with signatures and timestamps; no gap where custody is unowned.
4. **Enforce time out of controlled storage.** Define and enforce the maximum time out of cryo for any thaw-adjacent step with a timer.
5. **Reconcile COC against COI at receipt.** The receiving site verifies both patient identity and that conditions held before accepting custody.

## 7. Break and excursion handling

1. If any second identifier disagrees, or custody is undocumented for any period, the chain is broken: quarantine the product, do not advance, and raise a deviation per `<<FILL: deviation SOP-ID>>`.
2. For a condition excursion, quarantine on receipt and pull the stability/thaw-stability data: does a documented study support viability and potency after the observed magnitude and duration? If yes with margin, QA may disposition for use with a documented rationale; if no supporting data exist, the default is reject. Acceptance criteria are never invented after the fact.

## 8. Acceptance criteria

- Every record from collection to administration carries the same COI identifier with no gaps and no transcription errors.
- Every handoff shows two independent identifiers checked by a named person.
- An end-to-end reconciliation ties out: one patient in, one product out, no orphaned bags.
- The full condition trace is within band for the journey, or any excursion has a documented disposition.
- The final-product label cannot be produced without the COI identifier present.

## 9. Records generated

- COI/COC verification log (see the companion form).
- Continuous condition (temperature) data file, retained.
- Deviation records for any break or excursion.

Retain traceability records per region: in the EU, 30 years after the product expiry date for ATMPs; in the US per 21 CFR 1271 and cGMP distribution-record requirements. Keep the longest applicable.

## 10. References

> EU GMP Part IV (ATMP GMP Guidelines), traceability and starting-material sections.
> Regulation (EC) No 1394/2007; Directive 2004/23/EC (tissues and cells); EU traceability retention of 30 years for ATMPs.
> 21 CFR Part 1271 (HCT/P, CGTP); 21 CFR Parts 210/211; 21 CFR Part 600.
> FDA CBER guidance, Considerations for the Development of CAR T Cell Products (2024).

Confirm the current version and clause numbers of each reference before issue.

## 11. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 12. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a break-handling entry completed for an example case. Details are illustrative; replace with your own.

| Field | Entry |
|---|---|
| Event | Receipt at manufacturing, two-identifier check |
| COI identifier | COI-7F3A21 |
| Second identifier presented | DOB on bag label illegible (smudged) |
| Result | Fail: second identifier could not be confirmed |
| Action | Material quarantined; deviation DEV-2026-0307 raised; collection site contacted to confirm identity from source record before processing started |
| Outcome | Identity confirmed against the collection record and a re-labelled secondary identifier applied under QA witness; chain documented as continuous; processing released to start |

In this example a smudged date of birth on the bag label broke the two-identifier check at receipt. The operator did not proceed on the COI number alone; the material was quarantined, a deviation raised, and identity reconfirmed from the source record before processing, which is exactly the discipline that prevents a mix-up.

## Common inspection findings this SOP prevents

- A handoff verified with only one identifier, or a custody gap with no owner.
- A transcription error in the COI number that goes uncaught.
- Min/max loggers that miss a transient transport excursion.
- An excursion dispositioned for use with no supporting stability data.
- Traceability records not retained for the required period.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Define your COI identifier scheme and your two secondary identifiers.
3. Set your shipper qualification and maximum time-out-of-cryo limits from your validation data.
4. Point the deviation cross-reference to your real procedure.
5. Confirm every regulation in section 10 against the current published version before issue.
