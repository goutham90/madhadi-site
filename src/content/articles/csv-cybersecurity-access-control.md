---
title: "Cybersecurity and Access Control for Validated GxP Systems"
description: "How Part 11 and Annex 11 access, identity, and signature controls intersect with modern cybersecurity practice, and how to patch a validated system without breaking its validated state."
pubDate: 2026-06-20
tags: ["21 CFR Part 11", "EU Annex 11", "access control", "data integrity", "cybersecurity", "patch management", "change control", "computer system validation"]
pillar: "csv-csa"
tier: "Advanced"
---

A validated GxP system has two jobs that pull in opposite directions. It has to stay frozen enough that you can defend its qualified state to an inspector, and current enough that a known vulnerability doesn't sit unpatched for six months. The discipline that resolves that tension lives at the seam between two regulatory worlds that rarely talk to each other: the electronic-records requirements that quality people own (21 CFR Part 11, EU GMP Annex 11), and the security controls that IT and InfoSec own (identity, least privilege, patching, logging). When those two worlds are wired together well, every record is attributable, every privileged action is governed, and a security update is just another controlled change. When they aren't, you get a security hole or a 483, sometimes both from the same root cause.

This article walks the access-control and security surface of a validated GxP system from the ground up: unique identity, role design and segregation of duties, privileged-account governance, what an electronic signature actually proves (and doesn't), and how to run patch and vulnerability management without invalidating qualification. It applies across pharmaceutical and biologics manufacturing, medical-device production, laboratory operations, clinical systems, and any other regulated environment where a computerized system holds GxP records.

## Why access control is a data-integrity control, not just a security control

Most people meet access control as a security topic: keep bad actors out. In a GxP context it carries a second, heavier load. It is the mechanism that makes data **attributable**. The ALCOA+ expectations articulated by FDA and MHRA data-integrity guidance start with *Attributable*: you must be able to say who did what, and when. That property is manufactured almost entirely by access control. If two analysts share a login, the record is no longer attributable to a person, and no amount of audit-trail completeness can repair that. The control failed at the front door.

So when you design access for a regulated system, you are designing the evidentiary chain at the same time. The same `userID` that authenticates a session is the identity stamped into the audit trail, bound to an electronic signature, and used to enforce what that person can change. Get identity wrong and everything downstream inherits the defect. This is why access control belongs to quality as much as to IT, and why the role matrix is a controlled GxP document, not an IT convenience.

The governing texts are worth naming precisely:

- **21 CFR Part 11** (Electronic Records; Electronic Signatures): the US rule for electronic records and signatures that substitute for paper and handwritten signatures in FDA-regulated activities. Subpart B covers electronic-records controls (including limiting system access to authorized individuals, 11.10(d)); Subpart C covers electronic-signature requirements.
- **EU GMP Annex 11** (Computerised Systems): the EU GMP expectation for computerized systems. Clause 12 covers security (access limited to authorized persons, defined by role, with traceability), clause 9 covers audit trails, clause 10 covers change and configuration management.
- **EU GMP Chapter 4** (Documentation) and **Eudralex** more broadly set the records framework Annex 11 sits inside.
- **FDA guidance, "Data Integrity and Compliance With Drug CGMP"** (2018): the agency's Q&A on data-integrity expectations, including unique logins and shared-account prohibitions, audit-trail review, and limiting system administrator privileges.
- **MHRA "GXP Data Integrity Guidance and Definitions"** (2018): the UK regulator's definitions and expectations, used as a reference across GxP.
- **PIC/S PI 041** ("Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments"): the inspectorate-aligned data-integrity guide.

GAMP 5 (Second Edition, 2022) from ISPE is the industry methodology that ties validation rigor to risk; it is guidance, not a regulation, but inspectors recognize it as a reasonable approach. For medical-device-makers, the same identity and signature logic surfaces in the device quality system and in cybersecurity expectations; see [device software cybersecurity for SaMD](/articles/device-software-cybersecurity-samd) for the product-side equivalent.

> **Annex 11, clause 12.1 (Security):** "Physical and/or logical controls should be in place to restrict access to computerised system to authorised persons." Clause 12.4 adds that "management systems for data and for documents should be designed to record the identity of operators entering, changing, confirming or deleting data including date and time."

## Unique identity: the non-negotiable foundation

Every individual who interacts with a GxP system must have a unique, individually assigned account. This is the single most-cited access finding in data-integrity observations, and the rule is blunt: no shared logins, no generic "operator" account, no posting the admin password on a label printer.

What "unique identity" actually requires in practice:

- **One human, one account.** Service accounts (non-human, used by integrations or scheduled jobs) are a separate category and must be controlled as such: documented owner, no interactive login, credentials vaulted.
- **No reuse of retired user IDs.** A leaver's `jsmith` must never be reassigned to a new Jane Smith, or audit-trail attribution becomes ambiguous across time. Retire the ID, do not recycle it.
- **Password or stronger.** Multi-factor authentication is increasingly an expectation for privileged or remote access, and is good practice broadly. Annex 11 calls for controls appropriate to the criticality of the system.
- **Onboarding and offboarding tied to HR reality.** Access provisioning must follow a documented request-and-approval flow, and deprovisioning must be timely. The classic finding is the terminated employee whose account stayed active for weeks; every day of that is an integrity exposure.

### The access-request lifecycle, step by step

Access is not a static grant. It is a lifecycle you must be able to evidence end to end:

1. **Request.** A named requester (usually the line manager) raises an access request specifying the person, the system, and the role(s). Generic "give them what the last person had" requests are a finding waiting to happen.
2. **Authorize.** A system owner or process owner approves the role against a business justification. For privileged roles, a second approver (often QA) is common.
3. **Provision.** A system administrator creates the account and assigns only the approved role(s). Least privilege is enforced here, not assumed.
4. **Train before access.** The user must be trained on the system and on the relevant SOPs before the account is enabled for GxP work. Access without recorded training is a recurring observation; see [GxP training programs](/articles/training-program-gxp).
5. **Use and periodic review.** The account is reviewed on a defined cadence (see below) to confirm the role is still justified and free of accumulation.
6. **Change.** A job change triggers a fresh request-and-approval, and the *removal* of any role no longer needed. Role creep happens precisely because step 6 only ever adds.
7. **Deprovision.** Leaver or transfer triggers timely disablement, on a clock you can defend (often same business day for privileged access, within a defined SOP window for standard access).

### Acceptance criteria you can actually test

These are the checks to write into a validation protocol or a periodic review, with the pass criterion stated so the result is binary:

| Control | Test | Pass criterion |
|---|---|---|
| Unique IDs | Attempt to create a second account with an existing ID | System rejects duplicate ID |
| No shared accounts | Review active account list against HR roster | Every active account maps to one named, current individual or a documented service account |
| Password policy | Inspect configured policy vs. SOP | Length, complexity, expiry, lockout match the documented standard |
| Inactivity lockout | Leave a session idle past threshold | Session locks or logs out; re-authentication required |
| Failed-login lockout | Enter wrong password past the configured count | Account locks per policy; event is logged |
| Deprovisioning timeliness | Sample recent leavers | Accounts disabled within the SOP-defined window |
| ID non-reuse | Check whether a retired ID can be reassigned | New account cannot reuse a previously assigned ID |
| Training-before-access | Sample new users | Training record predates account enablement |

The inactivity timeout matters more than people think. An unattended authenticated session is a shared session waiting to happen: anyone can sit down and act under someone else's identity. Inspectors check whether the timeout exists and whether it's short enough to be meaningful for the workflow. A 12-hour timeout on a shop-floor terminal that ten operators pass in a shift is not a control, it is a finding with a configuration value.

## Role-based access control and segregation of duties

Once identity is solid, the next question is *what each identity may do*. The standard model is role-based access control (RBAC): permissions are attached to roles, roles are attached to users, and you grant **least privilege**, the minimum access needed to perform the job, nothing more.

Designing roles for a GxP system is a quality activity, not just an IT one, because the role boundaries encode **segregation of duties (SoD)**. The principle is that no single person should be able to both perform an action and approve their own work, or both create data and unilaterally delete the evidence of having done so. Conflicting capabilities must live in different roles held by different people.

Classic SoD pairs that must not coexist in one role for one person:

- **Performer vs. approver/reviewer:** the analyst who runs a test should not be the person who reviews and approves that result.
- **Configuration vs. operational use:** whoever can change validated configuration (calculation parameters, specification limits, integration settings) should not be a routine operator generating data under those settings, and changes should themselves be change-controlled.
- **User administration vs. data entry:** the person who can create accounts and assign roles should not be a heavy data-generating user, because they could provision an account to bypass review.
- **Audit-trail/administration vs. data generation:** anyone who can alter audit-trail settings, the system clock, or delete records must not be a routine data generator.

### Building the role-to-permission matrix and the SoD conflict matrix

A useful way to document this is a role-to-permission matrix paired with an explicit SoD conflict matrix. The conflict matrix lists permission pairs that are forbidden to combine. You then verify that no defined role, and no user's combined set of roles, violates a forbidden pair. This is exactly the artifact an inspector asks for when they suspect "administrator" has quietly become a do-everything role.

A simplified conflict matrix looks like this. An "X" means the two capabilities must not be held by the same person:

| | Generate data | Approve data | Edit configuration | Administer users | Edit audit-trail settings |
|---|---|---|---|---|---|
| **Generate data** | - | X | X | X | X |
| **Approve data** | X | - | | | X |
| **Edit configuration** | X | | - | | X |
| **Administer users** | X | | | - | X |
| **Edit audit-trail settings** | X | X | X | X | - |

To use it: list every defined role, mark which of the column capabilities each role carries, then check no single role lights up a forbidden pair. Then repeat the check at the *user* level, because a person assigned two narrow roles can still recombine into a forbidden pair. The user-level check is the one teams forget, and it is where role creep gets caught.

A worked example of a clean role split for a typical lab data system:

| Role | Can do | Cannot do |
|---|---|---|
| Operator/Analyst | Acquire data, run methods, enter results | Modify methods, approve own results, change audit-trail settings |
| Reviewer/Approver | Review, electronically sign/approve results | Generate the result being approved; edit raw data |
| Method/Configuration Owner | Edit methods/parameters under change control | Operate routinely; approve production data |
| System Administrator | Manage accounts, roles, backups | Generate or approve GxP data; alter audit trails |
| QA Oversight | Read-only review of audit trails and access logs | Edit any GxP data or configuration |

Note the deliberate separation of the **administrator** from any GxP data role. The most dangerous default in commercial software is an admin account that can do everything *including* silently editing data and switching off the audit trail. Where the product can't separate these natively, you compensate with procedure plus monitoring, and you document that the residual risk is controlled. Native separation is always preferable, and inspectors increasingly expect it.

### Roles and responsibilities for access governance

Who owns what is itself a question inspectors ask. A defensible split:

| Role | Responsibility |
|---|---|
| System/Process Owner | Owns the role definitions and business justification; approves access requests; accountable for the system staying in a validated state |
| Quality Assurance | Approves privileged access; reviews access and privileged-activity logs; signs periodic access reviews; owns the SoD conflict matrix as a controlled document |
| IT / System Administrator | Provisions and deprovisions accounts strictly per approved requests; configures and enforces password and timeout policy; never self-approves |
| Line Manager | Raises and justifies access requests; triggers change and leaver actions promptly |
| InfoSec / Security | Owns vulnerability scanning, security baselines, and the threat side; feeds candidate changes into change control |
| End User | Uses only their own credentials; never shares a session; completes training before use |

The point of writing this down is that "everyone assumed someone else owned the access review" is the root cause behind most stale-access findings. Name the owner.

For a fuller treatment of how these accountabilities map across the quality organization, see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

## Privileged-account governance: where the real exposure lives

Privileged accounts (system administrator, database administrator, application "super user," and the built-in vendor/root accounts) are the highest-risk identities in any validated system, because they can do the things integrity controls exist to prevent: delete records, alter audit-trail configuration, change the system clock, or back-date entries. Governing them is its own discipline.

Core expectations:

- **Minimize the number of privileged accounts** and review them frequently. Every privileged account is a place where the audit trail could, in principle, be defeated.
- **No routine work under privileged accounts.** Administrators should hold a normal user account for everyday tasks and elevate only when an administrative action genuinely requires it.
- **Independent oversight of administrators.** The classic problem: the system administrator can edit data *and* can edit the audit trail that would record the edit. The mitigation is that administrative actions are reviewed by someone who is not themselves an administrator, typically QA reviewing administrator activity logs, ideally exported to a location administrators can't alter.
- **Govern vendor/remote access.** Vendor support frequently needs elevated access. That access must be time-boxed, individually attributable (no shared "vendor" login), logged, and ideally supervised. Annex 11 and supplier-management expectations both bear on this; see [supplier and vendor qualification](/articles/supplier-vendor-qualification).
- **Credential management for service/system accounts.** Non-interactive accounts that integrations use should have vaulted credentials, rotation, and a named owner. They must never be usable for interactive login that would let a human act anonymously behind the account.

### Running a privileged-access review

A privileged-access review is a concrete, recurring control you can evidence. On a defined cadence (commonly quarterly for privileged access), the procedure is:

1. **Pull the population.** Export every account with elevated rights, including built-in vendor and root accounts and any account in an admin group.
2. **Confirm justification.** For each, confirm a named owner and a current business reason. Anything without one is flagged for removal.
3. **Confirm activity was reviewed.** Confirm that administrator activity logs since the last review were examined by someone independent, and that anomalies were investigated.
4. **Check for SoD breaches.** Confirm no privileged account has quietly acquired a data-generation or data-approval capability.
5. **Remediate.** Disable unjustified accounts, downgrade over-privileged ones, and raise deviations where something material is found.
6. **Sign.** A reviewer who is not an administrator signs and dates the review. The signed record is the evidence.

A worked snapshot of what the review output looks like:

| Account | Type | Owner | Justified? | Activity reviewed? | Action |
|---|---|---|---|---|---|
| admin.kpatel | App admin | K. Patel (IT) | Yes | Yes, no anomalies | Retain |
| svc_lims_etl | Service | LIMS integration | Yes | Yes (job logs) | Retain; rotate credential |
| vendor_support | Vendor | None (shared) | No | No | Disable; replace with named, time-boxed access |
| dba_old | DB admin | Left company | No | n/a | Disable immediately; raise deviation |

The absence of this review is a common finding; its presence, done properly, is one of the cleaner things to show an auditor.

What inspectors specifically probe on privileged access:

- Can the administrator turn off the audit trail or change its configuration? If yes, who reviews that they haven't?
- Can anyone change the system clock? Time manipulation undermines every timestamp in the record. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).
- Are administrator activities logged somewhere the administrators can't edit, and does anyone independent actually read those logs?
- Is there a named individual behind every privileged action, or do generic admin logins blur attribution?

