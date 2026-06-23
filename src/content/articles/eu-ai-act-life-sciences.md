---
title: "The EU AI Act and Life Sciences: Scope, Risk Tiers, and GxP Overlap"
description: "A working account of the EU AI Act for biotech, pharma, biologics, and combination-product companies: scope, the risk-tier classification, how it overlaps with GxP and combination-product obligations, the phased dates, and provider versus deployer duties."
pubDate: 2026-06-22
tags: ["AI", "EU-AI-Act", "regulatory", "combination-products", "GxP", "AI-governance"]
pillar: "ai-automation"
tier: "Intermediate"
---

The EU AI Act is the first broad, horizontal law that regulates artificial intelligence by risk rather than by sector. It is Regulation (EU) 2024/1689, it entered into force on 1 August 2024, and it applies across the whole single market to anyone who develops, sells, or uses AI systems with effects in the European Union, including companies based outside it. For a biotech, pharma, biologics, or combination-product organisation, that creates a second regulatory track running alongside the GxP rules you already follow, and the two tracks overlap in ways that are easy to get wrong.

This article is a working account of what the Act requires, how its risk tiers classify the AI you are likely to build or buy, where it intersects with GMP and (for any device-constituent part of a combination product) the medical-device rules, what the phased dates are (including a proposed change that is not yet final), and what a regulated company should actually do. It is written so that after reading it you could scope the work, brief a quality or regulatory committee, and answer the questions an interviewer or an auditor will ask. It is general guidance to adapt and verify against the current text and your own legal advice, not a compliance directive.

If you have not yet built a base in how AI sits inside a regulated quality system, read [AI governance in GxP](/articles/ai-governance-gxp) and [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems) first. The Act adds a legal layer on top of that quality work; it does not replace it.

---

## Scope: Who and What the Act Covers

The Act regulates "AI systems" and "general-purpose AI models" placed on the EU market or whose output is used in the EU. Two scoping facts matter most for a life-sciences company.

**It is extraterritorial.** The obligations attach based on where the AI is used or where its output lands, not where the company sits. A US-headquartered manufacturer whose deviation-triage model is used by an EU site, or whose AI-enabled device is sold in the EU, is in scope. This mirrors how the General Data Protection Regulation reached non-EU companies, and it means "we are a US company" is not an exemption.

**It is role-based.** The same AI system carries different duties depending on what role you play. The two roles that matter most are the *provider* (broadly, the party that develops an AI system or has it developed and puts it on the market under its own name) and the *deployer* (the party that uses an AI system under its own authority in a professional context). A pharma or biologics manufacturer that builds an AI model into its own operations, or a combination-product maker that builds AI into a drug-device product, is a provider. A site or a manufacturer that buys a commercial AI tool and runs it is a deployer. You can be both at once: build a model in-house for your own operations and you are effectively the provider and the deployer of that system. Get the role wrong and you size the obligations wrong.

The Act layers four things on top of each other: a list of banned uses, heavy duties for "high-risk" systems, light transparency duties for a "limited-risk" middle band, and near-nothing for everything else. Plus a separate regime for general-purpose AI models. The rest of this article works through each.

The classification decision, for any one system, runs in a fixed order. Screen for a prohibited use first, because that is the highest-penalty band; then test the two high-risk routes; then check the transparency trigger; what is left is minimal-risk.

<div class="flow">
  <div class="flow-step">AI system</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Article 5 prohibited use? Yes &rarr; banned</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Annex I product or Annex III use? Yes &rarr; high-risk</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Interacts with people / generates content? Yes &rarr; limited (transparency)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Otherwise &rarr; minimal</div>
</div>

---

## The Risk Tiers

> Under Article 6(2), the standalone uses listed in Annex III are treated as high-risk by default. (Regulation (EU) 2024/1689, Article 6(2))

The Act sorts AI into tiers by the risk it poses to health, safety, and fundamental rights. The duties scale with the tier. The four tiers, from most to least restricted:

