---
title: "Data Integrity in Gene Therapy: What FDA Really Expects"
description: "A practical breakdown of FDA's data integrity expectations for gene therapy manufacturers, beyond the checklist, into the actual inspection findings."
pubDate: 2026-04-07
tags: ["data-integrity", "FDA", "gene-therapy", "GxP"]
tier: "Advanced"
pillar: "cell-gene-therapy"
---

Gene therapy is arguably the most data-intensive category of biologics the FDA regulates. A single BLA submission for a base editing therapeutic can involve hundreds of assay datasets, manufacturing batch records, stability profiles, and clinical data packages, all of which need to hold together under the scrutiny of a regulatory reviewer who has seen every kind of data manipulation, system misconfiguration, and documentation failure imaginable.

After years of building data integrity programs in this space, here's what I've learned about what FDA actually looks for, versus what most companies prepare for.

## The Gap Between Guidance and Reality

FDA's data integrity guidance (2016, updated 2018) lays out ALCOA+: Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available. Every quality team in pharma has a slide deck on this.

What the slide deck doesn't cover is that FDA's inspectors aren't walking in looking for ALCOA+ violations. They're looking for **systems that allow manipulation without detection**, whether or not manipulation actually occurred.

This is a critical distinction. A company can have perfect data, every audit trail clean, every record complete, and still receive a data integrity 483 because their LIMS allows backdating without forcing a reason code, or because their ELN doesn't timestamp edits at the field level.

The violation isn't the data. The violation is the control gap.

## What Gets You a 483

Based on inspection trends and warning letters, the findings cluster into a few recurring failure modes:

**1. Audit trail gaps in computerized systems**

Not "audit trails disabled", inspectors find that immediately. The problem is partial audit trails: systems where the audit trail captures record creation and deletion, but not field-level edits. You can change a value in a spreadsheet, and the audit trail shows "modified" with a timestamp, but not the previous value.

FDA expects the audit trail to be complete enough that any change to raw data can be reconstructed. If it can't, the system fails 21 CFR Part 11.

**2. Shared login credentials**

Still happening in 2026. When two analysts share a login "for convenience," every record they create is unattributable. This doesn't just fail Part 11, it makes the data scientifically uninterpretable, because you can't establish who performed what step.

Gene therapy workflows are particularly susceptible because of the number of specialized assays (ddPCR, flow cytometry, potency assays) that run on instrument-specific software with legacy access controls.

**3. Data transfer without verification**

Raw data exported from an instrument, moved to a network share, imported into a LIMS, at each transfer step, where is the checksum? Where is the verification that the imported values match the exported values? In most organizations, the answer is: the analyst looks at the numbers.

That's not a control. That's an opportunity for error.

**4. Test failures deleted before batch disposition**

This one leads to warning letters. Analyst runs an out-of-specification result, concludes the instrument was "off," reruns. Deletes the first run from the instrument software. The only record that remains is the passing result.

FDA's position: all raw data, including failing runs, must be retained and investigated per OOS procedures. The decision to invalidate data must be documented with scientific justification, not deleted.

## What Good Looks Like

In a well-built data integrity program for a gene therapy manufacturer, you'd expect:

- **Instrument-to-LIMS data transfer with automated verification**, hash comparison or similar, logged in both the instrument software and LIMS audit trail
- **Individual user accounts everywhere**, no service accounts for human users, no shared passwords, enforced via IAM
- **Audit trail review built into batch release**, not a separate audit, but a documented step in the batch record that a QA reviewer confirmed the audit trail for this batch
- **OOS/OOT procedures that explicitly address electronic data**, what to do when a result is outside specification in a computerized system, before touching anything
- **Periodic system validation reviews**, confirming the validated state of computerized systems as software versions and configurations change

None of this is novel. All of it requires organizational discipline to actually execute, especially at the pace gene therapy companies move.

## The AI Angle

Increasingly, I'm seeing interest in using AI to do automated audit trail review, pattern detection for anomalies like off-hours entries, back-to-back edits, sequences that statistically don't match the process. This is a genuinely useful application.

The caution: AI-generated findings need to feed a documented review process. An AI flagging a potential anomaly is not a data integrity finding. A qualified reviewer investigating that flag and documenting their conclusion, that's a finding. The AI is a screen, not a decision.

I'll write more about this specifically in a future post.

## The Bottom Line

FDA's data integrity expectations for gene therapy are high because the stakes are high. A patient receiving a one-time base editing treatment has no recourse if the data supporting the product's safety and efficacy was unreliable.

The companies that pass data integrity inspections aren't the ones with the most documentation, they're the ones with systems that make manipulation difficult, make errors detectable, and make the full history of every data point available for review. That's the standard worth building toward.