## What an electronic signature proves, and its limits

Part 11 and Annex 11 both recognize electronic signatures as substitutes for handwritten ones, but a signature is a narrower control than people assume, and conflating it with access control causes real design errors.

Under **21 CFR Part 11**, an electronic signature that is the legally binding equivalent of a handwritten signature must carry the **signer's printed name, the date and time of signing, and the meaning of the signature** (such as review, approval, authorship), and that information must appear in the human-readable record (11.50). Signatures must be **linked to their records** so they can't be cut, copied, or transferred to falsify another record (11.70). Signatures based on identification codes plus passwords must use **at least two distinct components** (typically a user ID and a password), and the rule (11.200) sets out conditions for when both components are re-entered versus when subsequent signings within a single continuous session of controlled access may use only one component, while still being executed only by the genuine owner.

Before any organization uses Part 11 electronic signatures as the equivalent of handwritten ones, it must **certify to the FDA** (a one-time certification under 11.100(c), traditionally a paper letter to the agency) that its electronic signatures are intended to be the legally binding equivalent of handwritten signatures. People forget this certification exists; it is a real, separable requirement, not folklore.

### Anatomy of a compliant signature manifestation

A worked example of what the human-readable signature manifestation must actually contain:

| Element | Example value | Why it is required |
|---|---|---|
| Printed name of signer | Maria Okafor | Identifies the human, not just a user ID (11.50(a)(1)) |
| Date and time | 2026-06-18 14:32 UTC | Establishes when (11.50(a)(2)); should reflect controlled system time |
| Meaning | Approved (QA release) | A signature with no stated meaning proves nothing (11.50(a)(3)) |
| Binding to record | Signature tied to record ID / hash | Prevents transfer to another record (11.70) |
| Re-authentication evidence | Signer re-entered password at signing | Confirms the genuine owner signed, not a left-open session |

