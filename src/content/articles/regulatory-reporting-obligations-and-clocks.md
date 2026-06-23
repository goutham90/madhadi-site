---
title: "Regulatory Reporting Obligations and Their Clocks"
description: "A decision-tree reference for when a Field Alert Report, Biological Product Deviation Report, expedited adverse-event report, or recall notification is triggered, who decides, the regulatory clock for each, and the record that proves you met it."
pubDate: 2026-06-22
tags: ["regulatory-reporting", "field-alert-report", "adverse-events", "recall", "pharmacovigilance", "FDA"]
pillar: "audits-inspection"
tier: "Intermediate"
---

A missed or late mandatory report is one of the few quality failures that is visible to a regulator before you tell them anything. The clock is fixed in regulation, the trigger is often a single event buried in a deviation or a complaint, and the decision to report usually has to be made by a person who is also trying to run an investigation under time pressure. That combination is why late Field Alert Reports, unfiled Biological Product Deviation Reports, and overdue safety reports show up again and again in FDA 483 observations and warning letters. The science was fine. The notification clock ran out while everyone was busy doing the science.

This article is built as a reference you can put next to a desk and use the moment something looks reportable. For each main report type in the United States drug and biologics world, the Field Alert Report, the Biological Product Deviation Report, the expedited adverse-event report, recall notification, and drug shortage notification, it gives the trigger (with the regulatory basis), who decides, the exact clock, what the report must contain, and the record that proves you met the obligation. It ends with a high-level note on the EU and other regional equivalents, because one event on a globally distributed product can owe reports in several jurisdictions. It assumes a US drug and biologics scope; the same logic applies to combination products and cell and gene therapy products, with the biologics rules carrying through. It describes the requirements in plain language and points you to the regulation by number; always confirm the current text and any product-specific commitment before you act, because this is general guidance to adapt, not legal advice.

If you are new to the upstream events that feed these clocks, [deviation management](/articles/deviation-management) and [product complaint handling](/articles/product-complaint-handling) are the two intake processes that most often surface a reportable event, and [quality event classification and triage](/articles/quality-event-classification-triage) is where the reportability question should first be asked out loud.

---

## The reports and their clocks at a glance

Five mandatory FDA reports cover most of what a US drug or biologics manufacturer has to send when something goes wrong, and the EU and other regions add their own. They are easy to confuse because their triggers overlap, so start with the shape of each one. The table below holds the four that fire fastest off a quality event; drug shortage notification and the regional equivalents follow in their own sections.

| Report | Trigger in one line | Regulatory basis | The clock |
|---|---|---|---|
| Field Alert Report (FAR) | A distributed NDA/ANDA drug product may be mislabeled, contaminated, or failing a stability or significant-characteristic test | 21 CFR 314.81(b)(1) | 3 working days from receipt of the information |
| Biological Product Deviation Report (BPDR) | A deviation from cGMP or an unexpected event affected the safety, purity, or potency of a distributed licensed biologic | 21 CFR 600.14 (and 606.171 for blood) | As soon as possible, not to exceed 45 calendar days from discovery |
| Expedited adverse-event report (15-day) | A serious and unexpected adverse drug experience associated with a marketed product | 21 CFR 314.80 (drugs), 600.80 (biologics) | 15 calendar days from initial receipt of the information |
| Recall notification to FDA | The firm is removing or correcting a distributed product that violates the law | 21 CFR Part 7 (21 CFR 7.46 requires immediate notification; FDA recall procedures and common practice treat 24 hours as the working window for risk-to-health recalls) | Immediately on the recall decision, in practice within 24 hours for a recall presenting a risk to health |

Two facts cause most missed reports. First, the clock starts on receipt or discovery of the information, not on confirmation. You do not get to wait until the investigation is finished. Second, the same event can trigger more than one report at once. An out-of-specification sterility result on a distributed biologic can be a FAR (drug-style stability or significant-characteristic concern), a BPDR (safety, purity, potency of a biologic), the front end of a recall, and, if it takes a line down, a drug shortage notification, all from one finding. Treat the clocks as parallel, not sequential.

