---
title: "US Device Submission Pathways: 510(k), PMA, De Novo, and Substantial Equivalence"
description: "How medical devices reach the US market: classification, predicate logic, the evidence burden of 510(k) versus PMA, the De Novo route for novel low-risk devices, and how Q-Submission meetings shape a program."
pubDate: 2026-06-20
tags: ["medical-devices", "510k", "pma", "de-novo", "fda", "regulatory", "submission", "quality"]
pillar: "medical-devices"
tier: "Intermediate"
---

A medical device cannot be sold in the United States until the Food and Drug Administration (FDA) clears it, approves it, grants it, or determines it is exempt. Which of those words applies depends entirely on which submission pathway the device travels. People new to this area treat "FDA clearance" and "FDA approval" as synonyms. They are not. A 510(k) gets *cleared*. A PMA gets *approved*. A De Novo gets *granted*. The wording matters legally and in marketing claims, and using the wrong verb in a submission, a label, or an interview marks you as someone who has not done the work.

This article walks the full decision tree: how a device gets classified, what "substantial equivalence" actually means, how to choose and assemble a 510(k), when you are forced into a Premarket Approval (PMA), how the De Novo route created a new category for low-risk devices that had no predicate, and how Q-Submission (Q-Sub) meetings let you de-risk the whole thing before you file. The regulatory home for all of this is the Federal Food, Drug, and Cosmetic (FD&C) Act and Title 21 of the Code of Federal Regulations (CFR), administered by FDA's Center for Devices and Radiological Health (CDRH).

If you come from a drug or biologics background, reset your mental model. Devices are regulated by risk class, not by molecule. The submission you file is driven by what the device *is* and how risky it is, and the single most consequential early decision is getting the classification and pathway right.

---

## The classification system: Class I, II, III

The FD&C Act, as amended by the Medical Device Amendments of 1976, divides devices into three classes based on the level of control needed to provide a reasonable assurance of safety and effectiveness. This is codified at 21 CFR Part 860 (classification procedures) and in the device-specific classification regulations scattered through 21 CFR Parts 862 to 892.

### Class I, low risk

Class I devices present minimal potential for harm. Examples include elastic bandages, examination gloves, manual surgical instruments, and bedpans. They are controlled by **general controls** only. General controls are the baseline requirements that apply to *all* devices regardless of class: establishment registration, device listing, adherence to the Quality System Regulation (now the Quality Management System Regulation), labeling rules, and the prohibition against adulteration and misbranding.

Most Class I devices are **exempt from premarket notification**, meaning no 510(k) is required. The manufacturer still must register, list, and comply with general controls, but does not submit a premarket dossier. A subset of Class I devices is "reserved" and still needs a 510(k).

### Class II, moderate risk

Class II devices need more than general controls to assure safety and effectiveness, so they are subject to **special controls** on top of general controls. Special controls can include performance standards, FDA guidance documents, mandatory labeling, postmarket surveillance, and recognized consensus standards. Examples: infusion pumps, powered wheelchairs, many in vitro diagnostic assays, surgical drapes, and most software-based diagnostic tools.

The default pathway for Class II is the **510(k) premarket notification** under section 510(k) of the FD&C Act and 21 CFR Part 807, Subpart E. Some Class II devices are also 510(k)-exempt up to certain limitations described in the classification regulation.

### Class III, high risk

Class III devices support or sustain life, are of substantial importance in preventing impairment of human health, or present a potential unreasonable risk of illness or injury. Examples: implantable cardiac defibrillators, heart valves, and many novel high-risk implants. General and special controls are deemed insufficient, so Class III devices require **Premarket Approval (PMA)** under section 515 of the FD&C Act and 21 CFR Part 814. PMA is the most stringent pathway and requires independent demonstration of safety and effectiveness, usually with clinical data.

### How to find your classification

Do not guess. Work the evidence in this order:

1. Search the FDA **Product Classification Database** by device type. Each entry gives a three-letter **product code**, the device class, the governing CFR regulation number, the review panel (specialty), and whether a 510(k) is required or the device is exempt.
2. Read the matching **classification regulation** in 21 CFR Parts 862 to 892. It states the identification (the formal device definition) and any special controls.
3. Cross-check against the **510(k) and PMA databases** for cleared or approved devices that match your description, and note their product codes and regulation numbers.

A worked example:

