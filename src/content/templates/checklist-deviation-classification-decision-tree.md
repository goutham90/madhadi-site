---
title: "Checklist: Deviation Classification Decision Tree"
description: "A plug-and-play decision tree and checklist for classifying a GxP deviation as Critical, Major, or Minor on a consistent risk basis, with a worked specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Checklist"
pillar: "quality-assurance"
relatedArticles: ["deviation-management"]
tags: ["deviations", "classification", "risk assessment", "checklist", "GMP", "quality assurance"]
tier: "Intermediate"
---

This is a ready-to-use decision tool. It turns deviation classification into a repeatable sequence instead of a label someone reaches for. Work the questions in order, record each answer, and let the questions decide the class. Replace every `<<FILL: ...>>` placeholder with your own specifics and route the completed checklist into the deviation record. A worked filled specimen follows the tool so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Deviation Classification Decision Tree |
| Document number | `<<FILL: CHK-ID, e.g. CHK-QA-021-02>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Linked SOP | `<<FILL: SOP-ID for deviation management>>` |
| Used by | `<<FILL: roles, e.g. area owner with QA confirmation>>` |

## How to use this tool

Classification sets the urgency and the depth of the investigation, so it has to be honest. Three rules sit above the tree:

1. Classify on what you know. The class can be provisional at opening and confirmed or revised after the impact assessment, with the change justified.
2. When the answer is genuinely uncertain, classify up. Downgrading later with documented justification is routine; under-classifying to dodge a full investigation is an inspection finding.
3. Data integrity overrides product reasoning. Any loss, alteration, or unattributable change of a GMP record raises the class regardless of the apparent product impact.

## The decision tree

Work from Q1 downward. Stop at the first class the answers point to, then complete the confirmation block.

```
Q1. Could the event affect patient safety, product efficacy, or the integrity of a GMP record?
      NO  -> go to Q4 (likely Minor)
      YES -> go to Q2

Q2. Is the potential harm remediable and boundable?
      (Can the risk be tested, quantified, and contained, and is the affected
       attribute one you can verify?)
      NO, or it may be undetectable, irreversible, or it affects a sterility,
          identity, sterility-assurance, or strength attribute you cannot verify
                                              -> CRITICAL
      YES -> go to Q3

Q3. Does the event have a significant GMP impact on product quality or record integrity?
      YES -> MAJOR
      NO  -> go to Q4

Q4. Is there any plausible impact on product quality, safety, or a critical record?
      NO  -> MINOR
      YES -> reconsider from Q1; do not default to Minor to save work
