---
title: "Recalls and Field Alerts: Classification, Execution, and Effectiveness"
description: "How drug and biologic recalls are classified, executed, and verified, covering Class I/II/III decisions, FDA notification timelines, mock recalls, reconciliation, effectiveness checks, and field alert reports."
pubDate: 2026-06-20
tags: ["recall", "field alert report", "quality assurance", "post-market", "gmp", "product complaints", "regulatory"]
pillar: "quality-assurance"
tier: "Advanced"
---

A recall is the most visible thing a quality system ever does. Everything else happens behind the firewall of the site. A recall puts your decisions in front of distributors, pharmacies, hospitals, patients, and a regulator who is watching how fast you move and how well you account for every unit. By the time you are running one, the defect already exists. What you control is speed, completeness, and proof. This page covers how recalls and related field actions are classified, decided, executed, reconciled, and verified, for drugs and biologics under US FDA rules, with the cross-references to complaints, deviations, and CAPA that make the system actually work.

The vocabulary matters and people get it wrong in interviews. A **recall** is a firm's removal or correction of a marketed product that the FDA considers to be in violation of the laws it administers. A **market withdrawal** is removal or correction of a product for a minor issue that would not be subject to legal action by FDA, or no violation at all (for example, normal stock rotation, or a tamper that is not a manufacturing defect). A **stock recovery** is retrieval of product that has not yet left the firm's control. A **field alert report (FAR)** is a specific NDA/ANDA holder notification to FDA, separate from a recall, that can precede or accompany one. A **medical device correction or removal** is governed by a different rule (21 CFR Part 806) and a device "recall" is defined under 21 CFR Part 7 and Part 810. Use the right word for the right situation.

---

## The regulatory basis

### 21 CFR Part 7, Subpart C (Recalls)

The governing framework for FDA recalls is **21 CFR Part 7, Subpart C, "Recalls (Including Product Corrections), Guidelines on Policy, Procedures, and Industry Responsibilities."** It defines recall, market withdrawal, stock recovery, correction, and recall classification (Class I/II/III). It describes both FDA-requested recalls and voluntary recalls, the recall strategy, the elements of effectiveness checks, recall communications, and recall termination.

Key definitions to know cold, from 21 CFR 7.3:

> Recall means a firm's removal or correction of a marketed product that the Food and Drug Administration considers to be in violation of the laws it administers and against which the agency would initiate legal action, e.g., seizure. Recall does not include a market withdrawal or a stock recovery.

> Correction means repair, modification, adjustment, relabeling, destruction, or inspection (including patient monitoring) of a product without its physical removal to some other location.

Most drug recalls are **voluntary**, initiated by the firm, sometimes after a conversation with FDA. FDA gained mandatory recall authority for drugs only in narrow circumstances; the general drug recall remains a voluntary action in the Part 7 sense, which does not mean optional. If a firm declines to recall a violative product, FDA can pursue seizure, injunction, and public warning. For certain product categories FDA holds explicit mandatory recall authority (for example, medical devices under section 518(e) of the Food, Drug, and Cosmetic Act, and human cells/tissues, infant formula, tobacco, and food under FSMA). Know which authority applies to your product.

### 21 CFR 314.81(b)(1) (NDA Field Alert Report)

Field alert reports for finished drug products are required by **21 CFR 314.81(b)(1), "Other postmarketing reports,"** which applies to applicants holding an approved NDA or ANDA. The FAR is a fast early-warning mechanism. It is triggered by information concerning any incident that causes the drug product or its labeling to be mistaken for, or applied to, another article, and by information concerning any bacteriological contamination, any significant chemical, physical, or other change or deterioration in the distributed drug product, or any failure of one or more distributed batches to meet the specification established for it in the application.

The FAR is due to the local FDA district office **within 3 working days** of receipt of the information. It is a notification, not a conclusion. You file on a credible signal, not after the investigation closes.

### 21 CFR 600.14 (Biological Product Deviation Reports)

For licensed biologics, **21 CFR 600.14, "Reporting of biological product deviations by licensed manufacturers,"** requires reporting of events that represent a deviation from cGMP, applicable regulations, standards, or established specifications that may affect safety, purity, or potency, for distributed product. The biological product deviation report (BPDR) is due **within 45 calendar days** of discovery. A parallel requirement for unlicensed registered manufacturers sits at 21 CFR 606.171 for blood and blood components.

