---
title: "Product Complaint Handling: Intake, Investigation, Trending, and Regulatory Reporting"
description: "How to run a compliant product complaint system end to end, from intake and triage through investigation, CAPA linkage, trending, and the interfaces to MDR and pharmacovigilance reporting."
pubDate: 2026-06-20
tags: ["complaints", "quality-assurance", "post-market", "capa", "pharmacovigilance", "mdr", "gmp"]
pillar: "quality-assurance"
tier: "Intermediate"
---

A product complaint is the most direct signal you ever get that something left your control and did not work the way it should. Every other quality input is internal: deviations, OOS results, audit findings. A complaint comes from outside, from a patient, a caregiver, a pharmacist, a hospital, a distributor, or a sales rep, and it carries information you cannot generate any other way. Handle it well and it feeds your CAPA system, your trending, your safety reporting, and your batch disposition decisions. Handle it badly and you get a warning letter, a missed recall trigger, or worse, a harmed patient and an unreported event.

This article covers the full lifecycle: what a complaint is, how to receive and triage it, how to decide complaint versus adverse event, how to investigate, how to link to CAPA, how to trend, and how the complaint file connects to medical device reporting and pharmacovigilance. It is written for someone who has to build, run, or be inspected on a complaint system in a drug, biologic, or device environment.

---

## What a product complaint is and why the system is required

### The regulatory definition

For a drug or biologic, the requirement lives in **21 CFR 211.198**, "Complaint files," within the cGMP for finished pharmaceuticals. It requires written procedures for the handling of all written and oral complaints regarding a drug product, and a written record of each complaint kept on file. For APIs, the parallel expectation is in **ICH Q7, section 15** (Complaints and Recalls). **EU GMP Chapter 8** ("Complaints, Quality Defects and Product Recalls") sets the European expectation and ties complaints explicitly to the recall decision and to root cause analysis.

A clean working definition of a complaint is any written, electronic, or oral communication that alleges deficiencies related to the identity, quality, durability, reliability, safety, effectiveness, or performance of a product after it is released for distribution. That wording is the **21 CFR 820.3(b)** definition, which captures the elements an inspector expects to see regardless of product type.

The quality system standards reinforce this. **ICH Q10 (Pharmaceutical Quality System)** names complaint handling as part of the corrective and preventive action system and the management review inputs. **ISO 13485:2016 clause 8.2.2** requires a documented complaint-handling procedure.

If you also handle combination products or devices, a second set of requirements applies on top of the pharma basis. The device complaint-handling requirement sits at **21 CFR 820.198**, "Complaint files." FDA finalized the **Quality Management System Regulation (QMSR), 21 CFR Part 820**, in February 2024 to align with **ISO 13485:2016**, with the rule taking effect February 2, 2026; under the QMSR the complaint-handling expectations of ISO 13485 clause 8.2.2 are incorporated by reference, so you read the ISO clause and the residual Part 820 sections together. For combination products, expect both the drug cGMP complaint expectations and these device-side ones to apply under the 21 CFR Part 4 framework.

### Why it is required (the risk rationale)

Three reasons, in order of severity:

1. **Patient safety.** A cluster of complaints can be the first visible edge of a defect that is harming people. A complaint about a syringe that will not deliver a full dose, a tablet that crumbles, or an autoinjector that fires early is a safety signal before it is a quality metric. The complaint system is often the fastest path from a field event to a recall decision.
2. **Regulatory reporting obligations.** Certain complaints trigger mandatory reports with hard clocks: medical device reports (MDRs), pharmacovigilance adverse event reports, biological product deviation reports, field alert reports for drugs. If your complaint intake does not flag these, you miss a legal deadline. That is one of the most common and most serious findings inspectors write.
3. **Continuous improvement and state of control.** Complaint trends tell you whether your process is drifting, whether a supplier change degraded quality, or whether a design weakness keeps surfacing. This feeds CAPA, annual product review, and management review.

> EU GMP Chapter 8 (clause 8.1) makes the point directly: apply quality risk management to how you investigate and assess quality defects, and to the decisions that follow, recalls, corrective and preventive actions, and any other action taken to reduce risk.