| Tier | What it means | Core obligation | Life-sciences relevance |
|---|---|---|---|
| Unacceptable (prohibited) | Uses judged to threaten fundamental rights or safety | Banned outright | Mostly not your AI, but watch HR and security uses (see below) |
| High-risk | Significant potential for harm to health, safety, or rights | Full conformity regime: risk management, data governance, technical documentation, logging, human oversight, accuracy and reliability, CE-type assessment | AI-enabled medical devices and IVDs land here; some operational AI may too |
| Limited risk | Interacts with people or generates content | Transparency: tell people they are dealing with AI or with AI-generated content | Patient-facing chatbots, AI-drafted content |
| Minimal risk | Everything else | No mandatory rules; voluntary codes encouraged | Most internal productivity and back-office AI |

### Unacceptable risk: the prohibited practices

Article 5 bans a defined set of uses outright. The banned categories include social scoring, untargeted scraping of facial images to build recognition databases, certain manipulative or exploitative systems, and, important for employers, *emotion inference in the workplace* (with a narrow exception for medical or safety reasons) and certain biometric categorisation. These prohibitions applied first, on 2 February 2025.

A life-sciences company rarely builds prohibited AI in its core science. The exposure is usually at the edges: an HR vendor's tool that infers candidate emotion from interview video, a security system doing biometric categorisation, a workforce-analytics product. The action here is an *inventory* that reaches HR, facilities, and security, not just the lab and the plant. A banned use carries the heaviest penalty band, up to EUR 35 million or 7 percent of global annual turnover, whichever is higher.

### High-risk: where most regulated AI lands

Two routes put an AI system in the high-risk tier.

**Route 1, Annex I (Article 6(1)): AI inside a regulated product.** If an AI system is a safety component of, or is itself, a product covered by listed EU product-safety law *and* that product already needs third-party conformity assessment, the AI is high-risk. The Medical Devices Regulation (EU) 2017/745 (MDR) and the In Vitro Diagnostic Regulation (EU) 2017/746 (IVDR) are on that list. For the pharma and biologics world this route bites mainly through combination products: where a drug-device combination has a device constituent that, assessed on its own, would need a notified body (broadly MDR Class IIa and above, or IVDR Class B and above), AI in that constituent is high-risk under the Act by this route. The same is true of any standalone AI-enabled diagnostic or software as a medical device a company puts on the market. This overlap is consequential where it applies and is covered in detail below.

**Route 2, Annex III (Article 6(2)): listed standalone uses.** Annex III lists standalone high-risk uses such as AI in employment and worker management, access to essential services, biometric identification, and critical infrastructure. Most pharma manufacturing-quality AI does not fall in an Annex III category, but employment-related AI used by your HR function can.

There is a carve-out worth knowing. Article 6(3) lets a provider treat an Annex III system as *not* high-risk if it does not pose a significant risk of harm, for example because it performs a narrow procedural task or only improves the result of completed human work and does not replace or influence the human decision. A system that profiles individuals is always high-risk regardless. If you rely on this exception, Article 6(4) requires you to document the assessment before the system goes on the market. Treat that documented assessment as a controlled record, not a casual note.

What "high-risk" obligates is substantial. A provider of a high-risk system must, broadly:

- run a risk-management system across the AI lifecycle;
- apply data-governance and data-quality measures to training, validation, and test data;
- produce technical documentation and keep it current;
- design in automatic logging (record-keeping) of events;
- enable meaningful human oversight;
- meet appropriate levels of accuracy, reliability, and cybersecurity (the requirement the Act states as accuracy, robustness, and cybersecurity);
- operate a quality-management system;
- undergo conformity assessment and carry the CE marking;
- register the system and run post-market monitoring.

If that list reads like GxP computerised-system validation and a quality system, that is the point. The mechanics rhyme with what you already do, which is both an opportunity (reuse your QMS) and a trap (the legal bases and the assessor are different).

### Limited risk: transparency duties

Systems that interact with people or generate content carry a lighter duty: make the AI nature visible. If a patient or a user is talking to a chatbot, they must be told it is AI unless that is obvious. AI-generated or AI-manipulated content (synthetic audio, image, video, text in some cases) must be marked as such. For a life-sciences company this reaches patient-support chatbots, AI-drafted patient or HCP communications, and any synthetic media in training or marketing.

### Minimal risk: most internal AI