| Field | Example value |
|---|---|
| Device type | Wheeled stretcher (non-powered) |
| Product code | FPN |
| Device class | I |
| Regulation number | 21 CFR 880.6910 |
| Premarket review | 510(k) exempt (with limitations) |
| Controls | General controls |

Contrast that with a moderate-risk diagnostic:

| Field | Example value |
|---|---|
| Device type | Glucose dehydrogenase glucose test system |
| Product code | LFR |
| Device class | II |
| Regulation number | 21 CFR 862.1345 |
| Premarket review | 510(k) |
| Controls | General + special controls |

**Acceptance criterion for this step:** you can name the product code, the class, the CFR regulation number, and the required submission type, and you can point to at least one cleared or approved predicate or reference device that shares the product code. If you cannot, your pathway is not yet settled.

---

## Substantial equivalence: the heart of the 510(k)

A 510(k) does not ask "is this device safe and effective?" in the absolute sense. It asks a comparative question: **is this new device substantially equivalent to a legally marketed device that is not subject to PMA?** That legally marketed comparator is the **predicate device**.

The legal definition of substantial equivalence (SE) comes from section 513(i) of the FD&C Act. A new device is substantially equivalent to a predicate if:

- It has the **same intended use** as the predicate, AND
- It has the **same technological characteristics** as the predicate;
  OR
- It has the same intended use and **different technological characteristics**, but the information submitted shows the device is **as safe and effective** as the predicate and **does not raise different questions of safety and effectiveness**.

Read that carefully, because the whole 510(k) game lives in it. The decision logic FDA applies is laid out in the guidance *The 510(k) Program: Evaluating Substantial Equivalence in Premarket Notifications [510(k)]* (2014). The reviewer walks a flowchart:

1. **Is there a predicate device?** No predicate means no 510(k) is possible; you go to De Novo or PMA.
2. **Same intended use?** If the intended use differs, the device is Not Substantially Equivalent (NSE).
3. **Same technological characteristics?** If yes, and the device meets any applicable special controls or recognized standards, it is SE.
4. **Different technological characteristics, do they raise different questions of safety and effectiveness?** If they raise *new* questions that performance data cannot resolve, the device is NSE.
5. **Do the accepted methods and performance data demonstrate the device is as safe and effective as the predicate?** If yes, SE. If no, NSE.

A finding of **NSE** automatically classifies the device into Class III, which means PMA, unless you petition for De Novo or reclassification.

### Predicate selection: the most important strategic choice in a 510(k)

The predicate you choose defines your intended use, your comparison testing, and the scope of your claims. Choose badly and you either over-test, get an NSE, or build a device whose marketing claims you cannot support.

Rules and practical tips:

- The predicate must be **legally marketed**: a device cleared via 510(k), a preamendments device (on the market before May 28, 1976), a De Novo-granted device, or a device reclassified out of Class III. A device that was recalled for safety reasons or removed from the market is a poor or invalid predicate.
- You may cite a **primary predicate** for the core comparison and one or more **reference devices** to support specific technological features. Do not confuse a reference device with a second predicate; a reference device supports a particular characteristic, it does not by itself establish equivalence of intended use.
- **Split predicates are not allowed.** You cannot take the intended use from Device A and the technology from Device B and stitch them together. The primary predicate must share your intended use.
- Match the **product code and regulation number** wherever possible. A predicate with a different product code invites questions.

**Worked example of an SE comparison table** (the core artifact reviewers look for):

| Attribute | New device | Predicate (K-number) | Same / Different | Supporting data |
|---|---|---|---|---|
| Intended use | Measurement of capillary blood glucose for self-testing | Same | Same | Labeling comparison |
| Patient population | Adults with diabetes | Adults with diabetes | Same | Labeling |
| Sample type | Capillary whole blood | Capillary whole blood | Same | Method comparison |
| Measurement range | 20-600 mg/dL | 20-600 mg/dL | Same | Analytical study |
| Detection method | Amperometric, GDH-FAD enzyme | Amperometric, GDH-FAD enzyme | Same | Design docs |
| Sample volume | 0.4 microliter | 0.6 microliter | Different | Performance testing showing no new risk |
| Software | Embedded, moderate level of concern | Embedded | Different | IEC 62304 documentation + verification |

When a row says "Different," you owe FDA data showing the difference does not raise a new safety or effectiveness question. The smaller sample volume above is different, but performance testing can show accuracy is maintained, so it does not break equivalence.