Two people signing the same record for different reasons must each have their own manifestation with their own meaning. A reviewer and an approver are not interchangeable; the record must say which is which.

Now the limits, which matter for design:

- **A signature authenticates an act of approval; it does not, by itself, control who could perform the act.** Access control decides if you are *allowed* to sign in that role. The two controls stack, they don't substitute. A system that lets anyone with a login apply an "approved by QA" signature has an access-control hole that the signature mechanism can't fix.
- **A signature is not an audit trail.** It captures one deliberate event. The audit trail captures the *history of changes* to the record, including changes nobody signed. You need both. A signed final record with no audit trail behind it can't show what the value was before it was finalized. See [audit trail design and review](/articles/audit-trail-design-and-review).
- **"Signed" is not "unchangeable."** The signature must be linked such that tampering is detectable, but the underlying record protection (write controls, audit trail, backup) is what actually preserves integrity over time.
- **The meaning must be explicit and bound.** "I signed it" is worthless if the record doesn't capture *as what*: author, reviewer, approver.

A common architectural mistake is treating a simple click-through "I confirm" button as a Part 11 signature. If it doesn't re-authenticate the signer, capture name/date/time/meaning in the human-readable output, and bind to the record, it isn't one, and calling it one in your validation documentation invites a finding. For the full build pattern, see [electronic signatures implementation](/articles/electronic-signatures-implementation) and the [Part 11 and Annex 11 practical guide](/articles/part-11-annex-11-practical-guide).

