---
title: "Building AI Tools for GxP: What Actually Works"
description: "Practical lessons from building AI-assisted compliance tools in regulated pharma environments — where the hype ends and the useful stuff begins."
pubDate: 2026-05-20
tags: ["AI", "GxP", "automation", "compliance"]
---

Everyone in pharma has sat through a presentation about AI transforming drug development. The slides are always the same: neural networks reading MRI scans, AI writing clinical study reports, machine learning cutting trial times in half.

Here's what I actually use AI for in my work: audit trail anomaly detection, document gap analysis, and classification of deviations. None of it is glamorous. All of it saves significant time and catches things humans miss.

This is what building AI tools for GxP actually looks like.

## The Constraint That Changes Everything

In a regulated environment, an AI tool doesn't just need to work. It needs to be **validated**.

FDA expects that computerized systems used in GxP activities are validated for their intended use. This means: documented requirements, test scripts, execution records, and a change control process for updates. A Python script running Claude's API to flag audit trail anomalies is a computerized system in FDA's view.

This constraint shapes every decision. You don't deploy a new model version on a Tuesday because performance improved. You write a change control, assess the impact, test against documented acceptance criteria, and get QA approval.

This is not as slow as it sounds if you design for it upfront. But if you build first and think about validation later, you will rebuild.

## What Actually Works

### 1. Document classification and gap analysis

GxP environments produce enormous amounts of documentation: SOPs, batch records, validation protocols, training records, deviation reports, CAPAs. Ensuring that a batch record references the correct version of every associated SOP — and that the SOP itself covers every step in the batch record — is the kind of cross-referencing work that humans do slowly and inconsistently.

An LLM-based classifier does this well. You give it a batch record section and the relevant SOP, and ask: does this SOP provide adequate instruction for this step? The output isn't a decision — it's a flagged list for human review.

This pattern (AI screens, human decides, decision is documented) is the right model for GxP AI tools. It doesn't replace the reviewer. It makes the reviewer's time go further.

### 2. Deviation categorization and CAPA suggestion

Incoming deviation reports need to be categorized by type, assigned a risk level, and routed to the right investigator. In a busy manufacturing environment, this happens at volume.

An AI classifier trained on historical deviations (or prompted with examples) categorizes new deviations with reasonable accuracy and suggests similar historical cases for reference. The investigator still writes the deviation report and the CAPA — the AI gives them a starting point and surfaces relevant precedent.

The accuracy doesn't need to be perfect. It needs to be good enough that the reviewer catches the errors, which requires the reviewer to actually review, not just approve. Design the workflow around that assumption.

### 3. Audit trail pattern detection

This is the highest-value application I've built. Audit trails in GxP systems can run to millions of entries across a manufacturing campaign. Manual review covers a sample. AI can cover everything.

The patterns worth detecting:

- **Temporal anomalies**: entries created at 2 AM on a Sunday, entries timestamped before the process they document, bulk edits clustered in time
- **User behavior outliers**: a user whose edit frequency spikes anomalously during a specific batch, entries attributed to users who were on leave
- **Value revision patterns**: fields that are edited multiple times before being finalized, particularly in high-criticality records like release assay results

The output is a flagged set of entries for QA investigation. The flagging is not a finding. The investigation is what produces a finding or a clearance.

## What Doesn't Work (Yet)

**Automated narrative generation for batch records**: LLMs generate plausible-sounding text, but in a batch record, every sentence has to be traceable to actual data. The hallucination risk is too high for this use case without a robust retrieval and verification layer. Not there yet.

**Predictive CAPA effectiveness**: the idea of predicting whether a CAPA will be effective before it's closed is interesting but requires more structured historical data than most organizations have in a clean, queryable form.

**Anything that requires real-time instrument integration**: the latency and reliability requirements for in-process monitoring don't fit well with current LLM architectures. This is an area for classical ML or rule-based systems, not LLMs.

## Practical Setup

For internal GxP AI tools, the stack I use:

- **Python** for all processing and data handling
- **Anthropic Claude API** for language tasks (classification, extraction, comparison)
- **Structured prompts with explicit output schemas** — JSON output, validated against a schema before it touches anything
- **All results written to a log** — every API call, input, output, timestamp, user context
- **Human review step built into the workflow** — not as an afterthought, as a hard requirement in the code

The logging requirement is non-negotiable for GxP use. If an AI-assisted review is ever questioned in an inspection, you need to show exactly what the AI was given, what it returned, and what the human reviewer did with that output. If you can't reconstruct that, the tool shouldn't be in a GxP workflow.

## The Honest Assessment

AI tools in GxP are useful for specific, bounded tasks where the risk of error is caught by a downstream human review step. They are not useful — yet — as autonomous decision-makers in regulated workflows.

The companies that will get the most value out of AI in compliance are the ones that understand this distinction, design accordingly, and build the validation infrastructure upfront instead of retrofitting it after the fact.

That's not a limitation of AI. That's just how regulated industries work, and for good reason.