### Drug shortage notification, 21 CFR 314.81(b)(3)(iii)

A recall or a manufacturing interruption can trigger a separate obligation: notification of a permanent discontinuance or interruption in manufacturing of certain drugs under section 506C of the FD&C Act, implemented at 21 CFR 314.81(b)(3)(iii). If pulling product creates a shortage of a medically necessary drug, that notification clock runs in parallel and is frequently forgotten.

### Other corners to know

- **EU GMP:** EudraLex Volume 4, Part I, Chapter 8 ("Complaints, Quality Defects and Product Recalls") sets the EU expectation, supported by the GMDP rapid alert system and reporting to national competent authorities. The expectation that recalls can be initiated promptly and that a recall procedure is regularly evaluated by mock recall is explicit there.
- **WHO** publishes recall guidance in its GMP and distribution texts for markets that follow WHO standards.
- **DSCSA** (21 CFR and the Drug Supply Chain Security Act) changes how you trace and locate product at the unit and saleable-return level, which directly affects how fast you can find distributed lots in a recall.

Cross-link: see [21 CFR 210/211 walkthrough](/articles/cfr-210-211-cgmp-walkthrough) for the cGMP backbone, and [what is GMP](/articles/what-is-gmp) for the framing.

---

## Recall classification: Class I, II, III

FDA, not the firm, assigns the recall class once the recall is reported, but you must be able to recommend a class and defend it. Classification is a health-hazard judgment about the consequences of using or being exposed to the violative product. It drives the recall depth, the urgency, the communication, and the effectiveness check coverage.

| Class | Definition (21 CFR 7.3) | Plain meaning | Typical drug examples |
|-------|--------------------------|---------------|------------------------|
| Class I | Reasonable probability that use or exposure will cause serious adverse health consequences or death | Could seriously hurt or kill | Microbial contamination of a sterile injectable, wrong active ingredient, label/product mix-up of a high-risk drug, life-threatening superpotency |
| Class II | Use or exposure may cause temporary or medically reversible adverse health consequences, or the probability of serious consequences is remote | Could cause reversible harm or unlikely serious harm | Subpotency of a non-life-threatening drug, minor label error not affecting critical dosing, dissolution failure with limited clinical impact |
| Class III | Use or exposure is not likely to cause adverse health consequences | Violative but low health risk | Minor cosmetic defect, container/closure issue with no contamination, off-specification appearance, certain labeling typos |

The mechanism FDA uses is a **Health Hazard Evaluation (HHE)**, performed by an FDA committee, that weighs whether the population already exposed is at risk, the seriousness of the hazard, the probability of occurrence, the consequences (immediate or long-range), and vulnerable subpopulations (children, the elderly, the immunocompromised). Your internal HHE should mirror those factors so your recommended class survives FDA's review.

### How to reason about class, with examples

A worked example. A sterile ophthalmic solution batch shows a failed container-closure integrity result on a small number of stability units after distribution. Sterile route, eye, potential for serious eye infection, vulnerable use. That points to Class I or high Class II. Compare a film-coated tablet for a chronic non-critical condition that shows a single dissolution result slightly out of specification at the 12-month station with the drug still demonstrably absorbed. Reversible, limited clinical impact, that points to Class II or III. The driver is always clinical consequence to the exposed patient, not how embarrassing the defect is.

A second example with a numeric flavor. Suppose assay drifts and a batch of a narrow-therapeutic-index drug is found at 118 percent of label, where the specification is 90.0 to 110.0 percent. Superpotency of a narrow-therapeutic-index drug is a dosing hazard, which pushes toward Class I or strong Class II depending on the margin and the indication. The same 118 percent on a wide-margin vitamin is a different conversation. The number alone does not set the class; the number plus the clinical margin does.

---

## Recall depth: how far down the chain

Classification tells you how bad; **recall depth** tells you how far to reach into the distribution chain. Part 7 frames three depths:

- **Consumer or user level**, the deepest, reaching the patient, the dispensing pharmacy, or the using clinician.
- **Retail level**, reaching pharmacies, hospitals, and dispensers but not individual patients.
- **Wholesale level**, reaching distributors and wholesalers only.

Depth is a function of class and of where the risk lives. A Class I sterile injectable almost always goes to the user level (hospital pharmacy, clinic, in some cases the patient). A Class III cosmetic defect on a tablet might stop at wholesale. Set depth in the recall strategy and be ready to justify it. Going too shallow is the classic finding; going deeper than necessary wastes effort and erodes credibility but is the safer error.

