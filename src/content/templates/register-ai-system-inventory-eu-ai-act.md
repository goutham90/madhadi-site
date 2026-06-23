---
title: "Log: AI System Inventory and EU AI Act Classification Register"
description: "A plug-and-play register of every AI system a life-sciences company develops or uses, with the fields the EU AI Act forces you to decide: provider or deployer role, risk tier and the route to it, GPAI dependency, prohibited-use screen, owner, and review date, with field definitions, a filled sample row, and the regulations it satisfies."
pubDate: 2026-06-23
docType: "Log"
pillar: "ai-automation"
relatedArticles: ["eu-ai-act-life-sciences"]
tags: ["AI", "EU-AI-Act", "AI-governance", "inventory", "register", "classification", "regulatory"]
tier: "Intermediate"
---

This is a ready-to-use register. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control. A worked filled sample row follows the field definitions. This is general guidance to adapt, not legal or regulatory advice; confirm the EU AI Act text and dates against the current Official Journal version before relying on a classification.

## Document control header

| Field | Entry |
|---|---|
| Register title | AI System Inventory and EU AI Act Classification Register |
| Document number | `<<FILL: register ID>>` |
| Owner | `<<FILL: e.g. AI Governance Lead / Head of Quality>>` |
| Review cadence | `<<FILL: e.g. quarterly>>` |
| Last reviewed | `<<FILL: date>>` |

## Purpose

The EU AI Act (Regulation (EU) 2024/1689) applies based on where an AI system or its output is used, so a US-headquartered company can be in scope. You cannot classify what you have not found. This register is the foundation step: a single list of every AI system the company develops or uses, reaching beyond the lab and plant into HR, security, IT, and commercial, with the classification decisions recorded as controlled data.

## Field definitions

| Field | Format | Required | Who enters | When |
|---|---|---|---|---|
| System ID | text / code | Yes | Register owner | At entry |
| System name and short description | text | Yes | System owner | At entry |
| Business function and location of use | text (incl. EU use?) | Yes | System owner | At entry |
| Develop or buy | Built in-house / Commercial / Embedded in vendor product | Yes | System owner | At entry |
| AI Act role | Provider / Deployer / Both | Yes | AI Governance | At classification |
| Uses a GPAI model? | Yes (name model and provider) / No | Yes | Data Science | At classification |
| Prohibited-use screen (Article 5) | Pass / Flag (describe) | Yes | Legal / Privacy | At classification |
| Risk tier | Prohibited / High-risk / Limited / Minimal | Yes | AI Governance | At classification |
| High-risk route (if high) | Annex I (product) / Annex III (use) | Conditional | Regulatory / AI Governance | At classification |
| Classification basis (record reference) | doc ID | Yes | AI Governance | At classification |
| Personal data / GDPR touchpoint | Yes (DPIA ref) / No | Yes | Legal / Privacy | At classification |
| Accountable owner | name / role | Yes | Register owner | At entry |
| Status and next review | text + date | Yes | Register owner | Ongoing |

## How to use it

1. **Find everything.** Sweep the lab, plant, HR, security, IT, and commercial. Include AI hidden inside vendor features.
2. **Assign the role per system.** Building your own model makes you a provider, even if it never leaves the company. Buying and running a tool makes you a deployer. You can be both.
3. **Screen for prohibited use first.** Article 5 is the highest-penalty band and its deadline (2 February 2025) has passed. Check HR, security, and workforce tools especially.
4. **Classify by tier and record the basis.** Where you conclude "not high-risk" under an Annex III exception, capture the Article 6(4)-style assessment as a controlled record (see [assessment-eu-ai-act-classification](/templates/assessment-eu-ai-act-classification)).
5. **Flag the GDPR touchpoint** so the data-protection screen runs alongside the AI-Act one.
6. **Review on cadence** and whenever a system is added, retrained, or repurposed (which can flip a deployer into a provider).

## The register

| System ID | Name / description | Function / EU use | Develop or buy | AI Act role | GPAI? | Art. 5 screen | Risk tier | High-risk route | Classification ref | GDPR / DPIA | Owner | Status / next review |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## Retention

Retain the register and each classification record per your records retention schedule, for not less than `<<FILL: retention period>>`, and keep superseded classifications so a decision can be reconstructed.

## References

> Regulation (EU) 2024/1689 (EU AI Act): Article 5 (prohibited practices), Article 6 (high-risk classification, Annex I and Annex III), Article 6(3) and 6(4) (non-high-risk exception and its documentation).
> General Data Protection Regulation (EU) 2016/679 for the personal-data touchpoint.
> Note the Digital Omnibus simplification package may change high-risk dates and details; confirm the adopted text.

---

## Filled sample rows

Illustrative entries showing the range of systems and tiers (company and systems are fictitious).

| System ID | Name / description | Function / EU use | Develop or buy | AI Act role | GPAI? | Art. 5 screen | Risk tier | High-risk route | Classification ref | GDPR / DPIA | Owner | Status / next review |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-001 | Deviation-triage model suggesting investigation priority | Quality, used by EU site | Built in-house | Provider and Deployer | No | Pass | Minimal (only ranks completed human input, no decision) | N/A | CLASS-AI-001 | No | Head of Quality | Active, review Q4 2026 |
| AI-002 | Dosing-guidance feature in a connected delivery device (combination product) | Patient-facing, EU market | Built in-house | Provider | No | Pass | High-risk | Annex I (MDR Class IIa constituent) | CLASS-AI-002 | Yes, DPIA-014 | Reg Affairs | Active, conformity assessment planned |
| AI-003 | HR vendor tool inferring candidate sentiment from interview video | Recruitment, EU candidates | Commercial | Deployer | No | Flag: possible emotion inference in workplace | Prohibited (under review with Legal) | N/A | CLASS-AI-003 | Yes, DPIA-018 | HR / Legal | On hold pending Legal review |
| AI-004 | Patient-support chatbot on the company website | Commercial, EU users | Commercial (on vendor LLM) | Deployer | Yes (vendor LLM) | Pass | Limited (transparency: disclose AI) | N/A | CLASS-AI-004 | Yes, DPIA-021 | Commercial | Active, AI disclosure added |

The HR tool (AI-003) is the kind of edge case the inventory exists to surface: not core science, but potentially a prohibited practice in the highest penalty band, found only because the sweep reached HR.

## Common findings this register prevents

- "We are a US company" used as an exemption while EU sites use the AI or its output.
- Hidden AI inside a vendor feature, never inventoried or classified.
- A "minimal-risk" assertion with nothing written down to support it.
- A prohibited HR or security tool missed because the sweep stopped at the lab.
- A model retrained or repurposed without re-checking whether the role flipped to provider.

## How to adapt this register

1. Set the document number, owner, and review cadence.
2. Add columns your governance needs (cost centre, vendor, data sources).
3. Link each row to its classification record and any DPIA.
4. Run the sweep across all functions, not just the obvious technical ones.
5. Confirm the AI Act articles and dates against the current Official Journal text.