---

## The 510(k) submission: contents, types, and procedure

### Types of 510(k)

There are three flavors, defined in the guidance *Format for Traditional and Abbreviated 510(k)s* and *The Special 510(k) Program* (2019):

- **Traditional 510(k):** the default. Used for a new device or a change where the standard SE comparison applies.
- **Special 510(k):** for a **modification to the submitter's own legally marketed device** where the methods to evaluate the change are well-established and the results can be reviewed in a summary or risk-analysis format. Faster review goal (the agency targets a shorter review clock). It is appropriate when the intended use and fundamental scientific technology are unchanged.
- **Abbreviated 510(k):** relies on FDA guidance, special controls, or **recognized consensus standards**, with a declaration of conformity replacing some primary test data. Good when strong recognized standards cover your device type.

### What goes in a 510(k)

A Traditional 510(k) is organized into the sections FDA expects, with a required eCopy/eSTAR structure. The content roughly follows 21 CFR 807.87 plus current submission format guidance:

1. **Medical Device User Fee Cover Sheet (Form FDA 3601)** and the user fee payment.
2. **CDRH Premarket Review Submission Cover Sheet (Form FDA 3514).**
3. **510(k) Cover Letter.**
4. **Indications for Use statement (Form FDA 3881).** The single most scrutinized page; it must match your predicate's intended use.
5. **510(k) Summary or 510(k) Statement.** The Summary is public and becomes the record others cite as a predicate.
6. **Truthful and Accuracy Statement** and a **Class III Summary/Certification** if applicable.
7. **Financial Certification or Disclosure** (Form FDA 3454/3455) if clinical data are included.
8. **Declarations of Conformity** to recognized standards.
9. **Device description:** what it is, components, accessories, principles of operation, photographs, and engineering drawings.
10. **Substantial equivalence discussion** with the SE comparison table and predicate identification (K-numbers).
11. **Proposed labeling:** the label, instructions for use, and any patient labeling.
12. **Sterilization and shelf life** information for sterile devices (validation per the applicable ISO 11135 or ISO 11137 family, packaging validation per ISO 11607).
13. **Biocompatibility** evaluation per the ISO 10993 series, scaled to contact type and duration.
14. **Software documentation** per FDA's *Content of Premarket Submissions for Device Software Functions* (2023) and **cybersecurity** documentation where applicable.
15. **Electromagnetic compatibility and electrical safety** (for example, the IEC 60601 family for electromedical equipment).
16. **Performance testing, bench (non-clinical):** the studies that close each "Different" row in the SE table.
17. **Performance testing, clinical**, when bench data cannot answer the equivalence question.

### Step-by-step procedure

1. **Confirm classification and pathway.** Product code, class, CFR regulation, predicate identified.
2. **Hold a Pre-Submission (Q-Sub) meeting** if there is meaningful uncertainty about predicate, testing, or clinical need (see the Q-Sub section).
3. **Build the testing plan** from the predicate comparison and any special controls or recognized standards.
4. **Execute design verification and validation** under design controls (21 CFR 820.30 / the QMSR). Your submission data must come from a controlled design history file.
5. **Assemble the 510(k)** in the required eSTAR template.
6. **Pay the MDUFA user fee** and submit electronically.
7. **Acceptance Review (RTA):** within roughly 15 calendar days FDA runs a **Refuse to Accept (RTA)** check against an administrative checklist. Miss a required element and the submission is held.
8. **Substantive review:** FDA's stated MDUFA goal is a decision in about 90 FDA-days, though the calendar time is longer because of any **Additional Information (AI) requests** that pause the clock.
9. **Decision:** SE (cleared, you get a K-number and may market) or NSE.

**Acceptance criteria / what good looks like:** the RTA checklist passes on first attempt; the Indications for Use exactly track the predicate; every "Different" attribute in the SE table is closed with referenced test data; recognized standards are declared with the correct edition; and the 510(k) Summary is internally consistent with the labeling.

---

## Premarket Approval (PMA): the high-risk pathway

When a device is Class III and a 510(k) is not available, you file a **PMA** under section 515 of the FD&C Act and 21 CFR Part 814. The standard is not equivalence; it is an **independent demonstration of a reasonable assurance of safety and effectiveness**, almost always supported by valid scientific evidence including clinical data.

### What goes in a PMA

A PMA is a far larger dossier than a 510(k). The required contents (21 CFR 814.20) include:

- **Summary** of safety and effectiveness data (the SSED becomes public).
- **Complete device description**, including manufacturing methods and controls.
- **Reference to performance standards.**
- **Nonclinical laboratory studies**, conducted under Good Laboratory Practice (21 CFR Part 58) where applicable.
- **Clinical investigations**, conducted under an **Investigational Device Exemption (IDE)** per 21 CFR Part 812, with protocols, study reports, statistical analysis, adverse events, and the case report form structure.
- **Bibliography** and samples if requested.
- **Proposed labeling.**
- **Manufacturing information** sufficient to support a **pre-approval inspection (PAI)** of the manufacturing facility against the QMSR.

### Procedure and timelines

1. Usually preceded by an **IDE** for the confirmatory clinical trial if the device is significant risk.
2. **Pre-Submission** meetings to align on trial design and endpoints are strongly advised; many sponsors also hold an **Agreement Meeting** or **Determination Meeting** under section 520(g)(7) to lock the data requirements for the investigation.
3. File the PMA, pay the (much larger) MDUFA PMA user fee.
4. **Filing review** (about 45 days) is the PMA analog of RTA.
5. **Substantive review**, MDUFA goal around 180 FDA-days, but real time is much longer.
6. Possible referral to an **FDA Advisory Committee (panel)** for novel or controversial devices.
7. **Pre-approval inspection** of the manufacturing site.
8. **Approval order**, often with **post-approval study (PAS)** conditions and annual reporting.

### Key differences from a 510(k)

| Dimension | 510(k) | PMA |
|---|---|---|
| Legal standard | Substantial equivalence to a predicate | Independent reasonable assurance of safety and effectiveness |
| Outcome verb | Cleared | Approved |
| Typical class | II | III |
| Clinical data | Sometimes | Almost always (confirmatory trial) |
| Manufacturing inspection | Not routine pre-decision | Pre-approval inspection routine |
| Advisory panel | Rare | Common for novel devices |
| Post-market conditions | Special controls, possible 522 surveillance | Post-approval studies, annual reports, PMA supplements for changes |
| User fee | Lower | Substantially higher |
| Public summary | 510(k) Summary | SSED |

A practical consequence: changes to an approved device are managed through **PMA Supplements** (Panel-Track, 180-Day, Real-Time, Special, 30-Day Notice), each with its own evidence bar, whereas changes to a cleared device are evaluated under the "when to submit a new 510(k)" guidance against your own change-control records.

---

## De Novo: a pathway for novel, low-to-moderate risk devices

Before 1997 a genuinely new device with no predicate automatically fell into Class III and faced a PMA, even when its risk was low. That was a poor fit. The **De Novo classification** process, created by the FDA Modernization Act of 1997 and substantially streamlined by the FDA Safety and Innovation Act of 2012, fixed it. It is codified at section 513(f)(2) of the FD&C Act and in 21 CFR Part 860, Subpart D (the De Novo classification final rule, effective 2021).

De Novo lets a sponsor request that FDA classify a **novel device of low or moderate risk into Class I or Class II**, creating a new classification regulation and a new product code. Once granted, that device can itself serve as a **predicate** for future 510(k)s, which is why De Novo is so valuable to a first mover in a new device category.

### When De Novo applies

- The device has **no legally marketed predicate** (it is genuinely new), OR a 510(k) was filed and returned **NSE** because no predicate fit, AND
- The risk is **low or moderate**, so general or general-plus-special controls can provide a reasonable assurance of safety and effectiveness.

You can request De Novo two ways: **directly** (the common route today) without first filing a 510(k), or **after an NSE** determination.

### What goes in a De Novo request

A De Novo request resembles a 510(k) in engineering content but adds a classification argument. Required elements include:

- Administrative information and a clear **device description**.
- The **classification summary** and a **proposed classification** (Class I or II) with the rationale.
- A **risk and mitigation table**: the probable benefits, the probable risks to health, and for each risk the **proposed special control** that mitigates it. This table is the spine of a De Novo; FDA uses it to write the new special controls.
- Supporting **performance data** (bench, animal, and clinical as needed) showing the mitigations work.
- Proposed **labeling**.

**Worked example of a De Novo risk-to-control table:**