Everything not caught above, spam filters, scheduling helpers, most back-office productivity AI, has no mandatory obligation under the Act. Voluntary codes of conduct are encouraged. The practical task is to be able to *demonstrate* that a given system is genuinely minimal-risk, which means you classified it deliberately and wrote down why, rather than assuming.

### General-purpose AI models: a parallel track

Separately from the tiers, the Act regulates *general-purpose AI (GPAI) models*, the large foundation models. Providers of these models must produce technical documentation, give downstream integration information, put a copyright policy in place, and publish a summary of training content. Models judged to carry *systemic risk*, with the headline threshold set at training compute above 10^25 floating-point operations, carry extra duties: adversarial testing, systemic-risk assessment and mitigation, incident reporting, and cybersecurity.

For most life-sciences companies you are a *downstream user* of a GPAI model accessed through an API, not the model provider. You do not inherit the model-provider duties. But the model-provider's documentation is your input: it feeds your own validation and your supplier assessment. When you build a regulated workflow on top of a vendor large language model, the prompt, retrieval setup, guardrails, and output handling are the part you own and must control. See [qualifying LLMs and generative AI for GxP](/articles/qualifying-llms-genai-gxp) for how that plays out in a validated environment.

---

## The Combination-Product and Device-Constituent Overlap, in Detail

For the pharma and biologics world this overlap shows up wherever AI sits in a device constituent of a combination product, or in a standalone diagnostic or software as a medical device a company also sells. Where it applies, it cannot be misread, so work it step by step.

**WHY it matters.** An AI-enabled device constituent or diagnostic now sits under *two* EU regimes at once: the sector law (MDR or IVDR) and the AI Act. They are not alternatives. The AI Act adds requirements; it does not displace MDR/IVDR. The risk is double-counting effort, or worse, assuming MDR compliance covers the AI Act and finding a gap at audit.

**WHAT the overlap is.** Both regimes demand a quality-management system, risk management, technical documentation, clinical or performance evidence, post-market surveillance, and a conformity assessment by a notified body that ends in CE marking. The Act's design intent is integration, not duplication: where a device already goes through MDR/IVDR conformity assessment, the AI-Act high-risk requirements are meant to be assessed within that same procedure, and the device's existing technical documentation is meant to be extended to cover the AI-specific elements rather than duplicated in a separate file.

**HOW to approach it, step by step.**

1. Confirm the device's MDR/IVDR class and whether it needs a notified body. If yes (broadly MDR Class IIa+ or IVDR Class B+), assume the AI is high-risk under the Act via the Annex I route.
2. Map the AI-Act high-risk requirements onto your existing MDR/IVDR deliverables. Most map onto something you have: AI-Act risk management onto your ISO 14971 file, data governance onto your design and verification records, logging onto your device-software design, human oversight onto your instructions for use and labelling, post-market monitoring onto your MDR post-market surveillance plan.
3. Identify the genuinely *new* elements the Act adds, principally the data-governance and data-quality discipline for training/validation/test data, the AI-specific transparency and human-oversight design, and the AI-Act technical-documentation annex. Build those, do not rebuild what you have.
4. Confirm your notified body is designated for the AI-Act assessment as well as MDR/IVDR, and plan the assessment as one combined exercise. Note that notified-body capacity and the harmonised standards that make the requirements concrete are still maturing, which is part of why the deadline (below) is under pressure.
5. Keep a single, traceable line from MDR/IVDR evidence to AI-Act requirement so an assessor can see one coherent file, not two parallel ones.

**ACCEPTANCE CRITERIA.** You can show, for each AI-Act high-risk requirement, the specific MDR/IVDR deliverable that satisfies it or the new deliverable you created; the training/validation/test data governance is documented to the Act's data-quality expectations; human oversight and AI transparency are designed in and reflected in the IFU; and the conformity-assessment plan names a notified body covering both regimes.