The rest of this article walks each one. A practical decision tree for routing any new event sits at the end, in the worked example.

---

## Field Alert Report (FAR)

### Why it exists and the risk

The FAR is an early-warning system for distributed drug product problems. The point is speed: FDA wants to know within days, while the product is still on shelves and pharmacy counters, that a batch may be mislabeled, contaminated, or failing. It is required under 21 CFR 314.81(b)(1) for any product covered by an approved NDA or ANDA. The risk of getting it wrong is not subtle. A late FAR is one of the most common single observations in drug-product 483s, partly because the trigger is broad and the clock is short.

### The trigger

The regulation defines two reportable categories. The first covers information concerning any incident that causes the drug product or its labeling to be mistaken for, or applied to, another article. In plain terms: a mix-up or a labeling error on a distributed product. The second, often called the "three-day NDA-field alert" category, covers information concerning any bacteriological contamination, any significant chemical, physical, or other change or deterioration in the distributed drug product, or any failure of one or more distributed batches to meet the specification established for it in the application.

> 21 CFR 314.81(b)(1)(ii) requires the applicant to submit information concerning bacteriological contamination, or any significant chemical, physical, or other change or deterioration in the distributed drug product, or any failure of one or more distributed batches to meet the established specification.

The phrase that trips people up is "distributed." If the affected batch never left your control, a FAR is generally not triggered (you manage it as a deviation or rejected lot). The moment any quantity of that batch has shipped, the FAR test applies. The other phrase that matters is "information concerning," not "confirmed failure." A confirmed out-of-specification stability result on a distributed batch is squarely reportable. So is credible information that strongly suggests one, even before the investigation closes.

### Who decides

A defined role, usually a designated Field Alert coordinator in the quality unit, owns the reportability call, with quality unit management accountable for the decision. The decision should not sit with the analyst who ran the test or the investigator who opened the deviation, both because of independence and because they are not the people watching the three-day clock. A good FAR procedure names the decision-maker, names a backup, and requires the decision (report or do not report, with rationale) to be recorded the same day the information arrives.

### The clock

Three working days from when the applicant first receives the information. Working days exclude weekends and federal holidays, but the clock is unforgiving in practice because the trigger is receipt of information, not completion of analysis. You file what you know within three working days and follow up later.

### What the report contains and how to file

A FAR is filed on Form FDA 3331a to the FDA district office responsible for the facility. Electronic submission of FARs is not mandatory under 21 CFR 314.81(b)(1) at this time, but FDA recommends the automated XML version of Form FDA 3331a; the form can also be saved as a PDF and submitted on paper. A FAR is iterative by design:

1. **Initial FAR.** Filed within three working days. It states the product, NDA/ANDA number, batch, the nature of the problem, and what you know so far. It is acceptable, and expected, for the initial FAR to say the investigation is ongoing.
2. **Follow-up FAR(s).** Filed as the investigation develops, updating the findings.
3. **Final FAR.** Filed when the investigation concludes, stating root cause, disposition, and any field action. The final FAR formally closes the alert.

A common and defensible practice is to file the initial FAR and then notify the district that the investigation continues, rather than sitting on the alert until you have answers.

### Acceptance criteria

The FAR obligation is met when: the reportability decision is recorded within the same day the information arrived; the initial FAR is transmitted within three working days with proof of submission; follow-up and final FARs are filed and the alert is formally closed; and the FAR record cross-references the deviation or out-of-specification investigation that triggered it, so an inspector can trace the event end to end. See [out-of-specification investigations](/articles/oos-investigation-process) for the upstream record that most often feeds a FAR.

### Common 483-type mistakes

- Waiting for the investigation to confirm root cause before filing, so the initial FAR lands on day seven or later.
- Treating a confirmed distributed stability failure as "just" an out-of-trend signal and never running the FAR test.
- Filing the initial FAR but never filing the final FAR, leaving alerts open for years.
- No designated decision-maker, so the call drifts between the lab and quality and nobody owns the clock.
- Counting calendar days instead of working days the wrong way (assuming you have more time than you do when a holiday falls inside the window).