---

## Roles and responsibilities

Build the RACI before you build the workflow. A complaint touches more functions than almost any other quality record.

| Role | Responsibility |
|------|----------------|
| Complaint intake / customer service | First point of contact. Capture the complaint verbatim, get reporter and product details, assign the complaint number, do not editorialize or downgrade. |
| Complaint coordinator / handler (QA) | Owns the file. Triages, classifies, drives the investigation, ensures the reportability decision is made and documented, closes within timeline. |
| Pharmacovigilance / drug safety (drugs/biologics) | Receives any complaint with an associated adverse event, owns the ICSR and expedited reporting clock. |
| Regulatory affairs | Owns MDR (device), field alert report (drug), biological product deviation report submissions and content. |
| QC laboratory | Tests returned/retained samples, confirms or rules out the alleged defect against specification. |
| Manufacturing / process SME | Provides batch record context, assesses whether the defect is plausible given the process. |
| Medical / clinical assessor | Performs the medical assessment of seriousness and causality for adverse events. |
| CAPA owner | Drives root cause and corrective action when the investigation escalates to CAPA. |
| Qualified Person (EU) / quality head | Informed of quality defects affecting released batches; involved in recall decisions. |
| Management review | Receives complaint trends and metrics; allocates resources. |

The single most important separation: the person who receives the complaint should not be the person who unilaterally decides it is "not a real complaint." Intake captures; QA triages. Combining those roles is how genuine complaints get filtered out before anyone qualified sees them.

---

## Intake: receiving and recording

### What goes in a complaint record (the fields)

Your intake form, paper or electronic, should capture enough that someone who never spoke to the reporter can investigate. Minimum fields:

| Field | Why it matters |
|-------|----------------|
| Unique complaint number | Traceability, trending, audit retrieval. Assign at first contact. |
| Date received and date of event | Starts the reporting clock; the event date may predate receipt. |
| Source / reporter type | Patient, HCP, pharmacist, distributor, sales rep, internal. Drives reportability and follow-up rights. |
| Reporter contact details | Needed for follow-up; for AEs, a contactable reporter is part of a valid case. |
| Product name, strength, presentation | Identifies the product and the relevant specification. |
| Batch / lot number | Links to the batch record, retained samples, and other complaints on the same lot. Push hard to obtain it. |
| Expiry date | Storage/age relevance; confirms product authenticity. |
| Quantity affected | Severity and trend signal. |
| Verbatim complaint description | Capture exactly what was said. Do not paraphrase into "tablet defect." |
| Any patient harm / adverse event | The single most important triage field. Triggers the AE/MDR branch. |
| Sample available for return | Determines whether laboratory confirmation is possible. |
| Reporter's requested action | Replacement, refund, information. Helps but does not drive the investigation. |

For an oral complaint, write it down at the moment of the call. 21 CFR 211.198 explicitly covers oral complaints, and "we didn't write it down because it was a phone call" is not a defense.

### The intake procedure, step by step

1. **Receive and record verbatim.** Capture what the reporter actually said before asking structured questions, so you do not bias the description.
2. **Assign the complaint number** immediately and confirm the product is yours (right name, plausible lot and expiry).
3. **Screen for an adverse event in the same breath.** The first question after "what happened to the product" must be "did anything happen to the patient." This determines whether a safety clock starts today.
4. **Capture lot, expiry, and sample availability.** If a sample can be returned, arrange it now; physical evidence is the difference between a confirmed and an inconclusive investigation.
5. **Acknowledge to the reporter** per your procedure (many companies acknowledge receipt within a defined number of business days).
6. **Route to QA triage** with a complete record. Do not let intake staff close or dismiss a complaint.

### Acceptance criteria for good intake

- Every contact alleging a product deficiency is recorded as a complaint, even if you suspect it is user error or unfounded. The investigation decides that, not intake.
- The adverse event question is asked and answered on every intake, and the answer is documented.
- Verbatim text is preserved; the structured fields supplement it, they do not replace it.
- No complaint is "pre-screened out" before it gets a number.