```

## Step-by-step checklist

Tick each box and record the answer. The class falls out of the answers.

### Step 1: Patient and product

- [ ] Could the event affect patient safety? `<<FILL: Yes / No, with one-line basis>>`
- [ ] Could it affect product efficacy, strength, identity, or quality? `<<FILL>>`
- [ ] Could it affect the integrity of a GMP record (loss, alteration, unattributable change)? `<<FILL>>`

If all three are clearly No, proceed to Step 4. If any is Yes or uncertain, proceed to Step 2.

### Step 2: Is the harm boundable

- [ ] Can the risk be tested or measured? `<<FILL>>`
- [ ] Can the affected scope be contained and the attribute verified? `<<FILL>>`
- [ ] Is the affected attribute one of sterility, sterility assurance, identity, or strength that you cannot fully verify after the fact? `<<FILL>>`

If the harm may be undetectable, irreversible, or affects an unverifiable critical attribute, classify CRITICAL and skip to the confirmation block. Otherwise proceed to Step 3.

### Step 3: Significance of the GMP impact

- [ ] Is this a significant departure that may affect product quality or record integrity, but the risk can be assessed and may be manageable? `<<FILL>>`

If Yes, classify MAJOR and proceed to the confirmation block. If the impact is genuinely low and procedural with no plausible product or record consequence, proceed to Step 4.

### Step 4: Minor test

- [ ] Is the event a low-risk procedural or clerical error with no likely impact on product quality, safety, or a critical record? `<<FILL>>`

If Yes, classify MINOR. If you find yourself choosing Minor to avoid a full investigation, return to Step 1; that pressure is the exact failure this tool guards against.

### Confirmation block (complete for every classification)

- [ ] Data-integrity override applied where relevant (record-integrity impact pushes the class up). `<<FILL: applied / not applicable>>`
- [ ] Provisional class recorded at opening. `<<FILL: Critical / Major / Minor>>`
- [ ] Class confirmed or revised after impact assessment, with justification if changed. `<<FILL>>`
- [ ] Classification is consistent with the investigation depth and the disposition that followed. `<<FILL: Yes / No>>`
- [ ] Classified by (name, signature, date). `<<FILL>>`
- [ ] QA confirmation (name, signature, date). `<<FILL>>`

## Reference examples by class

Use these as a calibration aid, not as a substitute for working the tree.

| Class | Representative events |
|---|---|
| Critical | Sterile product made after a major air-handling failure; batch made with an unapproved substituted active ingredient; confirmed contamination of filled product; deletion of GMP data with no recoverable record. |
| Major | A process parameter exceeded its limit but stayed within a wider justified range; a required signature missing although the activity was performed correctly; a calibration overdue but the instrument later confirmed in tolerance. |
| Minor | A date written in the wrong format; a transcription error on a non-critical field that does not affect the result; a minor administrative slip. |

## Acceptance criteria

A classification is acceptable when all of the following are true:

- The questions were worked in order and each answer is recorded with a one-line basis.
- The data-integrity override was considered, and any record-integrity impact raised the class.
- Uncertainty was resolved by classifying up, not down.
- The final class is consistent with the investigation depth and the disposition.
- The classification is signed by the classifier and confirmed by QA.

## References

> 21 CFR 211.192 (investigation of discrepancies and batch or specification failures, distributed or not).
> ICH Q9, Quality Risk Management (risk-based severity, detectability, and classification logic).
> EU GMP (EudraLex Volume 4), Part I, Chapter 1, Pharmaceutical Quality System.
> ICH Q10, Pharmaceutical Quality System.
> 21 CFR Part 11 and EU GMP Annex 11 (data-integrity considerations that raise classification).
> 21 CFR Part 820 / the Quality Management System Regulation incorporating ISO 13485 (nonconformance severity for devices).

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen

The following shows the tool worked for an example environmental monitoring exceedance, so you can see how the answers drive the class. The company and numbers are illustrative; replace them with your own.

### Event

Viable airborne count at sample point EM-04 in filling room Zone B returned 12 CFU on 01 June 2026 against an action limit of 5 CFU.

### Step 1: Patient and product

| Question | Answer |
|---|---|
| Could it affect patient safety? | Yes. An exceedance in an aseptic filling zone bears on sterility assurance. |
| Could it affect product quality? | Yes. Filled units exposed during the window could be at risk. |
| Could it affect record integrity? | No. The monitoring data is intact. |

Result: at least one Yes, proceed to Step 2.

### Step 2: Is the harm boundable

| Question | Answer |
|---|---|
| Can the risk be tested or measured? | Partly. Sterility testing and media-fill history inform it, but sterility cannot be proven on every unit. |
| Can the scope be contained and the attribute verified? | The affected fill window is identifiable, but sterility of individual units cannot be fully verified after the fact. |
| Is the attribute one of sterility assurance you cannot fully verify? | Yes. |

Result: the affected attribute is sterility assurance, which cannot be fully verified after the fact. Classify CRITICAL.

### Confirmation block

| Item | Entry |
|---|---|
| Data-integrity override applied | Not applicable (data intact). |
| Provisional class at opening | Major (set before the sterility-assurance judgment). |
| Class confirmed or revised | Revised to Critical. Justification: the exceedance sits in an aseptic zone and bears on sterility assurance, which cannot be verified unit by unit. |
| Consistent with investigation and disposition | Yes. Full investigation opened; affected units held pending disposition. |
| Classified by | A. Patel, signed, 01 June 2026 |
| QA confirmation | R. Gomez, signed, 01 June 2026 |

In this example the provisional Major was raised to Critical the moment the tree reached the unverifiable sterility-assurance attribute. That is the tool working as intended: the questions, not the desire for a quick close, set the class. The opposite path, leaving it at Major or downgrading it to Minor to avoid a full investigation, is exactly the under-classification an inspector escalates hard.

## Common inspection findings this checklist prevents

- A critical process deviation classified as "minor" with no investigation behind it.
- Classification recorded as a label with no basis and no link to the impact assessment.
- A record-integrity event classified only on product impact, missing the data-integrity override.
- Uncertainty resolved by classifying down to avoid the workload of a full investigation.
- A class that does not match the investigation depth or the disposition that followed.

## How to adapt this checklist

1. Set your document number, linked SOP, and effective date in the header.
2. If your tiers differ in number or naming, map them onto the Critical, Major, Minor questions and keep the sequence and the data-integrity override.
3. Replace the reference examples with events from your own products and processes so the calibration is real to your site.
4. If a formal severity-times-detectability scoring is used in your risk procedure, attach it as the basis for Step 2 rather than replacing the tree.
5. Confirm every regulation in the references against the current published version before issue.