---

## Biological Product Deviation Report (BPDR)

### Why it exists and the risk

The BPDR is the biologics analogue to the FAR, but its trigger is built around the biologic-specific attributes of safety, purity, and potency rather than drug specifications. It is required under 21 CFR 600.14 for licensed biological products (and the parallel 21 CFR 606.171 governs blood and blood components). Because cell and gene therapy products and many biologics are licensed under a BLA, this is the report that most often applies in the advanced-therapy world. Failing to file one, or filing late, is a recurring biologics inspection finding.

### The trigger

A BPDR is required when two conditions are both met. First, there was a deviation from current good manufacturing practice, an applicable regulation, an applicable standard, or an established specification; or an unexpected or unforeseeable event. Second, that deviation or event may affect the safety, purity, or potency of a distributed product. Both conditions matter. A cGMP deviation on a batch that never shipped, or that has no plausible bearing on safety, purity, or potency, is not a BPDR (it is still a deviation you investigate).

> 21 CFR 600.14 requires reporting of an event that represents a deviation from cGMP, applicable regulations, standards, or specifications, or an unexpected or unforeseeable event, that may affect the safety, purity, or potency of a distributed product.

"Distributed" again does heavy lifting. The product must have been released for distribution. And "may affect" is a low bar: it is a possibility test, not a proof test. If you cannot rule out an effect on safety, purity, or potency, you are generally inside the trigger.

### Who decides

The quality unit owns the BPDR decision, typically the same Field Alert or regulatory-reporting role that owns the FAR, often with a reporting committee for borderline calls. For a licensed biologic the reportability assessment should be a defined step inside deviation closure, not a separate afterthought, because the 45-day clock runs from discovery, not from deviation closure.

### The clock

As soon as possible, but not to exceed 45 calendar days from the date you acquired information reasonably suggesting a reportable event has occurred. The forty-five days is a ceiling, not a target. Discovery is the start; calendar days, not working days.

### What the report contains and how to file

BPDRs are submitted electronically to the Center that licenses the product (CBER for most biologics) using the eBPDR system and Form FDA 3486. A single report covers the event and includes the product, license number, lot, a description of the deviation or event, when and how it was discovered, the affected quantity distributed, and the assessment of the effect on safety, purity, or potency together with the corrective action. Unlike the FAR, the BPDR is generally a single comprehensive report rather than an iterative initial/final pair, though you update if material new information emerges.

### Acceptance criteria

The BPDR obligation is met when: the reportability assessment against the safety/purity/potency test is a documented step in the deviation record; the report is filed within 45 calendar days of discovery with proof of submission; the report ties to the deviation, the affected lot, and the distribution records; and the file shows the date of discovery clearly, because the inspector will compute the elapsed days from it. For the underlying intake, see [deviation management](/articles/deviation-management).

### Common 483-type mistakes

- Starting the 45-day clock at deviation closure instead of at discovery, then filing on day sixty.
- Concluding "no impact on safety, purity, or potency" without a documented rationale, so the inspector reads it as avoidance.
- Missing that a distributed cell or gene therapy lot deviation is a BPDR because the team thought of it as a manufacturing deviation only.
- No link between the BPDR and the deviation and distribution records, so reportability cannot be reconstructed.

---

## Expedited adverse-event reports (the 15-day report)

### Why it exists and the risk

Postmarket safety reporting is how FDA learns that a marketed product is hurting people in ways the label did not predict. The expedited, or 15-day, report is the fast lane for the most concerning signals. It is required under 21 CFR 314.80 for drugs and 21 CFR 600.80 for licensed biologics. Pharmacovigilance reporting failures, late 15-day reports, uncounted aggregate reports, and weak case intake are among the most consequential findings a company can receive, because they speak directly to patient safety. The data integrity dimension of this work is covered in [pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity).

### The trigger

An expedited report is required for any adverse experience that is both serious and unexpected, where there is a reasonable possibility of an association with the product (for spontaneous reports, causality is generally assumed). Two definitions decide everything:

- **Serious** means an outcome that is fatal, life-threatening, results in or prolongs hospitalization, causes persistent or significant disability or incapacity, is a congenital anomaly, or requires intervention to prevent permanent impairment.
- **Unexpected** means the event is not listed in the current labeling, or is more severe or specific than what the labeling describes. An event the label already names at the same severity is "expected" and goes into periodic, not expedited, reporting.

So the expedited test is a logical AND: serious AND unexpected. A serious but labeled event is periodic. An unexpected but non-serious event is periodic. Only the intersection is expedited.

### Who decides

The pharmacovigilance or drug safety function owns adverse-event triage and the seriousness/expectedness/causality assessment, with a qualified safety physician making or confirming the medical judgment. Manufacturing and quality staff are usually the intake point (a complaint that mentions a patient harm), so the handoff from [product complaint handling](/articles/product-complaint-handling) into safety is a control that inspectors probe: a complaint that should have been a safety case but never reached pharmacovigilance is a classic gap.

### The clock

15 calendar days from the day any employee or representative of the company first receives the minimum information for a valid case (an identifiable patient, an identifiable reporter, a suspect product, and an event). Day zero is the date of first receipt anywhere in the organization, including a sales representative's voicemail or a call-center log, not the date the case reached the safety database. That sweep-up of "first receipt anywhere" is where many late reports are born.

### What the report contains and how to file

Cases are submitted electronically to the FDA Adverse Event Reporting System (FAERS), in the ICH E2B(R3) electronic format, with the ICSR (Individual Case Safety Report) carrying the patient, reporter, product, event, seriousness, expectedness, and narrative. Follow-up reports are submitted as new information arrives. Events that are not expedited still have to be captured and counted in periodic safety reports (the PADER, or the PBRER/PSUR where that format applies), so nothing is discarded; the question is only which clock applies.

### Acceptance criteria

The obligation is met when: every intake channel feeds case capture within a defined and short internal handoff time so the 15-day clock is protected; the seriousness, expectedness, and causality assessment is documented per case; valid expedited cases are transmitted within 15 calendar days of first receipt with proof; non-expedited events are captured for periodic reporting; and the day-zero date is defensible across all intake channels.

### Common 483-type mistakes

- Starting the 15-day clock at safety-database entry instead of first receipt anywhere in the company.
- A complaint that describes patient harm closing in the complaint system without ever generating a safety case.
- Misclassifying a serious unexpected event as expected against an outdated labeling reference, dropping it to periodic.
- No reconciliation between the complaint system and the safety database, so cases fall between the two.

---

## Recall notification to FDA

### Why it exists and the risk

A recall is the firm's removal or correction of a marketed product that violates the law. Most US drug and biologic recalls are voluntary actions by the firm, conducted under 21 CFR Part 7, but "voluntary" does not mean leisurely. Once you decide to remove or correct product, notification and execution clocks engage, and FDA classifies the recall by health hazard (Class I, II, or III). A botched or slow recall, product left in the field, no effectiveness checks, no health-hazard evaluation, draws serious findings and can convert a voluntary recall into a mandatory one. The full operational picture is in [recall management and field actions](/articles/recall-management-field-actions); this section is the notification clock.

### The trigger

A recall is triggered when the firm determines a distributed product is violative: it fails specification in a way that affects safety or efficacy, is mislabeled or contaminated, was made under conditions that compromise it, or otherwise breaks the law. This is frequently the downstream consequence of a FAR or BPDR investigation that concludes the distributed product cannot stay in the market.

### Who decides

A recall committee or executive quality leadership makes the recall decision, supported by a documented health-hazard evaluation (the medical and scientific assessment of the risk the defect poses), which drives the recall classification and strategy. The decision is senior because the stakes (patient exposure, supply, public notification) are high.

### The clock

