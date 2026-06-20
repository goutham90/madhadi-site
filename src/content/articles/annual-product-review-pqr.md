---
title: "Annual Product Review and the Product Quality Review (PQR)"
description: "How to run the yearly batch-record retrospective required by 21 CFR 211.180(e) and EU GMP Chapter 1 — what data feeds it, how trends drive CAPA, and what inspectors actually read."
pubDate: 2026-06-20
tags: ["APR", "PQR", "quality-assurance", "GMP", "21 CFR 211", "EU GMP", "CAPA", "trending"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Once a year, for every commercial product, a manufacturer has to stop and look back. Not at a single batch or a single deviation, but at the whole year of production at once — every lot made, every result that fell outside a limit, every change made to the process, every complaint that came back from the field. The point is to answer one question a daily quality system can't: is this process still doing what it did when we validated it, or has it quietly drifted?

In the United States that retrospective is the **Annual Product Review (APR)**, mandated by [21 CFR 211.180(e)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.180). In the European Union it's the **Product Quality Review (PQR)**, described in [EU GMP Part I, Chapter 1, Section 1.10](https://health.ec.europa.eu/document/download/e6b41a16-5d1d-4cc9-bf48-f24a8e3b94f8_en). The two overlap heavily, and most global manufacturers write a single procedure that satisfies both. But they are not identical, and the differences matter when you operate across both markets.

This article walks through what the two regulations actually require, what data has to feed the review, how you turn a year of records into trends and the trends into CAPA, and — the part people underestimate — what an inspector expects to see in the conclusions and in the data your contract manufacturers send you.

## What the regulation actually says

Start with the FDA text, because it's short and people misquote it. 211.180(e) requires "a review of a representative number of batches, whether approved or rejected" and, at minimum:

> (1) A review of a representative number of batches, whether approved or rejected, and, where applicable, records associated with the batch.
> (2) A review of complaints, recalls, returned or salvaged drug products, and investigations conducted under §211.192 for each drug product.

That's the whole legal floor in the US: representative batches, plus complaints, recalls, returns/salvage, and the §211.192 investigations (your OOS and deviation records). The regulation says the review must be written, done **at least annually**, and evaluated to determine "the need for changes in drug product specifications or manufacturing or control procedures." That last clause is the teeth — the APR isn't a filing exercise, it's supposed to *drive a decision* about whether anything needs to change.

The EU PQR is more prescriptive. Chapter 1 enumerates the inputs explicitly. A PQR must review, at minimum:

- Starting materials and packaging materials, especially from new sources, and traceability of the supply chain of active substances
- Critical in-process controls and finished-product results
- All batches that failed to meet specification(s) and their investigations
- All significant deviations or non-conformances, their investigations, and the effectiveness of resulting corrective and preventive actions
- All changes to processes or analytical methods
- Marketing authorization variations submitted, granted, or refused, including third-country (export-only) dossiers
- The results of the stability monitoring program and any adverse trends
- All quality-related returns, complaints, and recalls, and the investigations performed
- Adequacy of any previous corrective actions on product process or equipment
- Post-marketing commitments for new MAs and variations
- Qualification status of relevant equipment and utilities (HVAC, water, compressed gases)
- Review of any contractual/technical agreements to confirm they're up to date

The two-list difference is the practical headache: an EU PQR explicitly demands the stability program, the MA-variation status, the utility/equipment qualification status, and the technical-agreement review. A bare-minimum US APR doesn't name those, but FDA inspectors expect a *mature* review to include them anyway, and the FDA's process-validation thinking (the 2011 guidance's **Stage 3, Continued Process Verification**) leans on the same data. So in practice the sensible design is: write to the EU list, and you've covered both.

ICH adds the linkage you should understand even though it isn't itself a review requirement. [ICH Q10 (Pharmaceutical Quality System)](https://database.ich.org/sites/default/files/Q10%20Guideline.pdf) frames "Management Review" and the periodic review of the PQS, and the product review is one of the feeds into it. ICH Q9 (Quality Risk Management) is the toolkit you use to decide what's "significant" and what a trend means. Neither replaces 211.180(e) or Chapter 1, but both shape how a modern review reads.

## The data that feeds the review

A review is only as good as the registers behind it. Each data source below should already exist as a tracked, queryable list in your quality system — a LIMS such as LabWare or LabVantage for results, a QMS for deviations/CAPA/change control, a complaint-handling system, and a stability database. If you're assembling any of these by hand from paper at review time, that's the first finding waiting to happen.

| Data source | What you pull | What the review is looking for |
|---|---|---|
| **Batch disposition** | Every lot made in the period: released, rejected, reworked, on hold, quarantined | Rejection rate, reasons, any cluster by line/shift/material lot |
| **In-process & release results** | CQAs and critical IPCs (assay, content uniformity, dissolution, impurities, bioburden, endotoxin, fill weight, etc.) | Process capability (Cpk/Ppk), drift toward a limit, between-batch variability |
| **OOS / OOT** | Every out-of-specification and out-of-trend result and its investigation | Recurring failure modes, lab vs. process root cause split, invalidations vs. confirmed |
| **Deviations / non-conformances** | All deviations, classified by severity | Repeat deviations, top categories, are CAPAs actually closing them |
| **Complaints** | Field complaints, by defect type and severity | Rate per million units, emerging defect types, confirmed vs. unconfirmed |
| **Returns & salvage** | Returned product, reason, disposition | Cold-chain excursions, packaging failures, mis-distribution |
| **Recalls / field actions** | Any recall or field alert in the period | Root cause, scope, was the product review the right early-warning system |
| **Stability** | Annual (commitment) batches and any ongoing studies | Adverse trends, OOS/OOT at any station, shelf-life still supported |
| **Change controls** | Process, method, equipment, supplier, spec changes | Cumulative effect of small changes ("change creep"), validation/revalidation status |
| **Materials / suppliers** | API and excipient lots, new sources, supplier performance | New-source qualification, rejected incoming lots, traceability gaps |
| **Equipment / utilities** | Qualification and requalification status | Overdue requalification, water/HVAC/gas excursions feeding product |
| **Regulatory** | MA variations / supplements filed, granted, refused; commitments | Has the registered process drifted from the filed one |

Two points people get wrong here. First, **"representative number of batches" is not a license to cherry-pick the good ones.** A representative sample includes rejected batches and the ones with investigations, because those are the ones with signal. The defensible position is to include *all* batches for the quantitative trending and then justify any subsetting in writing. Second, the period must be defined and consistent. Most firms run a fixed annual cycle per product; if production is seasonal or campaign-based, state the rationale for your period so the review window isn't gamed.

## Turning records into trends

The review's value is the trending, not the inventory. Listing that you made 42 batches and rejected one tells an inspector nothing about whether the process is in control. Showing the assay results for all 42 batches on a control chart, with the validated limits and the specification limits drawn in, tells them everything.

For the quantitative CQAs, the standard tools are statistical process control and process capability:

- **Control charts** (individuals/moving-range for low-volume products, X-bar/R where you have subgroups). You're watching for points outside control limits, runs, trends, and shifts — the Western Electric/Nelson rules. A result can be well inside specification and still signal an out-of-control process because it broke a run rule. That is exactly the early warning the review exists to catch.
- **Capability indices (Cpk / Ppk).** Cpk speaks to short-term within-batch capability; Ppk to overall performance including between-batch variation. A common internal action threshold is to flag any CQA with Ppk below ~1.33 for review and below ~1.0 as a capability concern, but treat those as *triggers for investigation*, not pass/fail gates — the number you publish is the registered specification, and capability is a process-health metric layered on top.
- **Out-of-trend (OOT) logic.** Define OOT before the period starts (e.g., a result beyond a set number of standard deviations from the historical mean, or a stability result deviating from the expected regression by more than a pre-set margin). OOT defined after the fact is not trending; it's storytelling.

Worked through honestly, the trending produces a short list of *signals*: a CQA drifting toward a limit, a deviation category that won't go down, a complaint type that's climbing, a stability station that's softening. Each signal then has to be dispositioned — explained as benign with evidence, or escalated.

## How trends drive CAPA

This is the hinge of the whole exercise and the most common place reviews fall down. A review that documents an adverse trend and then closes with "no action required" — without explaining why the trend is acceptable — is worse than no review, because it shows you saw the signal and ignored it.

The discipline is straightforward:

1. **Every signal gets a disposition.** Either a documented technical justification that the trend is acceptable (with the data that supports it), or an action.
2. **Actions route through the existing CAPA system** under [21 CFR 211.192](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.192) (and, for QSR/device-combination contexts, [21 CFR 820.100](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820/subpart-J/section-820.100)). The review should not invent a parallel action-tracking mechanism — it should open CAPAs, reference the CAPA numbers, and let the QMS own closure.
3. **The review checks last year's CAPAs.** Both the EU list ("adequacy of previous corrective actions") and a defensible APR require you to look back at what the *prior* review committed to and confirm those actions closed and worked. Effectiveness checks that never happened are a classic finding.

A useful internal rule: the conclusions section must explicitly answer the regulation's own question — does anything need to change in the specifications, the manufacturing process, or the controls? If the answer is no, say so and say why. If yes, the CAPA numbers are right there.

CAPA actions coming out of a review tend to fall into recognizable buckets: tighten or re-justify an internal action limit; revalidate a step after cumulative change; requalify a supplier or a piece of equipment; update a method; or — the one people resist — file a variation/supplement because the process as run has drifted from the process as registered. That last one is uncomfortable but it's exactly what the MA-variation line in the EU PQR is meant to surface.

## Stability, change creep, and the slow failures

Two trend types deserve special attention because they fail slowly and a single-batch quality system won't catch them.

**Stability.** The review must consolidate the ongoing stability program — the annual commitment batches placed each year plus any active studies — and look across stations and time points for adverse trends, per [ICH Q1A(R2)](https://database.ich.org/sites/default/files/Q1A%28R2%29%20Guideline.pdf) and [ICH Q1E](https://database.ich.org/sites/default/files/Q1E%20Guideline.pdf) on evaluation of stability data. A single batch trending down on a degradation product might be within spec at every station and still, projected forward, threaten the shelf life. The review is where you do that projection across the whole program, not one study at a time. Any OOS or confirmed OOT on stability is a mandatory escalation, and it can carry a field-alert obligation (21 CFR 314.81 NDA-Field Alert Reports in the US) entirely separate from the review.

**Change creep.** Each change control was approved on its own merits, with its own impact assessment. The review is the only place anyone looks at the *cumulative* effect of a year of small approved changes — a new excipient source here, a tweaked hold time there, a re-sourced filter, a parameter widened within validated range. Individually fine; together they can move the process off the validated center. Reviewing change controls as a set, against the batch data from the same period, is how you catch a process that was nibbled out of control. This is also where you confirm that anything requiring a regulatory variation actually got filed, and that revalidation triggered where it should have.

## What inspectors look for

Investigators read product reviews routinely, and there are recurring findings. Knowing them tells you how to write a review that survives scrutiny.

- **Timeliness.** "At least annually" means the review for a given period is completed within a defined, reasonable window after the period closes — typically stated in your SOP as a number of days. A review for last year that isn't signed until ten months into this year is a finding on its face, regardless of content.
- **It's signed and it concludes something.** A review that's a data dump with no evaluation and no conclusion fails the "evaluated to determine the need for changes" clause. QA approval and a clear conclusion about specification/process/control changes are non-negotiable.
- **Trends are actually evaluated, not just printed.** Charts with no interpretation are a red flag. The inspector wants to see that a human looked at the trend and made a call.
- **Open actions from the last review are closed — and effective.** Carrying the same CAPA across multiple annual reviews, or never verifying effectiveness, draws fire fast.
- **Out-of-specification results tie out.** The OOS count in the review must reconcile with the QC and deviation logs. A review that under-reports OOS — even by sloppiness — looks like concealment.
- **The conclusion matches the data.** "No adverse trends observed" sitting above a chart that visibly drifts toward a limit is the worst possible look. Investigators are specifically trained to test whether the narrative matches the numbers.

The recurring theme: inspectors treat the review as evidence of whether your quality system *thinks*. Daily records show you follow procedures. The product review shows whether you step back, see the pattern, and act on it. A weak review suggests the rest of the system is reactive.

## The CMO problem

Most companies don't make everything themselves, and the contract-manufacturing relationship is where product reviews most often break. The legal responsibility for the review sits with the marketing authorization holder / application holder — you can't outsource accountability for it. But the data lives at the contract manufacturing organization (CMO) and the contract testing lab.

The mechanism that's supposed to fix this is the **quality/technical agreement**. The EU PQR explicitly requires confirming these agreements are current; FDA's [guidance on Contract Manufacturing Arrangements for Drugs: Quality Agreements](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/contract-manufacturing-arrangements-drugs-quality-agreements-guidance-industry) (2016) is the US counterpart. A workable quality agreement spells out, for the review specifically:

- **Who compiles what.** Typically the CMO produces a site-level review contribution (batch dispositions, in-process and release data, deviations, OOS, change controls, complaints received at site) and the MAH consolidates it into the product-level review with the field complaints, returns, recalls, stability, and regulatory status the CMO doesn't see.
- **The data must arrive raw enough to trend.** A CMO summary that says "all batches conforming, no significant deviations" is useless to you — you can't trend a conclusion. Specify that the CMO provides batch-level results and the full deviation/OOS list so your statistician can run the charts, not just read the CMO's interpretation.
- **Timing.** The CMO's contribution has to land early enough that you can complete the consolidated review within your own annual window. Build the CMO deadline into the agreement, upstream of your SOP deadline.
- **Right of audit and access.** You need to be able to verify the CMO's numbers against their raw records, and the agreement should say so.

The classic failure is the MAH treating the CMO's site review *as* the product review. It isn't. The site review covers the site's slice; the product review covers the product across all sites, plus everything that only the MAH sees — global complaints, returns, recalls, stability across the program, and the registered-process / variation status. An inspector who finds a product made at three sites with three disconnected site reviews and no consolidated product-level evaluation has found a real gap, even if each site's paperwork is immaculate.

## Putting it together

A defensible review, stripped to its skeleton, runs like this: define the product and the period; pull every register named above for that period; trend the quantitative CQAs with control charts and capability, and the categorical data (deviations, complaints, OOS) by type and rate; for every signal, write a disposition — justified-acceptable or escalated; route escalations into the CAPA system by number; check that last year's actions closed and worked; consolidate any CMO contributions you don't generate yourself; and write a conclusion that answers, in plain terms, whether the specifications, the process, or the controls need to change. QA signs it. It's done within the window your SOP commits to.

Do that and the review stops being an annual paperwork tax and becomes what the regulation intended — the place where a manufacturer proves, once a year and on paper, that the process it validated is still the process it's running.

## Key references

- [21 CFR 211.180(e)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.180) — Annual Product Review requirement (US)
- [21 CFR 211.192](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.192) — Production record review / investigations (OOS, deviations)
- EU GMP Part I, Chapter 1, §1.10 — Product Quality Review requirement (EU)
- [ICH Q10](https://database.ich.org/sites/default/files/Q10%20Guideline.pdf) — Pharmaceutical Quality System (PQS, management review)
- ICH Q9 — Quality Risk Management
- [ICH Q1A(R2)](https://database.ich.org/sites/default/files/Q1A%28R2%29%20Guideline.pdf) and [ICH Q1E](https://database.ich.org/sites/default/files/Q1E%20Guideline.pdf) — Stability testing and evaluation
- FDA Process Validation: General Principles and Practices (2011) — Stage 3, Continued Process Verification
- [FDA Guidance: Contract Manufacturing Arrangements for Drugs — Quality Agreements](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/contract-manufacturing-arrangements-drugs-quality-agreements-guidance-industry) (2016)