| Probable risk to health | Mitigation (proposed special control) |
|---|---|
| Inaccurate measurement leading to wrong clinical decision | Analytical and clinical performance testing against a reference method; labeling of accuracy limits |
| Software malfunction | Software verification and validation per IEC 62304; documentation of level of concern |
| Cybersecurity exploitation | Security risk management, penetration testing, labeling of security controls |
| Use error | Human factors / usability validation per IEC 62366-1; clear instructions for use |
| Material biocompatibility | Biological evaluation per ISO 10993 series |

### Procedure

1. Often preceded by a **Pre-Submission** to agree on the appropriate pathway and the special controls.
2. Submit the De Novo request and pay the De Novo MDUFA fee.
3. **Acceptance review** against the De Novo RTA-style checklist.
4. **Substantive review**, MDUFA goal around 150 FDA-days.
5. **Grant** (the device is classified, a new regulation and product code are created) or **decline**.

**Acceptance criteria:** every identified probable risk maps to a special control; performance data demonstrate each mitigation; and the proposed classification (I vs II) is defensible given residual risk. A common reason De Novo requests stall is a risk table that lists risks without convincingly tying each one to a tested mitigation.

---

## Q-Submissions: de-risk before you file

The **Q-Submission (Q-Sub) Program** is how you talk to FDA *before* a marketing submission. The governing document is the guidance *Requests for Feedback and Meetings for Medical Device Submissions: The Q-Submission Program* (current edition). Used well, a Q-Sub can save a program from a wrong predicate, an unworkable trial design, or an NSE surprise.

### The main Q-Sub types

- **Pre-Submission (Pre-Sub):** the workhorse. A formal request for **written feedback**, optionally followed by a meeting or teleconference, on specific questions: Is this predicate acceptable? Is this test plan adequate? Is a clinical study needed and is this design sound? Is De Novo the right pathway?
- **Submission Issue Request (SIR):** used to discuss how to resolve a **deficiency** (a hold or AI request) on an active submission.
- **Study Risk Determination:** ask FDA whether a planned clinical study is **significant risk, nonsignificant risk, or exempt** under the IDE rules.
- **Informational Meeting:** share information with the review team (for a complex pipeline) without asking for feedback.
- **Breakthrough Device / TAP designation interactions** and other program-specific meetings also run through the Q-Sub mechanism.

### How to run a Pre-Sub well

1. **Pick your questions first.** A Pre-Sub is only as good as its questions. Make them specific and decision-driving. "Do you agree predicate K-XXXXXX is appropriate for our intended use?" beats "Any feedback on our device?"
2. **Give FDA enough context** to answer: device description, intended use, the proposed predicate or classification rationale, your draft test plan, and your **own proposed answer** to each question. FDA responds far better to "here is our plan, do you concur" than to open-ended questions.
3. **Submit and wait.** FDA's goal is to provide written feedback within about **70 to 75 days**, and to hold the meeting (if requested) within roughly **75 to 90 days** of receipt.
4. **Hold the meeting**, take careful minutes, and submit **your** minutes to FDA (the sponsor owns the official minutes for a Pre-Sub). Capture every agreement and every point where FDA disagreed or deferred.
5. **Carry the agreements into your submission.** Reference the Q-Sub number in the marketing submission and show how you addressed the feedback.

**What good looks like:** you leave a Pre-Sub with the predicate confirmed (or replaced), the test matrix agreed, the clinical question settled, and a written record you can cite. Q-Sub feedback is **non-binding**, but a documented agreement is powerful and FDA rarely reverses itself without cause.

---

## Adjacent and special situations you should know

- **513(g) Request for Information:** when you genuinely do not know the classification or pathway, you can file a **513(g)** and FDA will tell you its view of the class and regulatory requirements. It is not a clearance or approval; it is a classification opinion. Use it when database research is inconclusive.
- **Combination products** (device plus drug or biologic) are assigned a **lead center** based on **primary mode of action (PMOA)** under 21 CFR Part 3, coordinated by the Office of Combination Products. A drug-eluting stent, for instance, has a device PMOA and is led by CDRH, but the drug constituent still must meet its own standards. The submission type follows the lead center and the constituent requirements.
- **Software as a Medical Device (SaMD)** follows the same class-driven pathway logic, with the software and cybersecurity content requirements layered in. See the cross-links below.
- **In Vitro Diagnostics (IVDs)** are devices and follow the same pathways, but with assay-specific analytical and clinical validation expectations.
- **HDE (Humanitarian Device Exemption)** is a distinct route for devices treating conditions affecting small patient populations, with a different (probable benefit) standard. It is out of scope here but worth knowing it exists.

