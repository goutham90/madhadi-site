---
title: "Risk Assessment: EU AI Act Risk-Tier Classification and Non-High-Risk Justification"
description: "A plug-and-play classification record for one AI system under the EU AI Act: the prohibited-use screen, the two high-risk routes, the Article 6(3) non-high-risk exception with its Article 6(4) documented justification, role determination, and the resulting obligations, with a filled specimen and the articles it satisfies."
pubDate: 2026-06-23
docType: "Risk Assessment"
pillar: "ai-automation"
relatedArticles: ["eu-ai-act-life-sciences"]
tags: ["AI", "EU-AI-Act", "AI-governance", "classification", "risk assessment", "combination-products", "regulatory"]
tier: "Advanced"
---

This is a ready-to-use classification record for a single AI system under the EU AI Act (Regulation (EU) 2024/1689). Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template. This is general guidance to adapt, not legal or regulatory advice; confirm the Act's text, articles, and dates against the current Official Journal version before relying on a classification.

## Document control header

| Field | Entry |
|---|---|
| Record title | EU AI Act Classification: `<<FILL: system name>>` |
| Document number | `<<FILL: CLASS-AI-ID>>` |
| Version | `<<FILL>>` |
| Date | `<<FILL>>` |
| Linked register entry | `<<FILL: register System ID>>` |
| Owner | `<<FILL: AI Governance Lead>>` |

## 1. System description and intended purpose

| Field | Entry |
|---|---|
| System name | `<<FILL>>` |
| What it does | `<<FILL: function, inputs, outputs, the decision it informs>>` |
| Degree of autonomy | `<<FILL: advisory only / influences a human decision / acts without human review>>` |
| Where output is used | `<<FILL: include whether used in the EU>>` |
| Develop or buy | `<<FILL: built in-house / commercial / embedded>>` |

## 2. Step 1: Prohibited-use screen (Article 5)

Screen first, because this is the highest-penalty band.

| Prohibited category (Article 5) | Applies? | Note |
|---|---|---|
| Social scoring | `<<FILL: No / Flag>>` | `<<FILL>>` |
| Untargeted facial-image scraping | `<<FILL>>` | `<<FILL>>` |
| Manipulative or exploitative systems | `<<FILL>>` | `<<FILL>>` |
| Emotion inference in the workplace (narrow medical/safety exception) | `<<FILL>>` | `<<FILL: check HR tools>>` |
| Prohibited biometric categorisation | `<<FILL>>` | `<<FILL: check security tools>>` |
| **Screen result** | Pass / Flag | `<<FILL>>` |

If any category is flagged, stop and escalate to Legal; do not deploy pending resolution.

## 3. Step 2: High-risk determination (Article 6)

**Route 1, Annex I (Article 6(1)): AI inside a regulated product.**

| Question | Answer |
|---|---|
| Is the AI a safety component of, or itself, a product under listed EU product-safety law (e.g. MDR (EU) 2017/745 or IVDR (EU) 2017/746)? | `<<FILL: Yes / No>>` |
| Does that product require third-party (notified-body) conformity assessment? (broadly MDR Class IIa+ or IVDR Class B+) | `<<FILL: Yes / No>>` |
| **Annex I high-risk?** | `<<FILL: Yes if both Yes>>` |

**Route 2, Annex III (Article 6(2)): listed standalone uses** (e.g. employment and worker management, access to essential services, biometric identification, critical infrastructure).

| Question | Answer |
|---|---|
| Does the system fall in an Annex III category? | `<<FILL: Yes / No, which>>` |
| **Annex III high-risk (subject to the exception below)?** | `<<FILL>>` |

## 4. Step 2a: Article 6(3) non-high-risk exception (only if Annex III applied)

A provider may treat an Annex III system as not high-risk if it does not pose a significant risk of harm. This section is the Article 6(4) documented justification and must be completed before the system goes on the market.

| Exception condition (Article 6(3)) | Met? | Justification |
|---|---|---|
| Performs a narrow procedural task | `<<FILL>>` | `<<FILL>>` |
| Only improves the result of completed human activity | `<<FILL>>` | `<<FILL>>` |
| Detects patterns / deviations without replacing or influencing the human assessment | `<<FILL>>` | `<<FILL>>` |
| Performs a preparatory task to an assessment | `<<FILL>>` | `<<FILL>>` |
| Does the system profile natural persons? (if yes, always high-risk, exception unavailable) | `<<FILL: No required to use exception>>` | `<<FILL>>` |
| **Conclusion** | Not high-risk / High-risk | `<<FILL: the reasoned basis>>` |

## 5. Step 3 and 4: Limited and minimal risk (if not high-risk)