---

## The recall decision: from signal to launch

A recall does not start with the recall. It starts with a signal, usually a complaint, a deviation, an out-of-specification result, a stability failure, or a regulatory finding. The discipline is in how fast that signal is escalated and how the decision is made and documented.

### Step 1: Capture and escalate the signal

Signals arrive through several doors:

- A **product complaint** (see [product complaint handling](/articles/product-complaint-handling)) reporting a defect, foreign matter, lack of effect, or adverse event.
- A **deviation or investigation** (see [deviation management](/articles/deviation-management)) that, on review, casts doubt on distributed product.
- An **OOS or OOT** result on a retain or stability sample (see [OOS investigation process](/articles/oos-investigation-process) and [out-of-trend investigations](/articles/out-of-trend-investigations)).
- A **stability program** signal at a pull point (see [stability programs ICH](/articles/stability-programs-ich)).
- A **regulatory or supplier** notification, including a supplier recall of an API or component that you used.

The non-negotiable: any signal that questions the safety, identity, strength, quality, or purity of **distributed** product must be escalated to QA and to the recall decision body immediately, not after the investigation finishes. The FAR clock (3 working days) and BPDR clock (45 days) start at receipt of the information, not at the end of root cause analysis.

### Step 2: Stand up the recall committee and run the health hazard evaluation

Convene the standing recall committee. Perform an internal HHE that mirrors the FDA factors: severity of the hazard, probability of occurrence, exposed population and vulnerable subgroups, immediate and long-range consequences, and whether the hazard is detectable or self-limiting. Document a recommended class. Pull the data needed to bound the problem: which batches, how many units, where they went, what is still in your control, and whether the defect is confined or systemic.

### Step 3: Decide the field action and its scope

Decide, on the record:

- Is this a **recall**, a **market withdrawal**, a **stock recovery**, or **no action**? Apply the Part 7 definitions, not convenience.
- **Lot scope.** Is it one batch, a campaign, or all lots within expiry? Define the inclusion rule (for example, "all lots of product X manufactured between date A and date B on line L"). Resist the urge to under-scope; expanding a recall later is far worse than scoping correctly the first time.
- **Recall depth.** Consumer, retail, or wholesale.
- **Reason statement.** One or two plain sentences a pharmacist can act on, no jargon.

### Step 4: Notify FDA and file the required reports

Contact the FDA recall coordinator at the responsible district and the relevant Center (CDER for drugs, CBER for biologics). Provide the recall information that Part 7 expects: identity of the product, codes/lot numbers, reason, health hazard assessment, quantity produced and distributed and the time span, distribution pattern, your recall strategy, and proposed communications. In parallel, file the **FAR** within 3 working days if an NDA/ANDA product is involved, and the **BPDR** within 45 days if a licensed biologic is involved. If a shortage of a medically necessary drug may result, trigger the 506C notification.

### Step 5: Issue recall communications

Issue the recall notification to your direct accounts (the firms you shipped to) per the recall strategy. A Class I recall is normally accompanied by a press release and may use Urgent Drug Recall letters and, where appropriate, public notification.

---

## The recall strategy and the elements that go in it

Part 7 expects a documented **recall strategy**. Whether FDA-reviewed or firm-prepared, it should state every operational element. Build it as a template so you are not authoring it from scratch under pressure.

### Contents of a recall strategy

| Element | What goes in it |
|---------|------------------|
| Recall classification | Recommended Class I/II/III with the HHE basis |
| Recall depth | Consumer/user, retail, or wholesale, with rationale |
| Public warning | Whether a press release or public notice is needed (typical for Class I) and the channel |
| Effectiveness checks | Level A through E (see below) and the method (visit, phone, letter, or no checks) |
| Product identification | Names, NDC, lot/control numbers, expiry, configurations, images |
| Reason and hazard statement | Plain-language defect description and health hazard |
| Quantity and distribution | Amount produced, distributed, time span, geography, account types |
| Instructions to accounts | Quarantine, stop use, return or destroy, sub-recall instructions to their customers |
| Disposition | Return, destroy in place with certification, or correct in place |
| Recall communications | Letter templates, response forms, contact for the recall coordinator |
| Reconciliation plan | How returned/accounted units will be tracked against distributed |
| Termination criteria | The threshold for requesting recall termination |