---

## Roles and responsibilities

A submission is a team output. Confusing who owns what is a common failure mode.

| Role | Responsibility |
|---|---|
| **Regulatory Affairs** | Owns pathway strategy, classification, predicate selection, Q-Sub planning, submission assembly and filing, and FDA correspondence. The single accountable owner for the submission. |
| **R&D / Design Engineering** | Owns the device description, design controls, design verification and validation, and the technical data that close the SE or performance gaps. |
| **Quality / QA** | Owns the design history file integrity, the QMSR-compliant quality system, the Truthful and Accuracy Statement basis, and readiness for a pre-approval inspection (PMA) or post-clearance inspection. |
| **Clinical / Biostatistics** | Owns IDE strategy, protocol design, endpoint selection, statistical analysis plan, and clinical study reports for PMA, De Novo, or data-supported 510(k)s. |
| **Test / V&V engineers and labs** | Execute bench, biocompatibility, sterilization, EMC, and software testing to recognized standards, under controlled, traceable conditions. |
| **Human Factors / Usability** | Owns use-related risk analysis and usability validation (IEC 62366-1), increasingly expected even in 510(k)s. |
| **Cybersecurity / Software** | Owns IEC 62304 lifecycle documentation, security risk management, and the premarket cybersecurity content. |
| **Manufacturing / Operations** | Owns the manufacturing description and PAI readiness for PMA. |
| **Senior management** | Signs the Truthful and Accuracy Statement and is accountable for the validity of submitted data. |

The Regulatory lead does not generate the data; the Regulatory lead is accountable for the strategy and the integrity of the package. The data owners are accountable for the data.

---

## Common mistakes and inspection or review-finding patterns

These are the recurring failures, framed generically (no company names, consistent with how FDA describes them in public RTA holds, AI requests, and warning letters).

1. **Intended use creep.** The Indications for Use on Form FDA 3881 claim more than the predicate supports. FDA reads the predicate's labeling literally; if your indication is broader, the device is NSE on intended use. Fix: write the indication to track the predicate, or change predicates.
2. **Invalid or weak predicate.** Choosing a predicate that was recalled for safety reasons, or stitching together a split predicate. Either invites NSE or AI requests.
3. **RTA holds for administrative gaps.** Missing the Indications for Use form, an unsigned Truthful and Accuracy Statement, an incomplete eSTAR field, or no declaration of conformity edition. These are avoidable; run the RTA checklist before you file.
4. **Unclosed "Different" rows.** The SE table lists a technological difference but provides no data showing it does not raise a new safety question. Each difference needs supporting evidence.
5. **Stale or wrong standard editions.** Declaring conformity to a withdrawn edition of a recognized standard, or one not on FDA's recognized-standards list. Always check the current recognition.
6. **Treating a Special 510(k) as a shortcut for the wrong change.** Special 510(k)s are only for the submitter's own device where the change can be reviewed by established methods and does not alter intended use or fundamental technology. Filing a Special when the change is too large gets converted to Traditional and loses time.
7. **De Novo risk tables without mitigations.** Listing risks but not convincingly mapping each to a tested special control. FDA writes the special controls from your table; a weak table produces a weak or declined request.
8. **Skipping the Q-Sub on a high-uncertainty program**, then receiving an NSE or a major AI request that a Pre-Sub would have surfaced months earlier.
9. **Design controls not traceable to the submission.** Data presented in the submission that does not tie back to a controlled design history file, verification protocols, or approved test reports. This surfaces in inspections and undermines the Truthful and Accuracy Statement.
10. **Underestimating cybersecurity and software content.** For connected or software devices, an incomplete software documentation level or missing cybersecurity package is now a frequent deficiency.
11. **Confusing "cleared" and "approved" in labeling and marketing.** A 510(k) device that markets itself as "FDA approved" is misbranding. Use "cleared."

---

## Interview-ready: questions you should be able to answer cold

**"What is the difference between 510(k) clearance and PMA approval?"**
A 510(k) demonstrates *substantial equivalence* to a legally marketed predicate; the device is *cleared*. A PMA independently demonstrates a *reasonable assurance of safety and effectiveness*, usually with clinical data; the device is *approved*. 510(k) is the Class II default; PMA is the Class III pathway. The legal standards are different, and the words are not interchangeable.