## Patch and vulnerability management under change control

Here is the genuinely hard part, and the reason this topic deserves an advanced treatment. A validated system is qualified in a defined configuration. Security tells you to patch continuously. Quality tells you not to change a validated system without controlled assessment. Both are right. The job is to build a process where security updates flow through change control fast enough to matter and rigorously enough to defend.

Start from the regulatory anchors. **EU GMP Annex 11** clause 10 expects that **changes be made in a controlled manner** with assessment of impact, and clause 12 expects security controls appropriate to system criticality. GAMP 5 (Second Edition) addresses operational-phase activities, including patch and security management, and is explicit that not every patch warrants the same depth of revalidation. The newer thinking, reinforced by FDA's Computer Software Assurance (CSA) guidance, is **risk-based**: spend assurance effort proportionate to the risk the change introduces, not uniformly. (Note: CSA was issued as a draft guidance in 2022 and finalized in 2024; described here as a risk-based assurance approach.) See [Computer Software Assurance](/articles/computer-software-assurance-fda) and [change control for validated systems](/articles/change-control-validated-systems).

### A workable patch-classification model

Don't treat all patches identically. Triage them:

| Patch class | Examples | Typical handling |
|---|---|---|
| OS / infrastructure security patch, no functional change to GxP app | Monthly OS security rollups, library CVE fixes | Risk-assess; if no impact to validated functionality, apply via change control with a focused regression/smoke test of critical functions; document |
| Application minor patch / hotfix | Vendor bug fix, security hotfix to the GxP app itself | Impact-assess against affected functions; targeted revalidation of impacted and adjacent functionality |
| Application major upgrade | New version, new features, schema changes | Full impact assessment; revalidation of affected scope; update specs and traceability |
| Emergency security patch | Actively exploited critical CVE | Expedited/emergency change control with documented risk rationale; post-implementation verification; retrospective documentation completion within a defined window |