### Effectiveness check levels

The recall communication and effectiveness checks have defined coverage levels in Part 7:

| Level | Coverage of accounts contacted/verified |
|-------|------------------------------------------|
| Level A | 100 percent of the total number of consignees |
| Level B | Some percentage of consignees, between A and C |
| Level C | 10 percent of consignees |
| Level D | 2 percent of consignees |
| Level E | No effectiveness checks |

A Class I recall typically requires Level A or B. The level is part of the strategy and FDA may push you up a level. The purpose of effectiveness checks is to confirm that consignees received the notice, understood it, and took the requested action. It is not enough to mail letters; you must verify action.

---

## Recall communications: the recall letter

The recall notification letter to consignees is a controlled document. It should be conspicuous (Class I letters are often on red-bordered paper or marked "URGENT DRUG RECALL"), brief, and unambiguous.

### What goes in a recall letter

- Clear identification: product name, strength, NDC, affected lot/control numbers, expiry, package size.
- A plain statement that it is a recall and the recall class if known.
- The reason for the recall and the health hazard in language the recipient can act on.
- Specific instructions: stop distribution and use immediately, quarantine affected stock, and (for distributors) notify their own customers (the sub-recall).
- A response/business reply form so the consignee can report quantity on hand, quantity already dispensed, and the action taken, even a "zero on hand" response.
- Disposition instructions: return for credit, or destroy with a destruction certificate.
- A contact name, phone, and email for questions, and a deadline to respond.
- A note that the recall has been or is being reported to FDA.

### A worked recall-letter snippet

> URGENT DRUG RECALL, CLASS I
>
> Product: [Drug] Injection, 50 mg/mL, NDC 00000-000-00
> Lots affected: AB1234, AB1235, AB1240. Expiry: 2027-08.
> Reason: Potential microbial contamination identified during stability testing. Use of a contaminated sterile injectable may cause serious infection.
> Action required: Immediately quarantine all units of the listed lots. Do not dispense or administer. If you distributed these lots to other facilities, notify them at once (sub-recall).
> Complete and return the enclosed response form within 5 business days, including units on hand and units already dispensed, even if your count is zero.
> Disposition: Return units using the enclosed prepaid label, or destroy and return the destruction certificate.
> Contact: Recall Coordinator, [phone], [email]. This recall has been reported to the U.S. Food and Drug Administration.

---

## Reconciliation: accounting for every unit

Reconciliation is the arithmetic that proves the recall worked. It is the single most-cited weakness in recall execution because firms run the action but cannot show where the units went.

### How reconciliation works

Build a quantitative ledger per lot:

- **Quantity manufactured** for the lot.
- **Quantity distributed**, from your shipping records, broken down by consignee.
- **Quantity not yet distributed** (stock recovery, your own quarantine).
- **Quantity returned** by consignees.
- **Quantity destroyed in place**, supported by destruction certificates.
- **Quantity accounted for as already used/dispensed/administered**, from consignee responses.
- **Quantity unaccounted for**, the residual.

The identity that must close:

> Distributed = Returned + Destroyed-in-place + Used/Dispensed + Still-unaccounted

### Worked reconciliation example

| Lot | Manufactured | Distributed | Returned | Destroyed in place | Used/dispensed | Unaccounted | Percent accounted |
|-----|--------------|-------------|----------|---------------------|----------------|-------------|--------------------|
| AB1234 | 10,000 | 9,200 | 6,100 | 1,500 | 1,400 | 200 | 97.8% |
| AB1235 | 12,000 | 11,800 | 9,000 | 1,200 | 1,500 | 100 | 99.2% |
| AB1240 | 8,000 | 0 (stock recovery) | n/a | 0 | 0 | 0 | 100% |

For AB1234: accounted = 6,100 + 1,500 + 1,400 = 9,000 of 9,200 distributed, leaving 200 unaccounted, 97.8 percent accounted. The unaccounted residual is what you investigate and what FDA asks about. For each unaccounted unit you need a credible explanation (administered before notice reached the site, normal patient consumption of a dispensed drug, lost in a closed pharmacy) and you document it.

### Acceptance criteria for reconciliation

- The ledger closes per lot, with every category supported by a record (shipping log, response form, destruction certificate).
- Used/dispensed and unaccounted quantities are explained, not just stated.
- Returned product is received into a controlled quarantine, segregated, and not commingled with saleable stock.
- The total accounted percentage and the residual are reported in the recall closure package.
- For DSCSA-covered product, returned and quarantined units are handled consistent with verification and traceability requirements (see [DSCSA serialization](/articles/dscsa-serialization-track-and-trace)).