**"What is substantial equivalence?"**
A new device is substantially equivalent to a predicate if it has the same intended use and either the same technological characteristics, or different characteristics that do not raise different questions of safety and effectiveness and are shown by data to be as safe and effective as the predicate. The basis is section 513(i) of the FD&C Act.

**"How do you choose a predicate?"**
It must be legally marketed (cleared, preamendments, De Novo-granted, or reclassified) and must share your intended use. Match the product code and regulation number where possible. Avoid predicates recalled for safety reasons. You may use reference devices to support specific technological features but you cannot use split predicates.

**"When would you use a De Novo instead of a 510(k) or PMA?"**
When the device is genuinely novel with no suitable predicate but is low or moderate risk, so general or special controls can assure safety and effectiveness. De Novo classifies it into Class I or II, creates a new regulation and product code, and lets it become a predicate for future 510(k)s. The alternative, defaulting a novel low-risk device into Class III and PMA, is disproportionate.

**"What happens if FDA finds your device Not Substantially Equivalent?"**
NSE places the device in Class III by default, which means PMA, unless you pursue a De Novo classification request or a reclassification petition. NSE usually traces to a different intended use, an unacceptable predicate, or different technological characteristics that raise unresolved safety questions.

**"What is a Pre-Submission and why use one?"**
A Pre-Sub is the main Q-Submission type: a request for written FDA feedback (with an optional meeting) on specific questions about predicate, test plan, clinical need, or pathway, before you file. It de-risks the program. Ask specific, decision-driving questions, propose your own answers, and document the agreements in sponsor-owned minutes.

**"What is the RTA review?"**
Refuse to Accept: an administrative completeness check FDA runs in roughly the first 15 days after a 510(k) is received, against a published checklist. If a required element is missing, the submission is held until you supply it. It checks completeness, not the merits.

**"How are changes to a marketed device handled?"**
For a cleared device, you evaluate the change against the "deciding when to submit a 510(k) for a change to an existing device" guidance and your change-control records; some changes need a new 510(k), many are documented in the design history. For an approved PMA device, changes go through PMA Supplements (Panel-Track, 180-Day, Real-Time, Special, or 30-Day Notice), each with a defined evidence level.

**"What standards do you typically reference in a device submission?"**
Biocompatibility (ISO 10993 series), software lifecycle (IEC 62304), usability (IEC 62366-1), risk management (ISO 14971), electrical safety and EMC (IEC 60601 family for electromedical devices), sterilization (ISO 11135 for EO, ISO 11137 for radiation), and packaging (ISO 11607). Declare the current FDA-recognized edition.

---

## Practical tips

- **Settle classification on day one.** The product code drives everything downstream. If it is ambiguous, use a 513(g) or a Pre-Sub rather than guessing.
- **Reverse-engineer from cleared predicates.** Read the 510(k) Summaries of the best predicates in your space. They tell you what testing FDA accepted and how others framed intended use.
- **Write the Indications for Use before the device is finished.** It anchors the predicate, the testing, and the claims. Changing it late is expensive.
- **Build the SE table early and let it drive the test plan.** Every "Different" row is a test you must budget for.
- **Use the Q-Sub for the questions that can sink you**, not for trivia. One well-aimed Pre-Sub on predicate and clinical need is worth more than three vague ones.
- **Keep the design history file submission-ready.** If a reviewer or inspector asks for the protocol and report behind a data point, you should be able to produce it traceably.
- **Track the user fee calendar.** MDUFA fees change annually; budget the correct fee and confirm small-business status if you qualify.

---

## Related reading

- [Design controls for medical devices](/articles/design-controls-medical-devices)
- [Medical device quality system (QMSR)](/articles/medical-device-quality-system-qmsr)
- [ISO 14971 risk management for devices](/articles/iso-14971-risk-management-devices)
- [IEC 62304 software lifecycle for SaMD](/articles/iec-62304-samd-software-lifecycle)
- [Device software and cybersecurity (SaMD)](/articles/device-software-cybersecurity-samd)
- [EU MDR and IVDR overview](/articles/eu-mdr-ivdr-overview)
- [Unique device identification (UDI)](/articles/unique-device-identification-udi)
- [Device postmarket surveillance and MDR](/articles/device-postmarket-surveillance-mdr)
- [Health authority meetings](/articles/health-authority-meetings)
- [IND, NDA, and BLA pathways](/articles/ind-nda-bla-pathways)