---

## Triage and classification

Triage is where the complaint gets a severity, a reportability assessment, and a timeline. Get this wrong and everything downstream is wrong.

### Two decisions that happen here

**Decision 1: Is this a complaint at all?** Distinguish a true product complaint from a non-complaint inquiry (a question about how to store the product, a pricing query, a request for a CoA). When in doubt, log it as a complaint. Under-logging is the finding inspectors write; over-logging is merely extra work. See [quality event classification and triage](/articles/quality-event-classification-triage) for the broader event-triage logic.

**Decision 2: Does this complaint involve patient harm?** This is the complaint-versus-adverse-event fork, covered in its own section below. It is the highest-stakes decision in the whole process because it starts regulatory clocks.

### Classifying severity

A typical three-tier model:

| Tier | Definition | Typical handling |
|------|-----------|------------------|
| Critical | Potential for serious harm or death; or a defect that could trigger recall (wrong product, wrong strength, sterility risk, missing/illegible critical label info). | Immediate escalation to QA head and safety; expedited investigation; recall assessment. |
| Major | Defect affecting quality or efficacy without immediate serious-harm potential (subpotency risk, significant cosmetic/functional defect, packaging fault). | Full investigation; trend watch; possible CAPA. |
| Minor | Cosmetic or non-functional issue with no quality/safety impact (minor print smudge, carton scuff). | Documented and trended; lighter investigation. |

Anchor the tiers to defect types in your procedure with examples, so two coordinators classify the same complaint the same way. Inconsistent classification is itself an inspection finding because it corrupts your trending.

### Acceptance criteria for triage

- Severity and reportability are both assessed and documented for every complaint, with a rationale, not just a checkbox.
- Critical complaints reach the quality head and the recall/safety decision-makers within hours, not days.
- Classification is reproducible: the same facts yield the same tier regardless of who triages.

---

## Complaint versus adverse event: the fork that starts the clocks

This is the part interviewers probe hardest and the part inspectors cite most, so treat it as its own discipline.

### The concept

A **product quality complaint** alleges something wrong with the product (it was cracked, discolored, subpotent, mislabeled). An **adverse event (AE)** is an undesirable medical occurrence in a patient associated with the use of the product, whether or not it is considered related. The two are not mutually exclusive. A single phone call can be both: "the autoinjector jammed (quality complaint) and my mother went into anaphylaxis because she did not get her dose (adverse event)."

The rule of practice: **screen every complaint for an associated AE, and route any AE to the safety/PV function in parallel, do not make the quality investigation a precondition for the safety report.** The safety clock does not wait for your laboratory result.

### The regulatory clocks you must not miss

**Drugs and biologics, post-marketing AEs (US):** governed by **21 CFR 314.80** (drugs) and **21 CFR 600.80** (biologics). A serious and unexpected adverse drug experience must be reported as a **15-day "alert report" (expedited)**. Non-serious events are summarized in periodic safety reports. "Serious" has a regulatory definition: death, life-threatening, hospitalization or prolongation of it, persistent or significant disability/incapacity, congenital anomaly, or an important medical event requiring intervention to prevent one of these (per **ICH E2A**). The international standard for case format is the **ICSR (Individual Case Safety Report)**, exchanged in **ICH E2B(R3)**.

**EU pharmacovigilance:** Directive 2001/83/EC and Regulation (EU) No 1235/2010, operationalized through the **Good Pharmacovigilance Practices (GVP) modules**. Serious cases are reported within 15 days, non-serious within 90 days, submitted to EudraVigilance.

**Medical device reports (US):** **21 CFR Part 803**. A manufacturer must submit an MDR when it becomes aware of information suggesting one of its devices may have caused or contributed to a death or serious injury, or has malfunctioned and would be likely to cause or contribute to a death or serious injury if the malfunction recurred. The standard clock is **30 calendar days** from becoming aware; **5 working days** for events requiring remedial action to prevent unreasonable risk of substantial harm, or when FDA has made a written request.