**WORKED EXAMPLE.** A biologics company markets a combination product whose device constituent is a connected delivery system with an AI feature that adjusts dosing guidance from patient inputs. Assessed on its own the device constituent would be MDR Class IIa and need a notified body, which makes the AI high-risk under the Act. The team does not start over. It maps the MDR risk file to the AI-Act risk-management requirement, extends the device-constituent technical documentation with an AI annex (model description, intended purpose, data lineage, performance against a held-out test set, human-oversight design), adds explicit data-governance records showing the training data was representative across the intended patient population, and confirms the notified body will assess the AI-Act elements inside the MDR procedure for the constituent. The output is one extended file and one combined assessment, not two programmes. The deeper treatment of AI in software as a medical device, including the device-constituent part of a combination product, is in [AI and machine learning in SaMD](/articles/ai-ml-medical-devices-samd), and the regulatory frame is the EU MDR and IVDR.

---

## Provider Versus Deployer: Who Owes What

The role split is the most common source of confusion, so be deliberate about it.

| Dimension | Provider | Deployer |
|---|---|---|
| Who it is | Develops the AI system, or has it built, and puts it on the market under its own name; can be inside or outside the EU | Uses the AI system under its own authority in a professional context |
| Typical life-sciences example | A company building AI into a combination product's device constituent; a manufacturer building its own quality model for internal use | A manufacturer or site buying and running a commercial AI tool |
| Core duties (high-risk) | The full conformity regime: risk management, data governance, technical documentation, logging, human-oversight design, accuracy and reliability and cybersecurity, QMS, conformity assessment, registration, post-market monitoring | Use the system per the provider's instructions; ensure human oversight; ensure input data is relevant and representative for the intended use; monitor operation and keep logs; inform the provider/authorities of risks or serious incidents; where required, run a fundamental-rights impact assessment |
| Where the burden sits | Heaviest | Significant but lighter than the provider |

Two traps to avoid. First, *building your own model makes you a provider*, even if it never leaves your company, so you take on provider-level duties for that system. Second, *substantial modification can flip a deployer into a provider*: if you take a commercial high-risk system and materially change its intended purpose or retrain it in a way that changes its behaviour, you may become the provider of a "new" system and inherit those duties. Treat retraining and repurposing of a third-party model as a role-changing event, governed under [change control for validated systems](/articles/change-control-validated-systems).

**ROLES, internally.** Decide early who owns the Act inside your organisation. A workable split: a named accountable owner per AI system (often the system or product owner); Regulatory Affairs owning the conformity-assessment pathway and notified-body interaction for any AI in a combination product's device constituent; Quality owning the QMS overlap and the documented classification decisions; Legal/Privacy owning the prohibited-use screen and the GDPR interaction; and Data Science owning the data-governance and performance evidence. The failure mode is leaving it unowned because it "sounds like an IT or a legal thing," and discovering at assessment that no function built the file.

---

## Timelines and Phasing (and a Change That Is Not Yet Final)

The Act phases in. These are the dates set in the original Regulation (EU) 2024/1689, counted from entry into force on 1 August 2024:

| Date | What applies |
|---|---|
| 2 February 2025 | Prohibited practices (Article 5) and AI-literacy obligations |
| 2 August 2025 | General-purpose AI model rules; governance and national-authority provisions; penalty framework |
| 2 August 2026 | High-risk systems under Annex III (standalone listed uses); general full application |
| 2 August 2027 | High-risk systems under Annex I (AI embedded in regulated products, including MDR/IVDR devices) |

So a device maker reading the original text would plan for 2 August 2027 on the embedded-product route, while a company with an Annex III standalone use would plan for 2 August 2026.

**The change to flag, clearly, as not yet settled law.** Through 2025 the rollout fell behind, in large part because the harmonised standards and guidance companies need to implement the high-risk rules were not ready. In November 2025 the European Commission proposed a package, widely referred to as the Digital Omnibus on AI, that would defer the high-risk deadlines. On 7 May 2026 the Council, Parliament, and Commission were reported to have reached a *provisional political agreement* on a deferral that would move the Annex III high-risk deadline to around 2 December 2027 and the Annex I embedded-product deadline to around 2 August 2028, among other simplifications. Formal adoption by the Council and Parliament and publication in the Official Journal were anticipated to follow (reported as expected around July 2026, ahead of the original 2 August 2026 Annex III date). Treat those specific dates as reported and illustrative, not settled: confirm them against the adopted Official Journal text before relying on either one.

