---
title: "Annual Product Review and the Product Quality Review (PQR)"
description: "How to run the yearly batch-record retrospective required by 21 CFR 211.180(e) and EU GMP Chapter 1, what data feeds it, how trends drive CAPA, and what inspectors actually read."
pubDate: 2026-06-20
tags: ["APR", "PQR", "quality-assurance", "GMP", "21 CFR 211", "EU GMP", "CAPA", "trending"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Once a year, for every commercial product, a manufacturer has to stop and look back. Not at a single batch or a single deviation, but at the whole year of production at once, every lot made, every result that fell outside a limit, every change made to the process, every complaint that came back from the field. The point is to answer one question a daily quality system can't: is this process still doing what it did when we validated it, or has it quietly drifted?

In the United States that retrospective is the **Annual Product Review (APR)**, mandated by [21 CFR 211.180(e)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.180). In the European Union it's the **Product Quality Review (PQR)**, described in **EU GMP Part I, Chapter 1, Section 1.10**. The two overlap heavily, and most global manufacturers write a single procedure that satisfies both. But they are not identical, and the differences matter when you operate across both markets. The same retrospective logic shows up in other GxP sectors under different names: medical-device manufacturers run a periodic management review of the quality system and post-market data, and process-validation programs keep the same data alive through ongoing verification. The product is the unit of analysis here, but the habit, look across a year and ask whether the system is still in control, is universal.

This article walks through what the two regulations actually require, what data has to feed the review, how you turn a year of records into trends and the trends into CAPA, and, the part people underestimate, what an inspector expects to see in the conclusions and in the data your contract manufacturers send you.

## What the regulation actually says

Start with the FDA text, because it's short and people misquote it. 211.180(e) requires "a review of a representative number of batches, whether approved or rejected" and, at minimum:

> (1) A review of a representative number of batches, whether approved or rejected, and, where applicable, records associated with the batch.
> (2) A review of complaints, recalls, returned or salvaged drug products, and investigations conducted under §211.192 for each drug product.

That's the whole legal floor in the US: representative batches, plus complaints, recalls, returns/salvage, and the §211.192 investigations (your OOS and deviation records). The regulation says the review must be written, done **at least annually**, and evaluated to determine "the need for changes in drug product specifications or manufacturing or control procedures." That last clause is the teeth. The APR isn't a filing exercise, it's supposed to *drive a decision* about whether anything needs to change.

The EU PQR is more prescriptive. Chapter 1 enumerates the inputs explicitly. A PQR must review, at minimum:

- Incoming starting and packaging materials, with attention to any new sources and to how the active-substance supply chain can be traced end to end
- The critical in-process checks and the finished-product test results
- Any batch that missed a specification, together with the investigation that followed
- Significant deviations and non-conformances, how they were investigated, and whether the corrective and preventive actions taken actually worked
- Changes made to the manufacturing process or to analytical methods
- The state of marketing authorization variations filed, approved, or turned down, including export-only (third-country) dossiers
- What the stability program showed, and whether any unfavorable trends emerged
- Quality-related returns, complaints, and recalls, and the investigations they triggered
- Whether earlier corrective actions on the product, process, or equipment held up
- Post-marketing commitments tied to new authorizations and to variations
- The qualification status of the equipment and utilities that touch the product (HVAC, water systems, compressed gases)
- A check that the relevant contractual and technical agreements are still current

The two-list difference is the practical headache: an EU PQR explicitly demands the stability program, the MA-variation status, the utility/equipment qualification status, and the technical-agreement review. A bare-minimum US APR doesn't name those, but FDA inspectors expect a *mature* review to include them anyway, and the FDA's process-validation thinking (the 2011 guidance's **Stage 3, Continued Process Verification**) leans on the same data. So in practice the sensible design is: write to the EU list, and you've covered both.

ICH adds the linkage you should understand even though it isn't itself a review requirement. [ICH Q10 (Pharmaceutical Quality System)](https://database.ich.org/sites/default/files/Q10%20Guideline.pdf) frames "Management Review" and the periodic review of the PQS, and the product review is one of the feeds into it. ICH Q9(R1) (Quality Risk Management) is the toolkit you use to decide what's "significant" and what a trend means. Neither replaces 211.180(e) or Chapter 1, but both shape how a modern review reads. See [the management review under Q10](/articles/management-review-q10) and [quality risk management](/articles/quality-risk-management) for how those pieces connect.

### A note on scope and where the review sits

The product review is not a quality system unto itself. It is a downstream consumer of records that other systems generate: [deviation management](/articles/deviation-management), [OOS investigations](/articles/oos-investigation-process), [change control](/articles/change-control-validated-systems), [the stability program](/articles/stability-programs-ich), and [product complaint handling](/articles/product-complaint-handling). If those upstream systems are weak, the review inherits the weakness. A common interview trap is to describe the APR as the place where deviations get investigated. It is not. Deviations get investigated when they happen; the review looks back across the closed record set and asks what the *pattern* is telling you. Keep that distinction clean.

## The data that feeds the review

A review is only as good as the registers behind it. Each data source below should already exist as a tracked, queryable list in your quality system: a LIMS such as LabWare or LabVantage for results, a QMS for deviations/CAPA/change control, a complaint-handling system, and a stability database. If you're assembling any of these by hand from paper at review time, that's the first finding waiting to happen.

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

### How to scope the period and the data set

Before you pull anything, fix three boundaries in writing:

1. **The review period.** Calendar year, anniversary of approval, or a campaign window. Whatever you pick, it must not overlap or leave gaps with the prior period. A product approved mid-year usually gets a short first review (date of first commercial batch to the period end) and then falls into the standard annual cycle. State this in the SOP so nobody re-litigates it each year.
2. **The product definition.** One review per product, but "product" needs a definition. Most firms scope by registered product including all strengths and presentations that share the same process and specification, and split by site if the same product is made at more than one site (then consolidate to a product-level conclusion). If two strengths are made by genuinely different processes, treat them as separate products for trending even if the marketing authorization groups them.
3. **The data cutoff.** Pick a date by which all records for the period must be closed in the source systems. Deviations and OOS opened in the period but still open at cutoff get listed as open and carried, not omitted. An inspector who finds an open period-deviation absent from the review will read it as a gap.

### Acceptance criteria for the data pull

You know the data feed is done correctly when:

- Every register named above has been queried for the exact period and the result counts reconcile against the source system of record (the OOS count in the review equals the OOS count in the lab's log for that period, batch for batch).
- The batch list ties to the production schedule and to disposition records: number of batches made = released + rejected + reworked + on hold, with no orphans.
- Data arrives at batch level or result level, not as a pre-digested summary. You cannot trend "no significant deviations." You can trend a list.
- Any record excluded from quantitative analysis has a written reason.

## Turning records into trends

The review's value is the trending, not the inventory. Listing that you made 42 batches and rejected one tells an inspector nothing about whether the process is in control. Showing the assay results for all 42 batches on a control chart, with the validated limits and the specification limits drawn in, tells them everything.

For the quantitative CQAs, the standard tools are statistical process control and process capability:

- **Control charts** (individuals/moving-range for low-volume products, X-bar/R where you have subgroups). You're watching for points outside control limits, runs, trends, and shifts, the Western Electric / Nelson rules. A result can be well inside specification and still signal an out-of-control process because it broke a run rule. That is exactly the early warning the review exists to catch.
- **Capability indices (Cpk / Ppk).** Cpk speaks to short-term within-batch capability; Ppk to overall performance including between-batch variation. A common internal action threshold is to flag any CQA with Ppk below about 1.33 for review and below about 1.0 as a capability concern, but treat those as *triggers for investigation*, not pass/fail gates. The number you publish is the registered specification, and capability is a process-health metric layered on top.
- **Out-of-trend (OOT) logic.** Define OOT before the period starts (for example, a result beyond a set number of standard deviations from the historical mean, or a stability result deviating from the expected regression by more than a pre-set margin). OOT defined after the fact is not trending; it's storytelling.

For the categorical data, deviations, complaints, returns, OOS, the tool is simpler: counts and rates by type, period over period, with the prior year (and ideally two to three years) on the same chart so a climbing category is obvious. Normalize to a denominator that makes sense, complaints per million units distributed, deviations per batch, so a year of higher volume doesn't masquerade as a year of more problems.

The depth here is worth a dedicated read: see [statistics in quality (Cpk and control charts)](/articles/statistics-in-quality-cpk-control-charts) for the mechanics, [out-of-trend investigations](/articles/out-of-trend-investigations) for the OOT decision logic, and [continued process verification](/articles/continued-process-verification-cpv) for how the same trending runs continuously rather than once a year.

### Worked example: an assay trend

Suppose tablet assay (label claim 100.0%, specification 95.0 to 105.0%) across twelve commercial batches in the period:

| Batch | Assay (% LC) |
|---|---|
| 01 | 100.4 |
| 02 | 100.1 |
| 03 | 99.8 |
| 04 | 99.5 |
| 05 | 99.3 |
| 06 | 99.0 |
| 07 | 98.7 |
| 08 | 98.5 |
| 09 | 98.2 |
| 10 | 98.0 |
| 11 | 97.6 |
| 12 | 97.3 |

Every single result is inside the 95.0-105.0% specification. A naive review writes "all batches within specification, no action required" and closes. The right review plots these on an individuals chart and sees all twelve points stepping down without a single reversal, a continuous decline that clears the Nelson trend test (rule 3, six or more consecutive points moving in one direction) several times over, with the mean sliding from about 100% toward the lower spec. Projected forward, the next several batches risk an OOS. This is a *signal*, even though nothing failed. The review must disposition it: investigate (degrading reference standard? a column aging in the assay method? a real formulation or blend-uniformity drift? a raw-material potency shift?), and either justify it as benign with evidence or open a CAPA. Catching this is the entire reason the review exists. A daily release system saw twelve passing batches; only the retrospective saw the slide.

The same logic applies to categorical data. If your deviation register shows the "fill-line stoppage" category at 4, 6, 9, 14 over four years, the count is climbing even though each individual deviation was investigated and closed. The review names the trend and asks whether the line needs an engineering fix, a different mechanism than closing one more deviation.

Worked through honestly, the trending produces a short list of *signals*: a CQA drifting toward a limit, a deviation category that won't go down, a complaint type that's climbing, a stability station that's softening. Each signal then has to be dispositioned, explained as benign with evidence, or escalated.

## How trends drive CAPA

This is the hinge of the whole exercise and the most common place reviews fall down. A review that documents an adverse trend and then closes with "no action required," without explaining why the trend is acceptable, is worse than no review, because it shows you saw the signal and ignored it.

The discipline is straightforward:

1. **Every signal gets a disposition.** Either a documented technical justification that the trend is acceptable (with the data that supports it), or an action.
2. **Actions route through the existing CAPA program.** On the drug side there is no dedicated CAPA section in 21 CFR Part 211; [21 CFR 211.192](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.192) is the production-record-review provision that mandates investigating discrepancies and recording conclusions and follow-up, and that investigation/follow-up obligation is what feeds the formal CAPA program, which sits under ICH Q10 and the broader cGMP quality system. For drug-device [combination products](/articles/combination-products-cgmp-part-4) under the Quality Management System Regulation (the amended 21 CFR Part 820, effective 2 February 2026), the operative CAPA requirement is ISO 13485:2016 clauses 8.5.2 (corrective action) and 8.5.3 (preventive action), incorporated by reference; the former combined CAPA section 820.100 is now reserved. The review should not invent a parallel action-tracking mechanism. It should open CAPAs, reference the CAPA numbers, and let the QMS own closure. See [what a CAPA is](/articles/what-is-a-capa) and [CAPA effectiveness verification](/articles/capa-effectiveness-verification).
3. **The review checks last year's CAPAs.** Both the EU list ("adequacy of previous corrective actions") and a defensible APR require you to look back at what the *prior* review committed to and confirm those actions closed and worked. Effectiveness checks that never happened are a classic finding.

A useful internal rule: the conclusions section must explicitly answer the regulation's own question, does anything need to change in the specifications, the manufacturing process, or the controls? If the answer is no, say so and say why. If yes, the CAPA numbers are right there.

CAPA actions coming out of a review tend to fall into recognizable buckets: tighten or re-justify an internal action limit; revalidate a step after cumulative change; requalify a supplier or a piece of equipment; update a method; or, the one people resist, file a variation/supplement because the process as run has drifted from the process as registered. That last one is uncomfortable but it's exactly what the MA-variation line in the EU PQR is meant to surface.

### A worked signal-to-disposition table

The cleanest way to present this in the report itself is a signal register. One row per signal, with its evidence and its disposition, so a reader (and an inspector) can see that nothing was waved through:

| Signal | Evidence | Disposition | Reference |
|---|---|---|---|
| Assay drifting toward lower spec (12-batch continuous decline) | Individuals chart, batches 01-12 | Investigate: confirm reference-standard potency and method column age | CAPA-2026-0142 |
| Dissolution Ppk 1.18 (below 1.33 threshold) | Capability summary, 12 batches | Justified acceptable: spread is method variability, mean centered, no drift; monitor next period | Technical memo in review, no CAPA |
| Particulate complaints up 0.8 to 1.9 per million units | Complaint trend, 3-year | Investigate: correlate with new stopper supplier introduced this period | CAPA-2026-0143 |
| Fill-line stoppage deviations 9 to 14 | Deviation category trend | Engineering review of line, not another single-event correction | CAPA-2026-0144 |
| Stability impurity X rising at 36-month station | Stability trend, two commitment lots | Escalate: OOT confirmed, assess shelf-life impact, field-alert evaluation | CAPA-2026-0145, FAR eval |

Notice the second row: a flagged number that is *not* an action, with a written reason. That is exactly as important as the rows that open CAPAs. A review where every flag becomes a CAPA looks like nobody is thinking; a review where no flag ever becomes a CAPA looks like nobody is looking. Good judgment shows in the mix.

## Stability, change creep, and the slow failures

Two trend types deserve special attention because they fail slowly and a single-batch quality system won't catch them.

**Stability.** The review must consolidate the ongoing stability program, the annual commitment batches placed each year plus any active studies, and look across stations and time points for adverse trends, per [ICH Q1A(R2)](https://database.ich.org/sites/default/files/Q1A%28R2%29%20Guideline.pdf) and [ICH Q1E](https://database.ich.org/sites/default/files/Q1E%20Guideline.pdf) on evaluation of stability data. A single batch trending down on a degradation product might be within spec at every station and still, projected forward, threaten the shelf life. The review is where you do that projection across the whole program, not one study at a time. Any OOS or confirmed OOT on stability is a mandatory escalation, and it can carry a field-alert obligation (21 CFR 314.81, NDA Field Alert Reports in the US) entirely separate from the review. See [stability programs (ICH)](/articles/stability-programs-ich).

**Change creep.** Each change control was approved on its own merits, with its own impact assessment. The review is the only place anyone looks at the *cumulative* effect of a year of small approved changes, a new excipient source here, a tweaked hold time there, a re-sourced filter, a parameter widened within validated range. Individually fine; together they can move the process off the validated center. Reviewing change controls as a set, against the batch data from the same period, is how you catch a process that was nibbled out of control. This is also where you confirm that anything requiring a regulatory variation actually got filed, and that revalidation triggered where it should have. [ICH Q12](/articles/ich-q12-lifecycle-management) on lifecycle management and [change control for validated systems](/articles/change-control-validated-systems) carry the detail on managing post-approval change.

## Roles and responsibilities

A review is a cross-functional product, and a frequent finding is that one function owned the whole thing and the others never engaged. Define who does what in the SOP. A workable split:

| Role | Responsibility in the review |
|---|---|
| **Review author / coordinator** (often QA or a dedicated APR/PQR owner) | Owns the schedule, pulls or requests every register, assembles the document, drafts the narrative and conclusion |
| **QC / Analytical** | Provides release and stability data at result level, runs or supports the SPC and capability analysis, explains lab OOS/OOT root causes |
| **Manufacturing / Operations** | Provides batch and disposition data, explains process deviations and yield trends, owns process-related CAPAs |
| **Validation / Engineering** | Provides equipment and utility qualification status, revalidation triggers, flags change creep against validated state |
| **Regulatory Affairs** | Provides MA variation status, confirms registered process vs. as-run process, owns variation filings that fall out of the review |
| **Supply chain / Procurement** | Provides supplier performance, new-source data, incoming-material rejection data |
| **Subject-matter reviewer** | Independent technical read of the trends and dispositions before approval |
| **Quality Assurance (approver)** | Reviews the conclusion against the data, confirms CAPAs are opened, signs and dates the final report |

The **marketing authorization holder / application holder** carries the regulatory accountability for the review existing and being adequate, even when a contract site generates most of the data. Accountability does not delegate.

## What inspectors look for

Investigators read product reviews routinely, and there are recurring findings. Knowing them tells you how to write a review that survives scrutiny.

- **Timeliness.** "At least annually" means the review for a given period is completed within a defined, reasonable window after the period closes, typically stated in your SOP as a number of days. A review for last year that isn't signed until ten months into this year is a finding on its face, regardless of content.
- **It's signed and it concludes something.** A review that's a data dump with no evaluation and no conclusion fails the "evaluated to determine the need for changes" clause. QA approval and a clear conclusion about specification/process/control changes are non-negotiable.
- **Trends are actually evaluated, not just printed.** Charts with no interpretation are a red flag. The inspector wants to see that a human looked at the trend and made a call.
- **Open actions from the last review are closed, and effective.** Carrying the same CAPA across multiple annual reviews, or never verifying effectiveness, draws fire fast.
- **Out-of-specification results tie out.** The OOS count in the review must reconcile with the QC and deviation logs. A review that under-reports OOS, even by sloppiness, looks like concealment.
- **The conclusion matches the data.** "No adverse trends observed" sitting above a chart that visibly drifts toward a limit is the worst possible look. Investigators are specifically trained to test whether the narrative matches the numbers.
- **The data is contemporaneous and attributable.** Trending built on a spreadsheet that someone re-keyed from the LIMS, with no traceability back to source, runs straight into data-integrity scrutiny. Pull from the validated system, keep the query, keep the audit trail. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations).

The recurring theme: inspectors treat the review as evidence of whether the quality system *thinks*. Daily records show that procedures get followed. The product review shows whether the organization steps back, sees the pattern, and acts on it. A weak review suggests the rest of the system is reactive.

### Common mistakes, beyond the inspection list

- **Cherry-picked "representative" batches.** Excluding the rejected lots and the ones with investigations because they "aren't representative of normal operation." Those are the signal. Include all batches for trending.
- **Trending a conclusion instead of data.** Accepting a site summary that says "all conforming" and treating that as the review. You cannot re-derive a trend from someone else's verdict.
- **Static action limits that never get re-justified.** Internal alert/action limits set at validation and never revisited against accumulated data. The review is the right place to ask whether they still fit the process.
- **No denominator.** Reporting raw complaint or deviation counts in a year of changed volume, so a busier year reads as a worse year (or hides a real rise).
- **Conclusion written before the analysis.** A boilerplate "no changes to specifications, process, or controls are warranted" pasted in regardless of what the data showed. Inspectors recognize the template.
- **OOT undefined.** No pre-set out-of-trend rule, so every borderline result is argued case by case after the fact.
- **The review and the CPV program disagree.** If continued process verification is running in parallel and its conclusions don't match the annual review's, you have two systems looking at the same data and reaching different answers. Reconcile them.

## The contract-manufacturing problem

Most companies don't make everything themselves, and the contract-manufacturing relationship is where product reviews most often break. The legal responsibility for the review sits with the marketing authorization holder / application holder, you can't outsource accountability for it. But the data lives at the contract manufacturing organization (CMO) and the contract testing lab.

The mechanism that's supposed to fix this is the **quality/technical agreement**. The EU PQR explicitly requires confirming these agreements are current; the FDA's [guidance on Contract Manufacturing Arrangements for Drugs: Quality Agreements](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/contract-manufacturing-arrangements-drugs-quality-agreements-guidance-industry) (2016) is the US counterpart. A workable quality agreement spells out, for the review specifically:

- **Who compiles what.** Typically the CMO produces a site-level review contribution (batch dispositions, in-process and release data, deviations, OOS, change controls, complaints received at site) and the MAH consolidates it into the product-level review with the field complaints, returns, recalls, stability, and regulatory status the CMO doesn't see.
- **The data must arrive raw enough to trend.** A CMO summary that says "all batches conforming, no significant deviations" is useless to you, you can't trend a conclusion. Specify that the CMO provides batch-level results and the full deviation/OOS list so your statistician can run the charts, not just read the CMO's interpretation.
- **Timing.** The CMO's contribution has to land early enough that you can complete the consolidated review within your own annual window. Build the CMO deadline into the agreement, upstream of your SOP deadline.
- **Right of audit and access.** You need to be able to verify the CMO's numbers against their raw records, and the agreement should say so.

The classic failure is the MAH treating the CMO's site review *as* the product review. It isn't. The site review covers the site's slice; the product review covers the product across all sites, plus everything that only the MAH sees, global complaints, returns, recalls, stability across the program, and the registered-process / variation status. An inspector who finds a product made at three sites with three disconnected site reviews and no consolidated product-level evaluation has found a real gap, even if each site's paperwork is immaculate. See [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements) for the broader relationship management.

## Putting it together: a step-by-step procedure

A defensible review runs in a fixed sequence. Build your SOP around it:

1. **Schedule and scope.** Trigger the review on a calendar against the defined period. Confirm product definition, period boundaries, and data cutoff date.
2. **Request and pull the registers.** Issue data requests to each function and CMO with the cutoff date; query the validated systems directly where you can; keep the queries.
3. **Reconcile.** Confirm batch counts, OOS counts, deviation counts, and complaint counts tie to the source systems. Resolve any mismatch before analysis.
4. **Trend the quantitative CQAs.** Control charts plus capability for each CQA and critical IPC. Apply pre-defined run rules and OOT logic.
5. **Trend the categorical data.** Deviations, OOS, complaints, returns by type and rate, against prior periods, normalized to a denominator.
6. **Build the signal register.** One row per signal with evidence and disposition (justified-acceptable or escalated).
7. **Open CAPAs for escalations** in the QMS; record the numbers in the report.
8. **Review prior-period actions.** Confirm last review's commitments closed and were effective; flag any still open.
9. **Consolidate CMO contributions** into the product-level view; do not substitute a site review for the product review.
10. **Confirm the cross-checks** the EU list demands: stability program status, MA-variation status, equipment/utility qualification status, technical agreements current.
11. **Write the conclusion** that answers, in plain terms, whether the specifications, the process, or the controls need to change, with the CAPA numbers where the answer is yes.
12. **Independent technical review, then QA approval, sign and date.** Complete within the SOP window.

Do that and the review stops being an annual paperwork tax and becomes what the regulation intended, the place where a manufacturer proves, once a year and on paper, that the process it validated is still the process it's running.

## Interview questions you should be ready for

If you own or contribute to product reviews, expect these in an interview or an inspection. Short, defensible answers:

**"What is the regulatory basis for the APR and the PQR, and how do they differ?"**
The US APR comes from 21 CFR 211.180(e): a written, at-least-annual review of a representative number of batches plus complaints, recalls, returns/salvage, and §211.192 investigations, evaluated to decide whether specifications, process, or controls need to change. The EU PQR comes from EU GMP Part I, Chapter 1, §1.10, and enumerates more inputs explicitly: stability program, MA variations, utility and equipment qualification status, technical agreements. Most global firms write to the EU list because it's the superset.

**"What does 'representative number of batches' mean? Can you exclude failed lots?"**
No. Representative does not mean favorable. The defensible practice is to include all batches in quantitative trending and justify any exclusion in writing. Rejected and investigated batches carry the most signal; leaving them out is a classic finding and reads as concealment.

**"Walk me through how a trend becomes a CAPA."**
Trend the data, identify signals (run-rule violations, capability below threshold, climbing categorical rates, stability drift), give every signal a documented disposition, either justified-acceptable with evidence, or escalated. Escalations open CAPAs in the existing QMS by number; the review does not run its own action tracker. Then verify the prior review's CAPAs closed and were effective.

**"A batch passed all specifications. Why would the review still flag it?"**
Because specification is a single-point pass/fail and the review looks at the process. A series of passing results can break a run rule, drift toward a limit, or show falling capability, all early warnings of a process going out of control while still technically in spec. That early warning is the reason the review exists.

**"How do you handle a product made at a contract site?"**
The MAH/application holder owns the review's adequacy; accountability does not outsource. The quality agreement defines who supplies what, requires batch-level (not summary) data so we can trend, sets the CMO's submission deadline upstream of our review deadline, and gives us audit access to verify against raw records. The CMO's site review is an input, not a substitute for the product-level review.

**"What's the difference between this and continued process verification?"**
CPV (FDA process-validation guidance, 2011, Stage 3) is continuous monitoring of process performance and capability throughout commercial production. The annual product review is the periodic, formal, documented retrospective that consolidates the whole year, including everything CPV doesn't touch (complaints, recalls, returns, regulatory status, technical-agreement review). They use overlapping data and must not contradict each other.

**"What are the most common findings on product reviews?"**
Late completion, a data dump with no evaluation or conclusion, conclusions that don't match the data, OOS counts that don't reconcile with the lab logs, prior CAPAs never closed or never effectiveness-checked, and treating a contract site's review as the product review.

## Key references

- [21 CFR 211.180(e)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.180), Annual Product Review requirement (US)
- [21 CFR 211.192](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.192), Production record review / investigations (OOS, deviations)
- EU GMP Part I, Chapter 1, §1.10, Product Quality Review requirement (EU)
- [ICH Q10](https://database.ich.org/sites/default/files/Q10%20Guideline.pdf), Pharmaceutical Quality System (PQS, management review)
- ICH Q9(R1), Quality Risk Management
- [ICH Q1A(R2)](https://database.ich.org/sites/default/files/Q1A%28R2%29%20Guideline.pdf) and [ICH Q1E](https://database.ich.org/sites/default/files/Q1E%20Guideline.pdf), Stability testing and evaluation
- FDA Process Validation: General Principles and Practices (2011), Stage 3, Continued Process Verification
- [FDA Guidance: Contract Manufacturing Arrangements for Drugs, Quality Agreements](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/contract-manufacturing-arrangements-drugs-quality-agreements-guidance-industry) (2016)

### Related reading

- [Continued process verification (CPV)](/articles/continued-process-verification-cpv)
- [Statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts)
- [Out-of-trend investigations](/articles/out-of-trend-investigations)
- [Stability programs (ICH)](/articles/stability-programs-ich)
- [What a CAPA is](/articles/what-is-a-capa) and [CAPA effectiveness verification](/articles/capa-effectiveness-verification)
- [Management review under Q10](/articles/management-review-q10)
- [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements)
- [Quality metrics and KPIs](/articles/quality-metrics-and-kpis)