**EU device vigilance:** **EU MDR 2017/745**, Articles 87-92. Serious incidents are reported to the competent authority; the outer clock is 15 days, shortened to 10 days for serious public health threats and 2 days for death or unanticipated serious deterioration in health.

**Field Alert Report (US drugs):** **21 CFR 314.81(b)(1)** requires a Field Alert Report within **3 working days** of receiving information about certain product or labeling problems, for example a distributed batch failing to meet specification or any bacteriological contamination or significant chemical/physical change.

**Biological Product Deviation Report (US):** **21 CFR 600.14** requires reporting deviations affecting safety, purity, or potency of a distributed biological product, generally within 45 calendar days.

> A practical rule for the desk: the moment a complaint mentions any patient outcome, treat the safety/reporting clock as already running from the date of awareness, and start the parallel safety assessment the same day. You can always close a report out as non-reportable with documented rationale. You cannot recover a missed deadline.

### Worked example of the fork

A pharmacist calls: a vial of lyophilized biologic "looked cloudy after reconstitution" and the patient who received it "developed a fever and chills within the hour."

- **Quality branch:** complaint logged, critical tier (cloudiness in a sterile biologic implies a possible sterility/particulate/degradation issue). Retained samples pulled, returned vial requested, batch record and EM data reviewed, sterility and appearance retest considered. Recall assessment opened because a distributed lot may be affected.
- **Safety branch (parallel, same day):** fever and chills post-administration is an adverse event. PV opens an ICSR, assesses seriousness (did it require intervention or hospitalization?), assesses causality, and starts the 15-day clock if serious and unexpected. Regulatory affairs evaluates whether a Field Alert Report is triggered by the appearance/possible contamination issue (3 working days) and whether a Biological Product Deviation Report applies.

One call, three potential regulatory clocks, two parallel investigations, one linked file. If intake had logged only "cosmetic appearance complaint" and never asked about the patient, every one of those clocks would have been missed.

See [pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity) for the reporting mechanics on the safety side, and your device vigilance and MDR procedures for the device side if you handle combination products.

---

## Investigation

### What an investigation has to establish

The investigation answers four questions:

1. **Is the complaint valid?** Did the alleged defect actually occur, or is it user error, a perception issue, or a misidentified product?
2. **Is it confirmed?** Can you reproduce or physically confirm the defect (ideally with the returned sample tested against specification)?
3. **What is the root cause?** If confirmed, why did it happen?
4. **What is the impact?** Is the rest of the lot affected? Other lots? Is a recall or field action needed?

### Step-by-step procedure

1. **Assemble the file.** Pull the batch record, CoA, retained/reserve samples, prior complaints on the same lot and same defect type, relevant deviations, and EM/process data if relevant. A complaint never gets investigated in isolation from its batch history.
2. **Examine the returned sample** if available. Document its condition on receipt with photographs. Confirm identity (right product, right lot) before testing.
3. **Test against specification.** Have QC run the relevant test(s). The key comparison is "does the returned unit meet the original release specification." If it fails, you likely have a confirmed defect; if it passes, the defect may be handling-related, perceptual, or non-reproducible.
4. **Review the batch record and process** for any deviation, OOS, or marginal result that correlates with the defect. Link to the [deviation management](/articles/deviation-management) and [OOS investigation](/articles/oos-investigation-process) records if they exist.
5. **Check for a cluster.** Query the complaint database: same lot, same defect, rising rate. A single complaint is an anecdote; three on one lot is a signal.
6. **Determine root cause** using a structured method (5 Whys, fishbone, fault tree) proportionate to severity. See [root cause analysis techniques](/articles/root-cause-analysis-techniques).
7. **Assess product impact and the need for field action.** If the defect could affect the distributed lot and presents risk, escalate to the recall decision process. See [recall management and field actions](/articles/recall-management-field-actions).
8. **Document the conclusion**: confirmed/unconfirmed, root cause (or why none could be determined), impact assessment, reportability decision, and CAPA decision.
9. **Communicate the outcome** to the reporter per your procedure, without disclosing confidential investigation detail.
10. **Close** within the procedural timeline, or document a justified extension.

### The "could not confirm" trap