There are two distinct clocks. The first is notification to FDA. 21 CFR 7.46(a) requires a firm that decides to remove or correct a distributed product it believes to be violative to notify the appropriate FDA district office immediately. The regulation itself uses the word "immediately" and does not state a fixed number of hours; the 24-hour window people refer to comes from FDA's recall procedures and from standard firm practice, which treat an initial telephone or electronic notice to the district within 24 hours of the recall decision as the working expectation for a recall presenting a risk to health. The second clock is the recall-execution clock embedded in the recall strategy: how fast you must reach each level of distribution (depth of recall), conduct effectiveness checks, and account for product. Notification governs telling FDA; the strategy governs telling the market.

> 21 CFR 7.46(a) provides that a firm that decides to remove or correct a distributed product it believes to be violative is requested to notify the appropriate FDA district office immediately. The 24-hour figure is a procedural and practice expectation layered on top of that "immediately," not a number written into the regulation.

### What the notification contains and how to file

Initial notification to the district covers the product identity and lot(s), the reason for the recall, the health-hazard evaluation summary, the quantity produced and distributed, the distribution pattern, and the proposed recall strategy (depth, public warning if any, and effectiveness-check level). The firm then issues recall communications to consignees, conducts effectiveness checks, files status reports until the recall is terminated, and requests termination when product is accounted for and the strategy is complete.

### Acceptance criteria

The obligation is met when: a health-hazard evaluation is documented before or at the recall decision; FDA is notified immediately, in practice within 24 hours, for any recall presenting a risk to health, with the notification recorded; the recall strategy defines depth, effectiveness-check level, and timing; consignee notifications and effectiveness checks are executed and recorded; and the recall is formally terminated with FDA concurrence. Note the interaction with track-and-trace obligations in [DSCSA serialization and track and trace](/articles/dscsa-serialization-track-and-trace), which can speed locating distributed product.

### Common 483-type mistakes

- Deciding to recall but treating FDA notification as a follow-up task, blowing the 24-hour window for a risk-to-health recall.
- A recall classification assigned without a documented health-hazard evaluation behind it.
- Recall depth set too shallow (to retailer when product reached patients), leaving exposed product in the field.
- No effectiveness checks, so the firm cannot show the recall actually worked.
- Recall left open indefinitely with no termination request.

---

## Drug shortage notification

### Why it exists and the risk

When a manufacturing problem takes a line down or pulls a lot, the patient consequence is not only a defect, it can be a supply gap for a medicine people depend on. Congress wrote a separate notification duty for exactly this case. Section 506C of the Federal Food, Drug, and Cosmetic Act (21 USC 356c) requires manufacturers of certain drugs to tell FDA when they will permanently discontinue a product or when a manufacturing interruption is likely to disrupt supply. This is the report most quality teams forget, because it feels like a supply-chain or commercial matter, yet the trigger is almost always a quality event: a contamination, a failed lot, an equipment failure, or a recall that empties inventory. Quality knows about the cause first, so quality has to flag it.

### The trigger

Two situations. First, a permanent discontinuance of the manufacture of a covered drug. Second, an interruption in manufacturing that is likely to lead to a meaningful disruption in supply. The scope of "covered" reaches drugs that are life-supporting, life-sustaining, or intended to treat a serious or debilitating disease or condition, and in practice it sweeps in most sterile injectables. A quality-driven line stoppage on a sole-source sterile injectable is the textbook 506C event.

### Who decides

This is a shared decision. Supply chain or commercial supply owns the supply-impact assessment (do we have safety stock, an alternate line, a second site), regulatory affairs owns the filing, and quality owns the early flag that a quality event has interrupted manufacturing at all. The failure mode is a quality event that never reaches the people who can see the supply picture.

### The clock

Under 21 USC 356c, the notice is due at least six months before a permanent discontinuance, or before a manufacturing interruption likely to disrupt supply, when six months of notice is possible. For an interruption you could not have foreseen six months out, which is what a quality event usually is, six months of notice is impossible, so the statute requires you to notify FDA as soon as practicable. Read "as soon as practicable" as days, not weeks: FDA's drug shortage program works these cases in near real time, and a quality team that sits on a supply-disrupting interruption while it finishes investigating is exactly the gap the shortage staff and inspectors look for. Confirm the current statutory text and FDA's shortage guidance for your product, because the covered-drug scope and the notification mechanics have been amended more than once.