The principle running through this table: **the depth of testing follows the risk and the scope of impact, not the calendar.** An OS security patch that doesn't touch the application's GxP functions does not require you to re-execute the entire validation suite. It requires a documented impact assessment concluding so, plus verification that critical functions still work. Spending weeks re-running irrelevant scripts to "be safe" is its own failure: it's why critical patches sit unapplied.

### A worked impact assessment for one patch

What a single patch change record should answer, filled in for a monthly OS security rollup on a server hosting a chromatography data system:

| Question | Answer |
|---|---|
| What does this change? | OS-level security patches (kernel, TLS library). No change to the GxP application binaries or configuration. |
| Which GxP functions could be affected? | Application start-up, database connectivity, network time sync. No data-calculation or audit-trail code touched. |
| Regression scope | Smoke test: application launches, user can log in, sample acquisition runs, result calculates correctly against a known reference, audit trail records the action, time stamp is correct. |
| Rollback plan | VM snapshot taken pre-patch; restore from snapshot if smoke test fails. |
| Risk rating | Low impact, high security urgency. |
| Post-implementation verification | Smoke test executed and passed; configuration baseline updated to new patch level. |

This is the level of detail that turns "we patch every month" from an assertion into an evidenced control.

### Reconciling continuous updates with the validated state

The reconciliation rests on four moves:

1. **Define the validated baseline and a configuration inventory.** You cannot assess the impact of a change if you don't know precisely what is installed: OS version, application version, patch level, integrations, configuration settings. A maintained configuration management baseline is the reference every change is measured against. See [IT change and configuration management for GxP](/articles/it-change-and-configuration-management-gxp).

2. **Run a vulnerability-management process that feeds change control.** Scan and monitor for vulnerabilities (CVEs, vendor security bulletins). When something relevant appears, it enters change control as a candidate change with a risk rating that drives urgency. Annex 11's expectation that systems be protected and changes controlled reinforces that security is a continuous operational obligation, not a one-time qualification event.

3. **Assess impact before applying, verify after.** For each patch, the change record answers: What does this touch? Which GxP functions could be affected? What is the regression scope? What's the rollback plan? After applying, you verify the affected critical functions behave as specified and the configuration baseline is updated to reflect the new patch level.

4. **Keep an emergency path that is still controlled.** For an actively exploited critical vulnerability, waiting for the normal change cycle may be the larger risk. An emergency change procedure lets you apply the patch quickly under a documented risk decision, perform post-implementation verification, and complete the formal documentation within a defined window. The control isn't bypassed, it's compressed, with the rationale recorded.

A practical tension worth naming: vendors of qualified platforms sometimes lag on supporting the latest OS patches, leaving you with a CVE the vendor hasn't blessed a fix for. The defensible response is a documented risk assessment of the exposure, compensating controls (network segmentation, restricted access, enhanced monitoring) while you wait, and a tracked action on the vendor. What's *not* defensible is doing nothing and having no record that you weighed it.

### Acceptance criteria for the patch process itself

- Every applied patch traces to a change-control record with an impact assessment and an approval.
- The configuration baseline reflects the current patch level after each change.
- Critical-function verification was executed and passed post-implementation, scoped to actual impact.
- A rollback or recovery plan existed before the change was applied, and is tied to a tested backup. See [backup, restore and disaster-recovery validation](/articles/backup-restore-disaster-recovery-validation).
- Emergency changes have a documented risk rationale and completed retrospective documentation.
- Open vulnerabilities without an available fix have a documented risk assessment and compensating controls.

## What inspectors look for, and the failure modes that draw findings

Pulling the threads together, here is where audits of this surface tend to land, and the recurring failure modes behind 483s and Annex 11 deficiencies:

- **Shared or generic logins.** Still the most common data-integrity finding. Attribution dies at the shared account.
- **Excessive privilege / admin-can-do-everything.** An administrator who can edit GxP data and the audit trail, with no independent review of their activity.
- **Audit trail that can be disabled.** If the configuration allows the audit trail to be switched off, and especially if there's no monitoring of whether it was, expect a finding. Inspectors check both the capability and the oversight.
- **Stale access.** Terminated users still active; role creep where people accumulate permissions across job changes and nobody ever revokes the old ones. Periodic access reviews are the antidote, and their absence is itself a finding.
- **Time controls.** Anyone able to change the system clock; timestamps that can be manipulated. Time integrity underpins every record.
- **Signatures without substance.** "Approval" clicks that don't capture name/date/time/meaning, aren't bound to the record, or don't re-authenticate the signer.
- **Patches applied outside change control,** or, equally, known critical vulnerabilities left unaddressed for long periods with no documented risk decision. Inspectors increasingly ask about cybersecurity posture and how it's reconciled with validation.
- **No periodic review.** Annex 11 expects periodic evaluation of computerized systems to confirm they remain in a validated state. Access reviews, privileged-account reviews, audit-trail review effectiveness, and patch currency all feed that periodic review. See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

The connective insight is that none of these are purely "IT problems" or purely "quality problems." They sit on the seam, and the organizations that handle them well are the ones where change control, identity management, and validation are a single governed process rather than three departments throwing requirements over a wall.

## Interview questions an inspector or hiring panel will ask

This topic comes up in both inspections and interviews for CSV, data-integrity, and IT-quality roles. Be ready to answer these concretely, not in generalities.