Many returned samples test within specification, or no sample is returned at all. "Could not confirm, no further action" is a legitimate outcome, but it is also the lazy default that inspectors hunt for. Rules to stay honest:

- "No sample returned" does not equal "no investigation." You still review the batch record, check for clusters, and assess plausibility.
- An unconfirmed complaint still gets trended. A pattern of unconfirmed-but-recurring complaints on the same defect is itself a confirmed signal.
- If you keep concluding "patient handling error," ask whether the product, labeling, or instructions for use are too easy to get wrong. Recurrent "use error" is often a design or labeling problem, not a patient problem.

### Acceptance criteria for a good investigation

- Depth is proportionate to risk: a critical complaint gets a documented root cause; a minor cosmetic one may not need full RCA, but the proportionality decision is recorded.
- The conclusion is supported by evidence in the file, not by assertion.
- Batch impact and field-action need are explicitly assessed, even when the answer is "none."
- The reportability decision and its rationale are in the file.
- The investigation closed within timeline, or the extension is justified and approved.

---

## CAPA linkage

Not every complaint becomes a CAPA, and forcing one-to-one linkage drowns your CAPA system in noise. The discipline is knowing when to escalate.

### When a complaint should trigger CAPA

- A confirmed defect with an identified, correctable root cause.
- A trend: the same defect crossing a defined complaint-rate threshold (see trending below).
- Any critical/safety complaint, even a single one.
- A complaint that exposes a systemic gap (a labeling ambiguity, an instructions-for-use weakness, a supplier issue).

A single minor, unconfirmed, non-recurring complaint usually does not need a standalone CAPA. It gets documented and trended, and the trend is what triggers CAPA if it materializes.

### How the linkage works

The complaint record references the CAPA number; the CAPA record references the originating complaint(s). When a CAPA is born from a trend, it should link all the contributing complaints so effectiveness can be measured against that population. The corrective action addresses the immediate problem; the preventive action addresses recurrence. CAPA effectiveness verification then checks whether complaint rates for that defect actually dropped after the action. See [what is a CAPA](/articles/what-is-a-capa) and [CAPA effectiveness verification](/articles/capa-effectiveness-verification).

### Worked CAPA-trend example

| Lot | Complaints (cracked tablet) | Units distributed | Rate (per 100k) |
|-----|----------------------------|-------------------|-----------------|
| A-2231 | 2 | 480,000 | 0.42 |
| A-2245 | 3 | 510,000 | 0.59 |
| A-2260 | 11 | 495,000 | 2.22 |
| A-2274 | 14 | 520,000 | 2.69 |

The baseline cracked-tablet rate sits below 0.6 per 100k. Starting at lot A-2260 it jumps roughly 4x and holds. That is a trend signal, not noise. It triggers a CAPA: investigation finds a tablet hardness drift after a press tooling change, root cause is inadequate change control on the tooling, corrective action is re-qualification of the press, preventive action is adding hardness to the in-process monitoring trigger list. Effectiveness verification then watches subsequent lots to confirm the rate returns to baseline. Note the CAPA was driven by the trend, not by any one of the 14 complaints being individually alarming.

---

## Trending

### Why trending is mandatory, not optional

EU GMP Chapter 8 and ICH Q10 both expect complaint data to be reviewed for trends, and **21 CFR 211.198** requires that complaint records be reviewed to determine whether the complaint represents a serious and unexpected problem requiring an FDA report. The deeper point: individual complaints often look benign, and only the aggregate reveals the defect. Trending is how you convert a stream of anecdotes into a quality signal.

### What to trend and how

Trend by meaningful dimensions, not just total count:

- **By defect type** (cracked, discolored, subpotent, mislabeled, device malfunction code).
- **By lot/batch**, to localize a manufacturing excursion.
- **By product and presentation.**
- **By rate, normalized to units distributed**, not raw count. Raw counts rise with sales volume and hide real changes. The cracked-tablet table above only works because it is normalized per 100k.
- **By time**, to see drift.

Set defined trend thresholds in advance (statistical control limits, or a multiple of historical baseline) so the trigger is objective. "We will review trends and use judgment" is not a procedure an inspector accepts. Tie the statistics to your broader [statistics in quality, Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts) approach where appropriate.