---

## Effectiveness checks: proving consignees acted

Effectiveness checks are distinct from reconciliation. Reconciliation accounts for units; effectiveness checks verify that consignees received, understood, and acted on the recall.

### How to run them

1. Build the consignee list from distribution records (your direct accounts). This is your denominator.
2. Determine the level (A through E) from the strategy.
3. Contact the required percentage by the chosen method (visit, phone call, letter, or response-form return).
4. For each contact, confirm three things: the notice was received, it was understood, and the requested action was taken (quarantine, sub-recall, return/destroy).
5. Record date, method, person contacted, and result. Re-contact non-responders; a consignee that does not respond is not an effective check.
6. Compute the effectiveness check completion rate and document it.

### Acceptance criteria

- The percentage of consignees verified meets or exceeds the level (Level A means 100 percent verified, not 100 percent contacted).
- Non-responders are escalated and pursued, not dropped.
- Sub-recall obligations to downstream customers were communicated and confirmed for distributors.
- Findings of failed or partial action trigger corrective contact.

A worked target: for a Class I recall at Level A with 320 direct consignees, you must obtain a verified action response from all 320. If 11 do not respond after letter, call, and follow-up, those 11 are open items in the recall file with a documented escalation path, and FDA will ask about every one.

---

## Recall termination

A recall is not over when product stops coming back. Part 7 describes recall **termination**, normally requested from FDA in writing, when the firm and FDA agree that:

- The firm has made reasonable efforts to remove or correct the violative product per the recall strategy.
- It is reasonable to assume the product has been removed and proper disposition or correction has been made commensurate with the degree of hazard.
- Effectiveness checks and reconciliation support that conclusion.

The termination package summarizes the action: classification, scope, communications issued, effectiveness check results, reconciliation per lot, disposition of returned product, root cause and CAPA status, and the request to terminate. FDA confirms termination in writing. Until then, the recall is open and is tracked in FDA's weekly Enforcement Report.

---

## Field Alert Reports in detail

The FAR deserves its own treatment because it is fast, frequently triggered, and routinely mishandled.

### What it is and why

Per 21 CFR 314.81(b)(1), an NDA/ANDA holder must alert the local FDA district office within **3 working days** of receiving information about:

- A mix-up where the product or its labeling could be mistaken for, or applied to, another article.
- Bacteriological contamination of the distributed product.
- A significant chemical, physical, or other change or deterioration in the distributed product.
- Any failure of one or more distributed batches to meet the specification established in the application.

The rationale is early warning. FDA wants to know about a potential field problem while it is still a signal, before the investigation concludes and before any recall decision is made. Filing a FAR does not commit you to a recall, and many FARs close without one.

### What goes in a FAR

FARs are commonly submitted on **Form FDA 3331** (initial, follow-up, and final). Contents:

- Applicant and application number (NDA/ANDA).
- Product name, strength, NDC, lot/control numbers, expiry.
- A description of the problem and how it was discovered.
- The distribution status of affected lots.
- Immediate actions taken (quarantine, investigation opened).
- Whether the report is initial, follow-up, or final.

### How to handle the FAR

1. The moment a triggering signal lands (a complaint of contamination, a confirmed OOS on a distributed lot, a label mix-up report), start the 3-working-day clock at **receipt**, not at confirmation.
2. File an **initial** FAR even if the investigation is incomplete. It is acceptable, and expected, to file on a credible unconfirmed signal and to update later.
3. File **follow-up** reports as the investigation develops.
4. File a **final** FAR when the investigation closes, stating the conclusion and whether a recall was initiated.

### Common FAR mistakes

- Treating the 3-day clock as starting when the OOS is confirmed rather than when the information was received. The clock starts at receipt of the information.
- Waiting to file until the firm "knows for sure," missing the window. File initial, update later.
- Filing for the contamination but forgetting the parallel **BPDR** for a licensed biologic (45 days) or the recall reporting.
- Not closing out with a final report, leaving the FAR open in FDA's system.

A practical tip: maintain a simple FAR log keyed to complaints and OOS events with the receipt date stamped, so the 3-day clock is never ambiguous. The most defensible position is "we filed initial within 3 working days of receipt and updated as we learned more."