### What the notification contains and how to file

The notice identifies the product, the reason for the discontinuance or interruption, the expected duration, and what the firm is doing to restore or maintain supply. It goes to FDA's drug shortages program through the established channel. Keep the dated submission and acknowledgment, the same as any other report.

### Acceptance criteria

The obligation is met when: every quality event that interrupts manufacturing of a covered drug is screened for 506C at the point the interruption is known; the supply-impact assessment is documented (including a recorded basis for any decision that supply is NOT likely to be disrupted); FDA is notified as soon as practicable for an unforeseen interruption likely to disrupt supply, or at least six months ahead of a planned discontinuance; and the notification and its acknowledgment are retained.

### Common 483-type and compliance mistakes

- A major deviation or recall takes a line down and nobody runs the 506C clock, so a reportable interruption goes unreported.
- Treating shortage notification as purely commercial, so it never connects to the quality event that caused it.
- No documented basis for a decision that an interruption would not disrupt supply.

---

## EU and other equivalents at a high level

The US instruments above have analogues in other regions. The names and the exact clocks differ, so a firm distributing internationally has to run a per-market obligations register rather than assume the US filing covers the world. A few orienting points:

- **EU quality-defect reporting.** In the EU, a manufacturer or marketing authorization holder reports quality defects and falsified-medicine concerns to the competent authority of the member state. The EU GMP framework (EudraLex Volume 4, Chapter 8 on complaints, quality defects, and recalls) expects defects with potential patient impact to be reported promptly and recalls to be coordinated with the authority. This is the rough EU counterpart to the FAR and BPDR plus recall notification combined.
- **Rapid alerts.** EU and EEA authorities, and PIC/S participating authorities under the PIC/S rapid-alert procedure (PI 010, the procedure for handling rapid alerts and recalls arising from quality defects), operate a rapid-alert network for urgent, serious defects (broadly the Class I equivalent). The most serious cases move on an urgent timeline: a Class I rapid alert is transmitted concurrently with the national action, and a Class II alert generally within 24 hours, so these run in hours to a day, not weeks. Do not confuse PI 010 with PI 041, which is the PIC/S data integrity guidance.
- **EU pharmacovigilance.** Expedited individual case reports and periodic safety reports run through EudraVigilance under the EU good pharmacovigilance practice modules, with a 15-day clock for serious expedited cases and EU-defined cycles for the periodic reports, mirroring the US wall between quality and pharmacovigilance.
- **EU shortage reporting.** Marketing authorization holders must notify competent authorities, and EMA for centrally authorized products, of supply shortages and discontinuations, with advance-notice expectations broadly similar in spirit to 506C though set by EU and national rules.
- **MHRA (UK).** The UK runs its own defect-reporting route to the MHRA Defective Medicines Report Centre and its own pharmacovigilance and shortage routes, conceptually parallel to the EU and US systems.

The practical lesson: one event on a globally distributed product can owe a US report, an EU competent-authority defect report, a rapid alert, recalls coordinated in each region, and shortage notices in several markets, each on its own clock. Maintain the register so the right clock fires in each jurisdiction.

---

## How the clocks interact: one event, several reports

Because the triggers overlap, the dangerous case is the single event that quietly owes more than one report. A useful habit is to run every new quality event through the same five questions on day one, before the investigation pulls everyone's attention away from the clocks.

<div class="flow-v">
  <div class="flow-step">New event: deviation, complaint, or OOS on a distributed product</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Is it an approved NDA/ANDA drug, distributed, with contamination, a significant change, a stability or spec failure, or a mix-up? &rarr; FAR clock starts (3 working days)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Is it a licensed biologic, distributed, with a deviation or unexpected event that may affect safety, purity, or potency? &rarr; BPDR clock starts (45 calendar days from discovery)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Does it involve a serious AND unexpected adverse experience? &rarr; Expedited safety clock starts (15 calendar days from first receipt)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Does the conclusion mean distributed product must be removed or corrected? &rarr; Recall: notify FDA immediately, in practice within 24 hours if risk to health, plus strategy</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Did it interrupt manufacturing of a covered drug, likely to disrupt supply? &rarr; Drug shortage notification (506C): notify FDA as soon as practicable</div>