### Where the trend goes

Complaint trends are a required input to the **Annual Product Review / Product Quality Review** (the APR/PQR summarizes complaints and recalls for the year) and to **management review** under ICH Q10 and ISO 13485. The flow is: trend detected, threshold crossed, CAPA opened, results fed to APR and management review. See [annual product review and PQR](/articles/annual-product-review-pqr), [management review under Q10](/articles/management-review-q10), and [quality metrics and KPIs](/articles/quality-metrics-and-kpis).

### Acceptance criteria for trending

- Trending is periodic and documented (typically monthly or quarterly, plus the annual APR roll-up).
- Rates are normalized to volume.
- Thresholds are pre-defined and objective.
- A crossed threshold demonstrably triggers an investigation or CAPA, and you can show that linkage in the records.

---

## The complaint file and recordkeeping

### What the file must contain

Per 21 CFR 211.198(b) and 820.198, the complaint file should let any reviewer reconstruct the entire history. Each record should include:

- The complaint number, dates, and reporter/source.
- The name and strength/presentation of the product and the lot number.
- The nature of the complaint (verbatim plus classification).
- Whether the complaint was investigated, and if not, the reason and the name of the responsible person who decided no investigation was needed (820.198 specifically requires this justification).
- The findings of the investigation and any follow-up.
- The reportability decision and any report submitted (MDR, FAR, ICSR) with reference numbers.
- Any CAPA reference.
- The reply to the complainant, if any.

### Retention and location

Retention follows the applicable record-retention rule (drugs: one year past expiry or one year past the last distribution date under 21 CFR 211.180; devices and clinical contexts have their own minimums). Files must be readily retrievable for inspection. If complaints are handled at a location other than the manufacturing site, the regulations require that the records be reasonably accessible at the manufacturing establishment.

### Data integrity expectations

The complaint record is a GxP record and is subject to **ALCOA+** (attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available). The verbatim capture must be contemporaneous; changes must be tracked with an audit trail in an electronic system; reportability decisions must be attributable to a named, qualified person. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations). If you run complaints in a validated electronic complaint-handling system, it falls under [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).

---

## Common mistakes and inspection-finding patterns

These are the patterns regulators cite repeatedly. None of them name a company; they are the generic failure modes.

1. **Complaints filtered out at intake.** Customer service decides a complaint is "not really a complaint" and never logs it. The fix is structural: intake captures, QA decides.
2. **No adverse event screening.** The complaint is handled purely as a quality issue and the associated patient harm is never routed to safety, so the expedited report is missed. This is among the most serious findings because it is a missed legal deadline tied to patient safety.
3. **Investigations not performed or not justified.** For devices, 820.198 requires that any complaint involving a possible failure to meet specifications be investigated, and any decision not to investigate must be documented with a justification and a responsible name. "No investigation" with no rationale is a frequent citation.
4. **"Could not confirm" used as a closure shortcut.** Returned sample passes, file closed, no batch review, no trend check.
5. **No trending, or trending by raw count.** The data is never aggregated, or it is aggregated without normalizing to distribution volume, so a real rate increase is masked by sales growth.
6. **Trends not acted on.** A threshold is crossed and nothing happens, because the link from trend to CAPA was never built or never enforced.
7. **Reportability decisions undocumented.** A report was or was not filed, but the rationale and the decision-maker are not in the file, so an inspector cannot tell whether the decision was sound or even made.
8. **Timeliness failures.** Complaints sit open for months past the procedural target with no justified extension; or reports are filed late.
9. **Classification inconsistency.** The same defect gets logged as "minor" by one handler and "major" by another, corrupting the trend data.
10. **Disconnected systems.** Complaints, deviations, CAPA, and safety run in separate systems that do not cross-reference, so the same defect is investigated three times and the connections are invisible.

---

## Interview-ready: questions and how to answer them