---

## Mock recalls: testing the system before you need it

You do not want the first full test of your recall system to be a real recall. EU GMP Chapter 8 explicitly expects the recall procedure to be evaluated periodically, and a mock recall is the standard tool. FDA inspectors routinely ask to see your last mock recall and its timing results.

### What a mock recall tests

- Can you, from a lot number, reconstruct the full distribution list (who got it, how much, when)? This is the **traceability** test.
- How fast can you do it? You should be timing it.
- Are your contact lists for consignees and your recall committee current?
- Does your notification and response-form machinery work end to end?

### How to run a mock recall

1. Pick a real distributed lot (and ideally a "hard" one, like a lot that went through multiple distributors).
2. Start a clock. Task the team with producing the complete distribution list to the chosen depth.
3. Record the elapsed time to retrieve the distribution data.
4. Optionally exercise the notification step with a test letter to a sample of accounts (clearly marked as a test) or a tabletop walkthrough of communications.
5. Reconcile what you could and could not retrieve.
6. Document the result, the time taken, gaps found, and corrective actions, and feed those into the procedure.

### Acceptance criteria and a worked target

- The full distribution list is retrievable to the required depth within a pre-defined target time. Many firms set a target such as retrieving the distribution list within 24 hours, with the actual time recorded.
- 100 percent of the lot is traceable to consignees (no "we lost track" gaps).
- Contact information is verified current.
- Gaps generate CAPA.

Worked example of a mock recall summary entry:

| Field | Value |
|-------|-------|
| Mock recall ID | MR-2026-03 |
| Lot exercised | AB1234 (distributed via 3 wholesalers to 312 accounts) |
| Date | 2026-05-14 |
| Target retrieval time | 24 hours |
| Actual retrieval time | 6 hours 40 minutes |
| Distribution traceable | 100 percent to consignee level |
| Gaps found | 2 consignee phone numbers outdated |
| CAPA | Quarterly contact-list verification added to procedure |

A common finding is mock recalls that are too easy (always the same simple lot) or that test retrieval but never test the notification and effectiveness-check mechanics. Rotate scenarios and occasionally exercise the full chain.

---

## Roles and responsibilities

| Role | Responsibility |
|------|-----------------|
| QA / Quality Unit | Owns the recall procedure, classifies internally (recommends class), approves the recall decision, owns FAR/BPDR filing, approves termination |
| Recall Committee / Coordinator | Cross-functional standing body that runs the action; the coordinator is the single point of contact for FDA and consignees |
| Regulatory Affairs | Manages FDA communications, FAR/BPDR submissions, shortage notifications, and interactions with the recall coordinator at the district/Center |
| Medical / Safety (SME) | Performs or reviews the health hazard evaluation; assesses clinical risk and vulnerable populations |
| Manufacturing / Operations | Provides batch records, quantities manufactured, and supports investigation and root cause |
| Distribution / Supply Chain | Produces the distribution list, manages returns, quarantine, and reconciliation arithmetic |
| Customer Service / Complaints | Receives field signals, logs complaints, supports consignee notification |
| Senior Management | Accountable for resourcing the action and for the quality system that enables it (see management review) |

The recall coordinator role matters: FDA wants one named, reachable person. Diffuse ownership is a finding waiting to happen.

Cross-link: see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and [pharmaceutical quality system](/articles/pharmaceutical-quality-system) for how these seats fit the broader org.

---

## How recalls connect to the rest of the quality system

A recall is an output of the quality system, not a standalone event. The connections are what inspectors probe.

- **Complaints** feed recalls. A pattern of complaints on a lot or product is a classic recall trigger. See [product complaint handling](/articles/product-complaint-handling).
- **Deviations and investigations** can implicate distributed product. The deviation system must escalate to the recall decision body. See [deviation management](/articles/deviation-management).
- **OOS and OOT** results on retains and stability can be the originating signal. See [OOS investigation process](/articles/oos-investigation-process) and [out-of-trend investigations](/articles/out-of-trend-investigations).
- **CAPA** closes the loop. A recall without a root cause analysis and an effective CAPA is incomplete; FDA expects to see the systemic fix, not just product removal. See [what is a CAPA](/articles/what-is-a-capa), [root cause analysis techniques](/articles/root-cause-analysis-techniques), and [CAPA effectiveness verification](/articles/capa-effectiveness-verification).
- **Quality event triage** decides early whether a signal is recall-relevant. See [quality event classification triage](/articles/quality-event-classification-triage).
- **Management review** sees recall metrics and trends. See [management review Q10](/articles/management-review-q10) and [quality metrics and KPIs](/articles/quality-metrics-and-kpis).

