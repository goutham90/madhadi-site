---
title: "Worksheet: Analytical Evaluation Threshold (AET) Calculation"
description: "A plug-and-play worksheet to derive the Analytical Evaluation Threshold for a leachables or extractables study: the SCT for the route, daily dose, the estimated AET, the response-factor uncertainty correction, and the final AET, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Template"
pillar: "quality-assurance"
relatedArticles: ["extractables-and-leachables"]
tags: ["AET", "extractables", "leachables", "SCT", "response factor", "worksheet", "PQRI"]
tier: "Advanced"
---

This is a ready-to-use worksheet to derive an Analytical Evaluation Threshold (AET) from the safety threshold and the product dose. Replace every `<<FILL: ...>>` placeholder with your own numbers, work through the steps in order, and attach the completed worksheet to your extractables and leachables protocols. A worked filled specimen follows the template. Build this as a validated, controlled calculation, not a one-off hand calc, so a dose or method change recomputes everything consistently. The AET is an identification threshold, not a safety or acceptance limit; safety is judged against the SCT, QT, and compound-specific toxicology. Verify each cited recommendation against the current source before you rely on it.

## Control header

| Field | Entry |
|---|---|
| Worksheet number | `<<FILL: WS-EL-ID>>` |
| Product / system | `<<FILL>>` |
| Route of administration | `<<FILL: inhalation / parenteral / ophthalmic / oral>>` |
| Linked protocol(s) | `<<FILL: extractables / leachables protocol numbers>>` |
| Prepared by / date | `<<FILL>>` |
| Reviewed by (Toxicology) / date | `<<FILL>>` |
| Approved by (QA) / date | `<<FILL>>` |

## Step 1: Select the Safety Concern Threshold (SCT) for the route

The SCT is the daily intake below which an individual organic leachable needs no further toxicological evaluation. Use the value from the applicable PQRI recommendation for the route, not a default carried over from a different route.

| Item | Entry |
|---|---|
| Route | `<<FILL>>` |
| Applicable threshold source | `<<FILL: e.g. PQRI OINDP; PQRI PODP>>` |
| SCT (micrograms/day) | `<<FILL: e.g. 0.15 for OINDP>>` |

> Note: 0.15 micrograms/day is the OINDP SCT. Parenteral and ophthalmic products use the applicable PODP-derived threshold and the product's actual exposure. Do not reuse the OINDP number for an injectable without checking.

## Step 2: Define the daily dose basis

| Item | Entry |
|---|---|
| Dose unit | `<<FILL: actuation / mL / vial / patch>>` |
| Number of dose units per day | `<<FILL>>` |
| Total daily volume or mass (if needed) | `<<FILL>>` |

## Step 3: Calculate the estimated AET

Estimated AET per dose unit = SCT divided by number of dose units per day.

| Item | Entry |
|---|---|
| SCT (micrograms/day) | `<<FILL>>` |
| Dose units per day | `<<FILL>>` |
| Estimated AET (micrograms per dose unit) | `<<FILL: SCT / units per day>>` |

If your method reports a concentration, convert the estimated AET per dose unit to a concentration in the test solution using the sample preparation (volume extracted, dilution). Record the conversion.

| Item | Entry |
|---|---|
| Sample prep basis | `<<FILL: volume, dilution>>` |
| Estimated AET as concentration | `<<FILL>>` |

## Step 4: Apply the analytical uncertainty (response-factor) correction

Because compounds are often semi-quantified against a single surrogate and respond differently in the detector, reduce the estimated AET by an uncertainty factor to a conservative final AET. Base the factor on the variability of relative response factors across the calibration set; where data are limited, a common conservative default is 50 percent of the estimated AET.

| Item | Entry |
|---|---|
| Basis of uncertainty factor | `<<FILL: RRF variability / conservative default>>` |
| Uncertainty factor applied | `<<FILL: e.g. 0.5>>` |
| Final AET (micrograms per dose unit) | `<<FILL: estimated AET x uncertainty factor>>` |
| Final AET as concentration | `<<FILL>>` |

## Step 5: Apply the AET

- Report and identify every extractable or leachable at or above the final AET.
- Compare each identified compound's daily exposure to the SCT and QT.
- Control known genotoxic or carcinogenic classes to their compound-specific limits regardless of the AET.

## Acceptance criteria

- The SCT matches the route and a named recommendation.
- The daily dose basis is documented.
- The estimated AET, the uncertainty factor and its basis, and the final AET are all shown (no jump straight to a number).
- The conversion to the analytical reporting basis is documented.
- The worksheet is reviewed by toxicology and approved by QA.

## References

> PQRI recommendations on safety thresholds (SCT, QT, AET) for orally inhaled and nasal drug products and for parenteral and ophthalmic drug products.
> USP <1663> and <1664> (assessment frameworks that use the AET).
> ICH M7 and the nitrosamine guidances (for genotoxic-class compound-specific limits).

Confirm the current version of each recommendation before you rely on it.

---

## Filled specimen

The following shows the worksheet completed for an example orally inhaled product. Numbers are illustrative.

| Field | Entry |
|---|---|
| Product / system | Inhalation aerosol, suspension MDI |
| Route | Oral inhalation (OINDP) |
| SCT | 0.15 micrograms/day (PQRI OINDP) |
| Dose unit | Actuation |
| Dose units per day | 4 (2 actuations twice daily) |
| Estimated AET | 0.15 / 4 = 0.0375 micrograms/actuation |
| Uncertainty factor | 0.5 (conservative default, limited RRF data) |
| Final AET | 0.0375 x 0.5 = 0.019 micrograms/actuation |

**Interpretation:** every peak at or above 0.019 micrograms per actuation is reported and identified, and each identified compound's daily exposure is compared to the SCT (0.15 micrograms/day) and the QT (5 micrograms/day). A peak below 0.019 micrograms/actuation is below the identification trigger; it is not declared "safe," and any known genotoxic class is controlled to its own limit regardless.

This is the level of arithmetic an inspector or reviewer expects to see: SCT to estimated AET to final AET, with the uncertainty factor and its basis shown.

## Common inspection findings this worksheet prevents

- An AET stated with no derivation, so the reporting threshold is unjustified.
- The OINDP SCT reused for a parenteral without checking the applicable threshold.
- The uncertainty correction omitted, so the AET is not conservative.
- "All leachables below the AET" presented as proof of safety, confusing the identification threshold with a safety limit.

## How to adapt this worksheet

1. Set your worksheet number and the route.
2. Insert the SCT from the recommendation that matches your route, with its source.
3. Enter your real dose basis and compute the estimated AET.
4. Apply and justify your uncertainty factor to get the final AET.
5. Have toxicology review and QA approve, and attach it to your extractables and leachables protocols.