**Q: Define a product complaint.**
Use the 820.3 definition: any communication, written, electronic, or oral, alleging deficiencies in identity, quality, durability, reliability, safety, effectiveness, or performance of a distributed product. Add that the drug requirement is 211.198 and it explicitly covers oral complaints.

**Q: A customer reports a cracked tablet and says they felt dizzy after taking it. Walk me through it.**
Log it as a complaint and screen for the AE in the same intake. Route the dizziness to pharmacovigilance in parallel; assess seriousness against the ICH E2A criteria and start the 15-day clock if it is serious and unexpected. Run the quality investigation on the crack: pull retained samples, request the returned tablet, test against specification, check the batch record and other complaints on the lot. Assess batch impact and whether a Field Alert Report (3 working days under 314.81) applies. Document both the reportability decision and the quality conclusion. The key thing the interviewer wants: you started the safety clock immediately and did not wait for the lab.

**Q: What is the difference between a complaint and an adverse event, and can something be both?**
A complaint is about the product; an AE is about the patient. They are independent and frequently coincide. The discipline is to screen every complaint for an AE and route any AE to safety on a separate, faster clock.

**Q: When does a device complaint become an MDR?**
Under 21 CFR Part 803, when you become aware of information suggesting your device may have caused or contributed to a death or serious injury, or malfunctioned in a way that would likely cause or contribute to a death or serious injury if it recurred. Standard reporting is 30 calendar days; 5 working days for events needing remedial action or on FDA written request.

**Q: How do you decide whether a complaint needs a CAPA?**
Not one-to-one. Escalate to CAPA on a confirmed correctable root cause, any critical/safety complaint, a trend crossing a pre-defined threshold, or a systemic gap. A single minor unconfirmed complaint is documented and trended; the trend is what triggers CAPA.

**Q: How do you trend complaints, and why normalize to volume?**
Trend by defect type, lot, product, and time, with the rate normalized per units distributed. Without normalization, complaint counts rise with sales and you cannot tell a real defect-rate increase from a volume increase. Thresholds are pre-defined so the trigger is objective, and crossing one feeds the APR/PQR and management review.

**Q: An inspector asks why a complaint was closed without investigation. What do they expect to see?**
A documented justification and the name of the responsible person who made the decision, per 820.198. "No investigation" with no recorded rationale is a finding.

**Q: What records must the complaint file contain?**
Complaint number and dates, reporter, product and lot, verbatim nature, whether investigated (and justification if not), investigation findings, reportability decision and any report numbers, CAPA reference, and the reply to the complainant. Retrievable for inspection and reasonably accessible at the manufacturing site.

---

## Practical tips

- **Make the AE question the second thing intake asks, never the last.** Wire it into the form so it cannot be skipped.
- **Treat the clock as running from the date of awareness, not from the date you "confirm" the issue.** Awareness starts the obligation.
- **Push for the lot number every time.** Without it you cannot link to the batch record, retained samples, or the cluster on that lot. A complaint with no lot number is half-blind.
- **Photograph returned samples on receipt, before anyone handles them.** Condition on arrival is evidence.
- **Pre-define trend thresholds and review cadence in the SOP.** Judgment-based trending fails inspections.
- **Cross-reference, do not duplicate.** One defect should generate one investigation that the complaint, deviation, CAPA, and safety records all point to.
- **Audit your "could not confirm" and "user error" closures quarterly.** A rising pile of either is usually hiding a real defect or a design/labeling weakness.
- **Keep the complaint coordinator independent of sales and customer service incentives.** The person who owns the file should have no reason to downgrade a complaint.

### Related reading

- [Quality event classification and triage](/articles/quality-event-classification-triage)
- [Deviation management](/articles/deviation-management)
- [What is a CAPA](/articles/what-is-a-capa) and [CAPA effectiveness verification](/articles/capa-effectiveness-verification)
- [Root cause analysis techniques](/articles/root-cause-analysis-techniques)
- [Recall management and field actions](/articles/recall-management-field-actions)
- [Pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity)
- [Annual product review and PQR](/articles/annual-product-review-pqr)
- [Management review under Q10](/articles/management-review-q10)
- [Pharmaceutical quality system](/articles/pharmaceutical-quality-system)