</div>

The point of running all five every time is that the clocks start independently and early. You can decide later that a given clock does not apply, with a recorded rationale, but you cannot recover a clock you never noticed had started. Add the regional clocks too if the affected product is distributed outside the US.

---

## Roles across the reports

| Role | Responsibility |
|---|---|
| Intake (lab, complaint handler, sales, call center) | Captures the originating information and records the date of first receipt or discovery accurately, because that date sets the clock |
| Regulatory reporting / Field Alert coordinator | Owns the FAR and BPDR reportability decisions, the filings, and the proof of submission |
| Pharmacovigilance / drug safety | Owns adverse-event triage, the serious/unexpected/causality assessment, and the 15-day and periodic submissions |
| Quality unit management | Accountable for the reportability decisions and for the procedures and clocks being met; flags any quality event that interrupts manufacturing |
| Safety physician | Makes or confirms the medical judgment on seriousness, expectedness, and causality |
| Recall committee / executive quality | Makes the recall decision, owns the health-hazard evaluation, and the immediate FDA notice |
| Supply chain / commercial supply | Owns the supply-impact assessment that decides whether a manufacturing interruption is a reportable 506C shortage |
| Regulatory affairs | Manages the relationship with the district and Center, the 506C shortage filing, the regional equivalents, and the format and channel of each submission |

The single most important shared responsibility is the date. Across every one of these reports, the clock starts on receipt or discovery of the information. If intake records that date wrong, or late, every downstream clock is corrupted. Train intake roles to timestamp first receipt deliberately.

---

## A worked example

A QC laboratory reports, on a Thursday, a confirmed out-of-specification sterility failure on lot B-2207 of a licensed cell therapy product. Distribution records show 40 units of the lot shipped to three treatment centers eight days ago; 12 remain in inventory.

**Day zero (Thursday).** The reportability call happens the same day, not after the investigation. The team runs the five questions:

- *FAR?* The product is licensed under a BLA, not an NDA/ANDA, so 314.81 does not apply directly. (If this were an NDA/ANDA drug with a distributed sterility failure, the FAR clock would have started today, due in three working days.)
- *BPDR?* Yes. A licensed biologic, distributed, with an event that plainly may affect safety and purity. The 45-day clock starts today, from discovery. The team records the discovery date prominently.
- *Expedited safety?* Not yet on its own. A failed sterility result is a product-quality event, not an adverse experience. But the team flags to pharmacovigilance to watch the three treatment centers: if any of the 40 administered units is linked to a serious unexpected infection, that becomes a 15-day case, with the clock starting on first receipt of that information.
- *Recall?* Likely. With 40 units already administered or on site at treatment centers and a sterility failure, the recall committee is convened and a health-hazard evaluation is started immediately. If the evaluation finds a risk to health (it will, for a non-sterile parenteral cell therapy), FDA must be notified immediately, in practice within 24 hours of the recall decision.
- *Drug shortage (506C)?* Screen it. If this lot loss or the line stoppage behind it interrupts supply of a covered drug, regulatory affairs and supply chain assess the supply impact and notify FDA as soon as practicable. A small-volume autologous cell therapy may not meet the covered-drug test, but the screen is run and the basis for any "not reportable" call is recorded.

**The next two days.** The recall committee completes the health-hazard evaluation, decides to recall, and the district office is telephoned within 24 hours with the lot, the reason, the distribution, and the proposed strategy (depth: user level, the treatment centers; effectiveness checks at 100 percent given the small distributed quantity). Consignee notifications go out. The 12 in-inventory units are quarantined.

**Within 45 days.** The BPDR is filed via eBPDR with Form FDA 3486, tying together the OOS investigation, the affected lot, the distribution, the safety/purity assessment, and the corrective action, and noting the recall.

**Ongoing.** Pharmacovigilance monitors for adverse experiences in the exposed patients; any serious unexpected case triggers its own 15-day report. Recall status reports continue until the recall is terminated.