> Caution: as of this writing the Digital Omnibus is a provisional agreement, not yet final law. Amendments take legal effect only on formal adoption and publication in the Official Journal of the European Union. Until that happens, the legally binding dates remain those in the original Regulation. Verify the current status before you rely on a deferred date, and do not let a slipping deadline become a reason to stop building, because the substantive requirements are not changing, only when they bite.

The honest planning posture: build to the original dates, treat any deferral as schedule relief rather than a reprieve from the work, and re-check the legal status before any decision that turns on the exact date.

---

## Penalties and the GDPR Overlap

The penalty bands track the seriousness of the breach. Article 99 sets the headline ceilings (whichever is higher of a fixed sum or a percentage of worldwide annual turnover); for SMEs and start-ups the lower of the two applies.

| Breach | Ceiling (higher of) |
|---|---|
| Prohibited practice under Article 5 | EUR 35 million or 7 percent of global annual turnover |
| Non-compliance with other obligations (most provider and deployer duties, including the high-risk requirements) | EUR 15 million or 3 percent of global annual turnover |
| Supplying incorrect, incomplete, or misleading information to authorities or notified bodies | EUR 7.5 million or 1 percent of global annual turnover |

Verify the current figures against the adopted text before quoting them, since the Digital Omnibus simplification package touches enforcement details as well as dates.

The Act does not run alone. Most life-sciences AI also processes personal data (patient inputs, HCP data, workforce data), so the General Data Protection Regulation applies in parallel. The two regimes reinforce each other: the Act's data-governance and human-oversight duties sit beside the GDPR's lawful-basis, data-minimisation, and automated-decision rules (Article 22 GDPR on decisions producing legal or similarly significant effects). Where an AI system makes or materially influences a decision about a person, screen both regimes together, and record the GDPR lawful basis and any data protection impact assessment alongside the AI-Act classification. Treating them as one screen, owned jointly by Quality and Legal/Privacy, avoids the gap where each function assumes the other covered it.

## What Regulated Companies Should Do Now

A practical sequence, ordered so each step feeds the next.

1. **Inventory your AI.** Build and maintain a register of every AI system you develop or use, reaching beyond the lab and plant into HR, security, IT, and commercial. You cannot classify what you have not found, and "hidden" AI inside a vendor feature is a recurring blind spot.
2. **Assign roles per system.** For each entry, record your role: provider, deployer, or both, and remember that in-house builds make you a provider.
3. **Classify by tier, and document the reasoning.** Prohibited, high-risk (which route), limited, or minimal. Where you conclude "not high-risk" under an Annex III exception, write the Article 6(4)-style assessment as a controlled record.
4. **Screen hard for prohibited uses first.** This is the highest-penalty band and the deadline (February 2025) has already passed. The likely exposure is HR, security, and workforce tools, so look there.
5. **For high-risk AI in a combination product's device constituent, run the MDR/IVDR overlap as one programme.** Map, extend, and combine the assessment as described above; do not build a parallel file.
6. **Stand up AI governance and AI literacy.** The Act expects appropriate AI literacy for staff who deal with AI systems, and the practical home for classification, oversight, and monitoring is an AI-governance framework that plugs into your existing QMS. See [AI governance in GxP](/articles/ai-governance-gxp).
7. **Reuse your validation and QMS machinery.** The risk management, data governance, documentation, logging, and human-oversight expectations align closely with how you already validate GxP computerised systems. Extend that work rather than starting fresh; the [validation of AI-enabled GxP systems](/articles/validating-ai-gxp-systems) approach maps cleanly onto the Act's high-risk expectations.
8. **Track the legal status.** Keep a watch on the Digital Omnibus and the harmonised standards, and update your dates and plans as the text settles.

---

## Common Mistakes and Audit-Finding Patterns

These are the recurring ways organisations get the Act wrong, framed so you can check yourself against each.