**Q: Why is a shared login a data-integrity problem and not just a security one?**
Because it breaks the *Attributable* leg of ALCOA+. If two people use one account, the record can no longer be traced to a specific person, the audit trail attributes actions to a login rather than a human, and any electronic signature made under that account is meaningless as a personal act. The 2018 FDA data-integrity Q&A and MHRA guidance both call this out directly.

**Q: An administrator can edit GxP data and also edit the audit trail. How do you control that?**
First, prefer native separation: configure the system so the data-generation and data-edit capability is not in the admin role. Where the product can't do that, apply compensating controls: restrict the privileged accounts to a minimal named set, prohibit routine work under them, export administrator activity logs to a location administrators can't alter, and have QA (who are not administrators) review those logs on a defined cadence. Document the residual risk as controlled.

**Q: What makes a click-through "I confirm" button a valid Part 11 signature, or not?**
On its own it usually isn't one. To be a Part 11 signature it must re-authenticate the signer, capture the signer's printed name, the date and time, and the meaning in the human-readable record (11.50), and be bound to the record so it can't be transferred (11.70). If those elements are missing, calling it a signature in validation documents invites a finding.

**Q: How do you patch a validated system without invalidating its qualified state?**
Through risk-based change control. Maintain a configuration baseline, feed vulnerabilities into change control with a risk rating, classify the patch (OS security vs. application hotfix vs. major upgrade vs. emergency), scope the testing to the actual impact rather than re-running the whole suite, verify critical functions after applying, and update the baseline. Keep an emergency path that is compressed but still documented.

**Q: A critical CVE is being actively exploited but your vendor hasn't approved a fix for the qualified platform. What do you do?**
Raise a documented risk assessment of the exposure, apply compensating controls in the meantime (network segmentation, restricted access, enhanced monitoring), open a tracked action with the vendor, and escalate. The unacceptable answer is to do nothing with no record. Inaction without a documented decision is itself the finding.

**Q: What is segregation of duties in this context, and give a pair that must not combine.**
SoD means conflicting capabilities live in different roles held by different people. A clear pair: the person who generates a result must not also be the person who approves it. Another: anyone who can change the system clock or audit-trail settings must not be a routine data generator.

**Q: How do you evidence that access stays appropriate over time?**
Periodic access reviews (standard accounts) and more frequent privileged-access reviews, each comparing active accounts to the HR roster and to business justification, checking for SoD breaches and role creep, remediating exceptions, and signed by an independent reviewer. The signed review record is the evidence.

## Practical tips

- **Make the role matrix a controlled document.** It is a GxP record, not an IT spreadsheet. Version it, change-control it, and keep it as the answer to "show me who can do what."
- **Do the user-level SoD check, not just the role-level one.** Two clean roles can still recombine into a forbidden pair on one person. That recombination is where most live conflicts hide.
- **Time-box and name vendor access every time.** A standing shared "vendor" account is one of the easiest findings an auditor can write. Create a named, expiring account per support session.
- **Tie rollback to a tested backup.** A rollback plan that references a backup nobody has ever restored is theater. Periodically prove the restore works.
- **Right-size patch testing.** Re-running the full validation suite for an OS security patch that touches no GxP function is not caution, it is the reason critical patches go unapplied. Document the impact assessment and test what the change actually touches.
- **Keep administrator logs out of administrator reach.** Independent review only means something if the people being reviewed can't edit the evidence.

## Bringing it together

The defensible posture isn't choosing security over validation or validation over security, it's wiring them into one control system. Unique identity makes records attributable and signatures meaningful. Role design with enforced segregation of duties ensures the right people do and approve the right things, and no one quietly does both. Privileged-account governance closes the gap where integrity controls could otherwise be defeated from the inside. Electronic signatures capture deliberate, attributable approval, stacked on top of access control and audit trails, never substituting for them. And a risk-based patch and vulnerability process, run through change control with an emergency path, lets a validated system stay both qualified and current.

Build it that way and a security update becomes an ordinary controlled change, a privileged action becomes a governed and reviewed event, and an inspector's questions about who, what, when, and how-do-you-keep-it-current all have the same answer: it's in the record, by design.

For adjacent reading, see [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11), [GxP computerized systems operations](/articles/gxp-computerized-systems-operations), [audit trail design and review](/articles/audit-trail-design-and-review), and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).