| Question | Answer |
|---|---|
| Does it interact with people or generate/manipulate content? | `<<FILL: Yes -> limited risk (transparency duties) / No>>` |
| If not prohibited, high, or limited: minimal risk | `<<FILL>>` |

## 6. Role determination

| Question | Answer |
|---|---|
| Do you develop it or have it built and put it on the market under your name? | `<<FILL: Yes -> Provider>>` |
| Do you use it under your own authority in a professional context? | `<<FILL: Yes -> Deployer>>` |
| Did you substantially modify or retrain a bought system, changing its purpose or behaviour? | `<<FILL: Yes -> you may become the Provider of a new system>>` |
| **Role** | `<<FILL: Provider / Deployer / Both>>` |

## 7. Resulting obligations and owners

| Obligation area (scaled to tier and role) | Applies? | Internal owner |
|---|---|---|
| Risk-management system across lifecycle | `<<FILL>>` | `<<FILL>>` |
| Data governance and data-quality for training/validation/test data | `<<FILL>>` | Data Science |
| Technical documentation (kept current) | `<<FILL>>` | `<<FILL>>` |
| Automatic logging / record-keeping | `<<FILL>>` | `<<FILL>>` |
| Human oversight design | `<<FILL>>` | `<<FILL>>` |
| Accuracy, robustness, cybersecurity | `<<FILL>>` | `<<FILL>>` |
| Quality management system | `<<FILL>>` | Quality |
| Conformity assessment and CE marking (high-risk) | `<<FILL>>` | Regulatory Affairs |
| Registration and post-market monitoring | `<<FILL>>` | `<<FILL>>` |
| Transparency (limited risk: disclose AI / mark content) | `<<FILL>>` | `<<FILL>>` |
| GDPR lawful basis and DPIA | `<<FILL>>` | Legal / Privacy |

## 8. Conclusion

| Field | Entry |
|---|---|
| Final classification | `<<FILL: Prohibited / High-risk (Annex I or III) / Limited / Minimal>>` |
| Role | `<<FILL>>` |
| Applicable deadline (verify current) | `<<FILL>>` |
| Re-classification triggers | Retraining, repurposing, new intended use, change of provider, Act amendment |

## 9. References

> Regulation (EU) 2024/1689: Article 5; Article 6(1) and Annex I; Article 6(2) and Annex III; Article 6(3) and 6(4); transparency obligations (Article 50).
> EU MDR (EU) 2017/745 and IVDR (EU) 2017/746 for the device-constituent route.
> GDPR (EU) 2016/679 for the personal-data overlap.
> Confirm articles and dates against the current Official Journal text; the Digital Omnibus package may alter dates and details.

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (AI Governance) | `<<FILL>>` | | |
| Reviewer (Legal/Regulatory) | `<<FILL>>` | | |
| Approver (Quality) | `<<FILL>>` | | |

---

## Filled specimen

Classification of an example operational quality model (illustrative).

| Field | Entry |
|---|---|
| System | Deviation-triage model that ranks open deviations by suggested investigation priority |
| Autonomy | Advisory: ranks deviations already opened by humans; humans decide and act |
| Article 5 screen | Pass |
| Annex I route | No (not a regulated product) |
| Annex III route | Not in an Annex III category (not employment, essential services, or biometric) |
| Article 6(3) | Not reached (Annex III did not apply); even if it had, the model only improves the result of completed human activity and does not profile persons |
| Limited risk? | No (does not interact with the public or generate content) |
| Final classification | Minimal risk |
| Role | Provider and Deployer (built in-house for own use) |
| Obligations | No mandatory AI-Act obligations; voluntary good practice applies. Documented here so the conclusion survives a question. |

Contrast with the connected dosing device feature: assessed on its own the device constituent is MDR Class IIa and needs a notified body, so the AI is high-risk by the Annex I route, the role is provider, and the full conformity regime applies, assessed inside the MDR procedure (see [matrix-ai-act-mdr-ivdr-crosswalk](/templates/matrix-ai-act-mdr-ivdr-crosswalk)).

## Common findings this record prevents

- A "minimal-risk" or "not-high-risk" conclusion with no written reasoning.
- Using the Article 6(3) exception without the Article 6(4) documented assessment made before market.
- Misreading the role: treating yourself as a deployer when you built or retrained the model.
- Skipping the prohibited-use screen on HR and security tools.
- Treating MDR/IVDR conformity as if it covered the AI-Act requirements.

## How to adapt this record

1. Complete one record per AI system and link it to the inventory register row.
2. Run the steps in order: prohibited screen, high-risk routes, exception, transparency.
3. Record the Article 6(4) justification as controlled data when you rely on the exception.
4. Assign each resulting obligation to a named internal owner.
5. Confirm the articles and deadlines against the current Official Journal text.