One sterility result, started on a Thursday, set three clocks running (BPDR, recall notice, and a watch-and-wait safety trigger), each independent of the others. Had the team treated it as "just an OOS" and waited for the investigation, the 24-hour recall notice and the 45-day BPDR would both have been at risk before anyone realized a clock existed.

---

## Building the system that catches these

The reports are only as good as the routing that feeds them. A few controls separate programs that meet their clocks from programs that explain misses to inspectors:

- **A reportability decision is a mandatory, dated step in deviation, complaint, and OOS closure**, not an optional checkbox. The five questions above belong on the front of the intake form.
- **A single reporting log** lists every report owed, its trigger event, its clock, its due date, and its submission proof, so an inspector (or you) can see at a glance that nothing is open past due.
- **First-receipt dates are captured at the edge**, in the call center and the field, not reconstructed later. This protects the 15-day clock most of all.
- **The complaint system and the safety database reconcile** on a defined cycle, so no patient-harm complaint dies in the wrong system.
- **Proof of submission is retained** for every report: the gateway acknowledgment, the eBPDR confirmation, the FAERS receipt, the dated district-office contact note. An inspector asks for proof you filed on time, not just that you filed.

The acceptance test for the whole system is simple: pick any reportable event from the last two years and reconstruct, from records alone, the trigger, the decision, the clock, the filing, and the proof, without anyone explaining it verbally. If you can do that for every event, your reporting program is inspection-ready. If you cannot, the gap is exactly where a 483 will land.

---

## Interview Q&A angles

**"When does the Field Alert Report clock start, and how long do you have?"** Three working days, and the clock starts on receipt of the information, not on confirmation of the failure. The strong answer adds: that is why you file an initial FAR while the investigation is open, then follow up and finalize. A weak answer says you file after the investigation closes, which is the classic late-FAR mistake.

**"What is the difference between a FAR and a BPDR?"** The FAR is for approved NDA/ANDA drug products under 21 CFR 314.81, triggered by contamination, mix-ups, significant change, or a distributed spec or stability failure, with a three-working-day clock. The BPDR is for licensed biologics under 21 CFR 600.14, triggered by a deviation or unexpected event that may affect safety, purity, or potency of a distributed product, with a 45-calendar-day clock from discovery. The same physical event can owe both.

**"What makes an adverse event a 15-day expedited report?"** It must be serious AND unexpected. Serious is the defined outcome list (death, life-threatening, hospitalization, disability, congenital anomaly, intervention to prevent impairment). Unexpected means not in the current labeling, or more severe or specific than the label. Serious-but-labeled and unexpected-but-non-serious are periodic, not expedited. The clock is 15 calendar days from first receipt anywhere in the company.

**"A complaint comes in describing a patient hospitalized after using the product. Walk me through it."** Capture the complaint, record the date of first receipt as day zero, and immediately route it to pharmacovigilance because it may be a safety case, not only a quality complaint. Assess seriousness (hospitalization, so serious) and expectedness against the label. If serious and unexpected, it is a 15-day expedited case. In parallel, investigate the product-quality side; if the investigation implicates a distributed batch, evaluate FAR or BPDR and a possible recall. The interviewer is testing whether you see that one event can owe several reports and that the complaint must not die in the complaint system.

**"How fast must you notify FDA of a recall?"** 21 CFR 7.46(a) says to notify the district office immediately; the regulation uses the word "immediately" and does not write in a number. FDA's recall procedures and standard firm practice treat that as an initial notice within 24 hours of the recall decision for a recall presenting a risk to health, supported by a documented health-hazard evaluation. The recall strategy then governs how fast you reach the market. A strong answer separates the two clocks (notifying FDA versus executing in the field) and is precise that 24 hours is the practice expectation, not regulation text.

**"How do you make sure a clock is never missed?"** A dated reportability decision built into every deviation, complaint, and OOS closure; a single reporting log with due dates and submission proof; first-receipt dates captured at intake; and periodic reconciliation between the complaint and safety systems. The point is that the clock starts on information received, often before anyone has decided anything, so the system has to notice the start, not just the filing.
