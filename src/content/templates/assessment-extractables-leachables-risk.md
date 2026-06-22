---
title: "Risk Assessment: Extractables and Leachables for a Container Closure or Single-Use System"
description: "A plug-and-play E&L risk assessment that scores product-contact materials by route, degree of contact, process step, and downstream clearance to decide where confirmatory leachables work is needed, with a scoring scale, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Risk Assessment"
pillar: "quality-assurance"
relatedArticles: ["extractables-and-leachables"]
tags: ["extractables", "leachables", "risk assessment", "single-use systems", "container closure", "BioPhorum", "process leachables"]
tier: "Advanced"
---

This is a ready-to-use E&L risk assessment. It decides, material by material, how much E&L work is warranted and where a confirmatory process leachables study is needed, using supplier extractables data plus a process-specific evaluation. Replace every `<<FILL: ...>>` placeholder, set your document numbers and dates, attach the supplier extractables data and the process flow, and route it through document control. A worked filled specimen follows the template. Verify each cited standard against the current source before you rely on it.

## Control header

| Field | Entry |
|---|---|
| Document title | E&L Risk Assessment for `<<FILL: SYSTEM / PROCESS>>` |
| Document number | `<<FILL: RA-EL-ID>>` |
| Version / effective date | `<<FILL>>` |
| Owner | `<<FILL: role, e.g. Quality / E&L Lead>>` |
| Prepared / reviewed / approved by | `<<FILL>>` |

## 1. Methodology

Score each product-contact material on the factors that drive how much leachable can reach the patient or the drug substance, derive a risk level, and assign the resulting E&L action. The factors:

- **Route of administration / proximity to patient or drug substance**: higher concern for parenteral, inhalation, ophthalmic, and for late, near-drug-substance process contact.
- **Degree and duration of contact**: liquid, intimate, long contact is worse than dry, brief contact.
- **Temperature of contact**: heat increases extraction.
- **Surface area to volume**: more surface per unit volume increases load.
- **Material type and processing**: polymers, elastomers, adhesives, and certain sterilization methods (gamma vs. EO alters the profile) increase concern.
- **Downstream clearance**: purification or dilution after the contact step that reduces what reaches the drug substance.

## 2. Scoring scale

| Factor score | 1 (low) | 2 (medium) | 3 (high) |
|---|---|---|---|
| Proximity / route | Oral solid; early upstream, far from drug substance | Topical; mid-process | Parenteral / inhalation / ophthalmic; late, near drug substance |
| Contact degree and duration | Brief, dry, small area | Moderate | Liquid, intimate, long |
| Temperature | Ambient or below | Mildly elevated | Elevated |
| Downstream clearance | Strong clearance after contact | Partial | None after contact |

Risk level from the highest-weighted factors (or a summed score, banded): **Low**, **Medium**, **High**. Document the rule you use.

## 3. The assessment table

| Material / component | Process step or contact role | Proximity/route | Contact | Temp | Clearance | Risk level | Supplier extractables data to standard? | E&L action |
|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL: 1-3>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: yes/no, protocol>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

E&L action options: rely on supplier extractables data only; supplier data plus a documented justification; require a confirmatory process leachables study; require a full extractables and leachables program.

## 4. Mitigations and residual risk

| Risk driver | Mitigation | Residual risk |
|---|---|---|
| `<<FILL: e.g. late-stage filter, no clearance>>` | `<<FILL: confirmatory process leachables study>>` | `<<FILL>>` |
| `<<FILL: e.g. gamma-sterilized bag>>` | `<<FILL: supplier data on gamma-irradiated material>>` | `<<FILL>>` |

## 5. Decision and action plan

State, per material, whether supplier extractables data (generated to a recognized standardized protocol such as the BioPhorum extractables protocol or BPSA guidance) is sufficient, or whether a process-specific confirmatory leachables study is required. List the studies to run and their protocol numbers.

## 6. Acceptance criteria

- Every product-contact material in the system is listed and scored.
- The scoring scale is anchored and the risk rule is documented.
- Supplier extractables data is referenced to a recognized standardized protocol where relied upon.
- Each high-risk material has either a confirmatory leachables study or a documented, defensible justification for not doing one.
- Residual risk is stated and the assessment is approved by QA.
- The assessment is re-triggered on a material, supplier, sterilization-method, or molding-site change.

## 7. References

> USP <1663> and <1664> (extractables and leachables frameworks).
> BioPhorum standardized extractables protocol; BPSA guidance for single-use systems.
> ICH Q9 Quality Risk Management (for the risk method).
> ICH Q3D (elemental impurities path).

Confirm the current version of each reference before you rely on it.

---

## Filled specimen

The following shows the assessment completed for an example single-use upstream and downstream train feeding a sterile drug substance. Illustrative.

| Material | Process step | Prox | Contact | Temp | Clearance | Risk | Supplier data | E&L action |
|---|---|---|---|---|---|---|---|---|
| Bioreactor bag | Upstream cell culture | 1 | 3 | 2 | Strong (multiple purification steps) | Low-Medium | Yes, BioPhorum protocol | Supplier data plus justification; no confirmatory study |
| Chromatography membrane | Mid-downstream | 2 | 2 | 1 | Partial | Medium | Yes, BioPhorum protocol | Supplier data plus process risk note |
| Final sterilizing filter | Final filtration before fill | 3 | 3 | 1 | None after this step | High | Yes, but generic | Confirmatory process leachables study required |
| Final fill tubing | Fill line, near drug substance | 3 | 3 | 1 | None | High | Yes | Confirmatory process leachables study required |

**Decision:** rely on supplier extractables data for the upstream bag and the chromatography membrane (early contact, strong downstream clearance), and run a confirmatory process leachables study on the final sterilizing filter and the fill tubing, because contact is late, near the drug substance, with no clearance afterward. Residual risk after the confirmatory studies: low. Re-assess on any change of supplier, resin, or sterilization method.

This is the defensible shape: not every component triggers a study, and the ones that do are justified by proximity and the absence of downstream clearance.

## Common inspection findings this assessment prevents

- Single-use process materials treated as out of scope because they are not the final container, with no process leachables consideration.
- Reliance on supplier data with no process-specific risk evaluation behind it.
- A late, near-drug-substance contact material relied on by supplier data alone with no confirmatory study.
- No re-assessment after a resin, supplier, or sterilization-method change.

## How to adapt this assessment

1. Set your document number and owner.
2. List every product-contact material in your real train and score each.
3. Document your risk rule (highest-factor or banded sum) and apply it.
4. Reference your supplier extractables data and decide, per material, the E&L action.
5. Set the change triggers that re-open the assessment, and have QA approve.