A useful mental model: complaint or deviation, then investigation and OOS, then field alert and health hazard evaluation, then recall decision and strategy, then execution (communications, returns), then reconciliation and effectiveness checks, then root cause and CAPA, then termination and management review.

---

## Common mistakes and inspection-finding patterns

These are the generic patterns that show up in inspectional observations and warning letters on recall and field-action topics. No company names, just the patterns.

- **Slow or missing FAR.** The OOS or contamination signal was received but the field alert was not filed within 3 working days, or the 3-day clock was wrongly started at investigation closure.
- **Failure to extend to distributed product.** An investigation concluded on the manufacturing problem but the firm did not assess or act on product already in the field.
- **Under-scoped recall.** Only the obviously affected lot was recalled when the root cause (a contaminated component, a process drift, an equipment failure) plausibly affected other lots, forcing a later expansion.
- **No reconciliation, or it does not close.** The firm sent letters but cannot show how many units came back, were destroyed, or remain unaccounted, and cannot explain the residual.
- **Effectiveness checks confused with contact.** Letters were mailed but action was never verified; non-responders were not pursued.
- **No mock recall, or a token one.** No periodic test of the recall system, or a mock recall that only ever uses an easy lot and never times retrieval.
- **Stale contact lists.** Consignee and committee contact information out of date, slowing the action.
- **Misclassification by convenience.** Calling a recall a "market withdrawal" to avoid Part 7 obligations and FDA reporting when the product is genuinely violative.
- **Disposition gaps.** Returned product commingled with saleable stock, or destruction without certificates.
- **Weak root cause and CAPA.** Product removed but no systemic corrective action, so the defect recurs. The recall fixed the symptom, not the cause.
- **Missed parallel obligations.** Forgetting the biologic BPDR (45 days), the device 21 CFR 806 correction/removal report, or the drug shortage notification.

Cross-link: see [FDA warning letters patterns](/articles/fda-warning-letters-patterns) and [483 warning letter response](/articles/483-warning-letter-response) for how these surface and how to respond.

---

## Interview-ready: questions and how to answer

**"Walk me through the difference between a recall, a market withdrawal, and a stock recovery."**
A recall is removal or correction of marketed product FDA considers violative and would take legal action against. A market withdrawal addresses a minor issue not subject to FDA legal action, or no violation at all, like normal stock rotation. A stock recovery is retrieval of product that never left the firm's control. The dividing line is whether the product is violative and whether it left your control.

**"What classes of recall are there and who assigns the class?"**
Class I (reasonable probability of serious harm or death), Class II (temporary or reversible harm, or remote probability of serious harm), Class III (not likely to cause harm). The firm recommends a class, but FDA assigns it through a health hazard evaluation. I'd give an example of each tied to clinical consequence.

**"A complaint comes in that a distributed sterile injectable lot may be contaminated. What happens in the first 72 hours?"**
Log and escalate the complaint immediately to QA and the recall committee. Open the investigation and quarantine retains and any undistributed stock. Run a health hazard evaluation. File the FAR within 3 working days of receipt for the NDA/ANDA product, and prepare the BPDR if it's a licensed biologic. Pull the distribution list and bound the scope. Contact the FDA recall coordinator and prepare a recall strategy. For a contaminated sterile injectable, I'd expect Class I, user-level depth, Level A effectiveness checks, and a press release.

**"When is a field alert report due and what triggers it?"**
Within 3 working days of receiving the information, per 21 CFR 314.81(b)(1). Triggers are a product/label mix-up, bacteriological contamination of distributed product, a significant chemical/physical change or deterioration in distributed product, or any failure of a distributed batch to meet its application specification. The clock starts at receipt of the information, and you file an initial report even before the investigation closes.

**"What's the difference between reconciliation and effectiveness checks?"**
Reconciliation is the unit-level arithmetic: distributed equals returned plus destroyed plus used plus unaccounted, closed per lot with records and an explanation for the residual. Effectiveness checks are verification that consignees received the notice, understood it, and took the action, at the coverage level (A through E) set in the strategy. One accounts for product; the other verifies behavior.