- **Assuming geography is an exemption.** "We are not an EU company" ignores the extraterritorial reach. If your AI or its output is used in the EU, you are likely in scope.
- **Confusing the roles.** Treating yourself as a mere deployer when you built or substantially modified the model, and so under-scoping the obligations. In-house builds and material retraining make you a provider.
- **Treating MDR/IVDR compliance as AI-Act compliance.** They overlap heavily but are not the same; the data-governance, transparency, and AI-specific documentation elements are additions you must build.
- **Building a duplicate parallel file.** The opposite error: re-documenting everything separately instead of extending the existing device technical documentation, wasting effort and creating two versions to keep in sync.
- **Skipping the prohibited-use screen.** Missing a banned HR or security tool, which sits in the highest penalty band and is already in force.
- **No documented classification.** Asserting a system is minimal or not-high-risk with nothing written down, so the conclusion cannot survive a question.
- **Hidden AI.** A vendor feature or an embedded model quietly doing classification or prediction that was never inventoried or assessed.
- **Stopping work because of the proposed delay.** Treating a not-yet-final deferral as permission to pause, then facing the full requirement with no runway.
- **Ignoring the GPAI documentation chain.** Building a regulated workflow on a foundation model without obtaining and using the model provider's documentation as an input to your own validation and supplier assessment.

---

## Interview and Audit Questions, and How to Answer Them

Short, concrete answers signal a real practitioner.

**"What kind of law is the EU AI Act, and what is its identifier?"** It is Regulation (EU) 2024/1689, a horizontal, risk-based law that regulates AI across all sectors rather than industry by industry. It entered into force on 1 August 2024 and applies extraterritorially, based on where the AI or its output is used.

**"What are the risk tiers?"** Four, by descending obligation: unacceptable (prohibited outright), high-risk (full conformity regime), limited-risk (transparency duties), and minimal-risk (no mandatory rules). Separately, there is a regime for general-purpose AI models.

**"How does it overlap with the medical-device rules?"** AI in a combination product's device constituent (or a standalone diagnostic or SaMD) that already needs a notified body under MDR or IVDR is high-risk under the Act via the Annex I route. The two regimes are additive but designed to be assessed together: extend the existing technical documentation and run one combined conformity assessment, do not build a parallel file.

**"What is the difference between a provider and a deployer?"** The provider develops the system and puts it on the market under its own name and carries the heavy conformity duties. The deployer uses it under its own authority and carries lighter duties: use it per instructions, ensure human oversight, monitor it, and report risks. Building your own model makes you a provider; substantially modifying a bought model can too.

**"When do the rules apply?"** Original dates: prohibited practices from 2 February 2025, GPAI and governance from 2 August 2025, Annex III high-risk from 2 August 2026, Annex I embedded-product high-risk from 2 August 2027. A provisional Digital Omnibus agreement in 2026 would defer the high-risk dates (Annex III to December 2027, Annex I to August 2028), but that is not final until adopted and published, so the original dates bind until then.

**"What would you do first at a company that has never looked at this?"** Inventory all AI across the business including HR and security, assign provider/deployer roles, screen hard for prohibited uses, then classify each system by tier with the reasoning written down. Everything else follows from a complete, classified inventory.

**"Can you reuse your existing validation work?"** Yes, and you should. The Act's high-risk expectations, risk management, data governance, documentation, logging, human oversight, align closely with GxP computerised-system validation. Extend the QMS and validation machinery rather than starting fresh, while being clear that the legal basis and the assessor differ.

---

## The Honest Assessment

The EU AI Act is real, broad, and extraterritorial, and for life-sciences companies one of its sharpest edges shows up in combination products, where AI in a device constituent can sit under two demanding frameworks at once. The good news is that most of what the Act asks for in the high-risk tier, risk management, data quality, documentation, traceability, human oversight, monitoring, is work a mature quality organisation already knows how to do. The task is mapping and extending, not reinventing.

The complication is timing. The rollout has run ahead of the standards and guidance needed to implement it, which is why a deferral is on the table. The disciplined response is to build to the original dates, document classification decisions as you go, run the device overlap as a single programme, and keep watching the legal status so a not-yet-final deferral neither lulls you into stopping nor gets relied on as settled law. A company that has inventoried its AI, classified it deliberately, and reused its existing quality machinery will be ready whichever date prevails. A company waiting for the picture to settle will be reconstructing its position under time pressure, which is the harder place to be.