**"What is a mock recall and why do you run one?"**
A periodic test of the recall system, usually starting from a lot number to reconstruct the full distribution list to the required depth, timed against a target. It tests traceability, contact-list currency, and the notification machinery before a real recall does. EU GMP Chapter 8 expects the recall procedure to be evaluated periodically; FDA inspectors ask to see the last mock recall and its timing.

**"What are the recall effectiveness check levels?"**
Level A is 100 percent of consignees, Level B is a percentage between A and C, Level C is 10 percent, Level D is 2 percent, Level E is no checks. A Class I recall is typically Level A or B.

**"What additional reports apply to a biologic versus a small-molecule drug?"**
For a licensed biologic, a biological product deviation report under 21 CFR 600.14 within 45 days of discovery, in addition to any FAR-equivalent handling and the recall reporting. For a device it would be a correction/removal report under 21 CFR 806. Knowing which obligation attaches to which product type is the point.

**"How do you decide recall depth?"**
By class and where the risk lives. Class I sterile injectables go to user level; a low-risk Class III defect might stop at wholesale. Going too shallow is the common finding, so when in doubt I go deeper and document the rationale.

**"FDA asks why 200 units of a recalled lot are unaccounted for. How do you answer?"**
With the reconciliation ledger. For those 200 units I'd show the distributed-to-account breakdown, the consignee responses, and a documented explanation for each residual: administered before the notice arrived, dispensed and consumed by patients, or genuinely lost in a closed account. The answer is records plus rationale, never a shrug.

---

## A condensed execution checklist

Use this as the operational spine. Each line maps to a section above.

1. Capture the field signal (complaint, deviation, OOS, stability, supplier notice) and escalate to QA and the recall committee at receipt.
2. Start the FAR clock (3 working days) and, for biologics, the BPDR clock (45 days).
3. Convene the recall committee; run the health hazard evaluation; recommend a class.
4. Decide the action (recall vs withdrawal vs stock recovery), lot scope, and depth.
5. Notify the FDA recall coordinator and the relevant Center; file FAR/BPDR; check for shortage notification.
6. Issue recall communications to direct accounts with response forms; add a press release for Class I.
7. Execute returns and disposition into controlled quarantine; collect destruction certificates.
8. Run reconciliation per lot until the identity closes and the residual is explained.
9. Run effectiveness checks to the required level; pursue non-responders.
10. Complete root cause analysis and CAPA; verify CAPA effectiveness.
11. Assemble the termination package and request FDA termination.
12. Report recall metrics into management review; feed lessons into the procedure and the next mock recall.

---

## Practical tips

- Keep the **receipt date** stamped on every signal. Most FAR and reporting failures are timing failures that trace back to an ambiguous start date.
- Pre-build templates: recall strategy, recall letter, response form, reconciliation ledger, effectiveness-check tracker, termination package. Authoring under pressure produces errors.
- Maintain a current, named **recall coordinator** and a standing committee with verified contacts. FDA wants one reachable human.
- Scope on root cause, not on the obvious lot. Ask "what else could this defect have touched?" before you draw the recall boundary.
- Treat the residual (unaccounted units) as the thing to explain, not the thing to hide. A clean reconciliation with explained residuals beats a vague "all recovered."
- Rotate mock-recall scenarios and time every run. A mock recall that never fails is not testing anything.
- Do not let the recall close on product removal alone. The CAPA is what stops the next one, and the inspector will look for it.
- For DSCSA-covered product, your serialization and traceability data is now part of how fast you can find and verify recalled units; keep that data path tested.

### Related reading

- [Product complaint handling](/articles/product-complaint-handling)
- [Deviation management](/articles/deviation-management)
- [OOS investigation process](/articles/oos-investigation-process)
- [Out-of-trend investigations](/articles/out-of-trend-investigations)
- [What is a CAPA](/articles/what-is-a-capa)
- [CAPA effectiveness verification](/articles/capa-effectiveness-verification)
- [Root cause analysis techniques](/articles/root-cause-analysis-techniques)
- [Quality event classification triage](/articles/quality-event-classification-triage)
- [Stability programs ICH](/articles/stability-programs-ich)
- [DSCSA serialization and track and trace](/articles/dscsa-serialization-track-and-trace)
- [Device postmarket surveillance MDR](/articles/device-postmarket-surveillance-mdr)
- [Management review Q10](/articles/management-review-q10)
- [FDA warning letters patterns](/articles/fda-warning-letters-patterns)
