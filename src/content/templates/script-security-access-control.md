---
title: "Test Script: Security and Access Control"
description: "A plug-and-play computer system validation test script for security testing: role-based access enforcement, least privilege, password and lockout policy, segregation of duties, disabled-account behavior, and negative attempts, with step, expected, actual, and pass or fail columns, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "csv-csa"
relatedArticles: ["csv-cybersecurity-access-control", "writing-validation-protocols-and-reports"]
tags: ["security testing", "access control", "least privilege", "segregation of duties", "csv", "21 cfr part 11", "annex 11"]
tier: "Intermediate"
---

This is a ready-to-use security and access control test script. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and run it under an approved validation plan or protocol. A worked filled specimen follows the template so you can see how a completed version reads. Security tests are contemporaneous GxP evidence: write each actual result as you observe it, in ink or in the validated tool, capture the exact message text and screen state, and never reconstruct an outcome later. Verify each cited regulation against the current source before you rely on it.

## What this script proves, and what it does not

This script demonstrates that the system enforces who can do what, and just as importantly that it blocks who should not. It verifies the access control configuration the User Requirements Specification and the system security design call for: that roles grant only the privileges they should (least privilege), that two incompatible duties cannot be held or exercised by one account (segregation of duties), that password complexity and account lockout behave as configured, and that the system refuses unauthorized actions, expired credentials, and disabled accounts. Half of a security script is negative testing: confirming that a forbidden action is actually stopped, with the system's own denial message as the evidence. A test that only shows the allowed path passing has tested nothing about security.

This script does not configure the access model and does not replace the user access review or the periodic re-qualification of accounts. The access model lives in the configuration specification and the role-privilege matrix; the ongoing review lives in your access management procedure. This script proves the configured model behaves as designed at the moment of qualification.

## Document control header

| Field | Entry |
|---|---|
| Test script title | Security and Access Control, `<<FILL: system short name>>` |
| Test script ID | `<<FILL: TS-ID, e.g. TS-OQ-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Parent protocol / plan | `<<FILL: protocol or plan ID this script executes under>>` |
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| System version / build | `<<FILL: software version, build, patch level>>` |
| Authentication model | `<<FILL: local accounts / domain SSO / federated; MFA yes or no>>` |
| Test environment | `<<FILL: validation / qualification environment, not production>>` |
| Test phase | IQ / OQ / PQ / UAT (`<<FILL: select one>>`) |
| Test type and risk | `<<FILL: scripted; risk High for access control on GxP data>>` |
| Author | `<<FILL: name, role>>` |
| Effective date | `<<FILL: date>>` |

## 1. Requirements traced

State exactly which requirements this script verifies, so the traceability matrix links each requirement to its evidence in both directions. Every requirement listed must be exercised by at least one numbered step in section 7.

| Requirement ID | Requirement text (summary) | Source document | Risk |
|---|---|---|---|
| `<<FILL: URS-021>>` | `<<FILL: access is role-based; each role grants only the privileges defined in the role-privilege matrix>>` | `<<FILL: URS-ID, version>>` | High |
| `<<FILL: URS-022>>` | `<<FILL: passwords meet complexity and history policy; accounts lock after N failed attempts>>` | `<<FILL: URS-ID, version>>` | High |
| `<<FILL: URS-023>>` | `<<FILL: incompatible duties are segregated; no single account can both perform and approve the same action>>` | `<<FILL: URS-ID, version>>` | High |
| `<<FILL: URS-024>>` | `<<FILL: disabled or expired accounts cannot authenticate; unauthorized actions are refused and logged>>` | `<<FILL: URS-ID, version>>` | High |

## 2. Objective

In one or two sentences, state what passing this script demonstrates. Example: this script verifies that the system enforces role-based least privilege, the configured password and lockout policy, and segregation of duties, and that it refuses authentication and privileged actions from disabled accounts, expired credentials, and under-privileged roles.

`<<FILL: objective>>`

## 3. Access model under test

Attach or summarize the role-privilege matrix being verified. The test steps in section 7 are derived from this table, one role at a time, and must cover both the privileges each role should have and the privileges it must not.

| Role | Allowed privileges (sample) | Denied privileges (must be blocked) |
|---|---|---|
| `<<FILL: Operator / Analyst>>` | `<<FILL: create and edit own records, run sequences>>` | `<<FILL: approve, delete records, change config, manage users>>` |
| `<<FILL: Reviewer / QA>>` | `<<FILL: review, approve, e-sign, read audit trail>>` | `<<FILL: create or edit the data being approved, manage users>>` |
| `<<FILL: Administrator>>` | `<<FILL: manage users, roles, configuration>>` | `<<FILL: create, edit, approve GxP data records>>` |

Note the deliberate split in the last row: the administrator who manages accounts should not also be able to create or approve GxP records, and the people who create and approve records should not be able to grant themselves privileges. Where one person must hold both for business reasons, that combination is a documented, justified exception with a compensating control (for example independent audit trail review of administrator actions), not a silent grant.

## 4. Prerequisites

List everything that must be true before execution starts. If any prerequisite is not met, do not execute; record the gap as a deviation and stop.

| No. | Prerequisite | Verified (initials / date) |
|---|---|---|
| 4.1 | Parent protocol `<<FILL: ID>>` is approved and effective. | `<<FILL>>` |
| 4.2 | System is installed at version `<<FILL: version>>` in the test environment, confirmed by IQ `<<FILL: ref>>`. | `<<FILL>>` |
| 4.3 | Security configuration (password policy, lockout threshold, session timeout) is set per configuration specification `<<FILL: ref>>` and a screenshot of the live setting is captured as a baseline. | `<<FILL>>` |
| 4.4 | Dedicated test accounts exist, one per role in section 3, with passwords known only for the test: `<<FILL: list account IDs and roles>>`. | `<<FILL>>` |
| 4.5 | One account is pre-set to disabled, and one to expired (or its password aged past the maximum), for the negative tests. | `<<FILL>>` |
| 4.6 | The tester is trained on this script and the system, training record `<<FILL: ref>>`, and does not hold administrator rights to the live access model outside the test accounts. | `<<FILL>>` |

## 5. Configured policy values under test

Record the configured values once here, then verify them by behavior in section 7. These are the numbers the steps challenge; set them from your configuration specification, not from a default.

| Parameter | Configured value | Source (config spec ref) |
|---|---|---|
| Minimum password length | `<<FILL: e.g. 8 characters>>` | `<<FILL>>` |
| Complexity (character classes required) | `<<FILL: e.g. 3 of upper, lower, digit, symbol>>` | `<<FILL>>` |
| Password history (no reuse of last N) | `<<FILL: e.g. last 5>>` | `<<FILL>>` |
| Maximum password age | `<<FILL: e.g. 90 days>>` | `<<FILL>>` |
| Failed-attempt lockout threshold | `<<FILL: e.g. 5 attempts>>` | `<<FILL>>` |
| Lockout duration / unlock method | `<<FILL: e.g. 30 min, or admin unlock only>>` | `<<FILL>>` |
| Inactivity session timeout | `<<FILL: e.g. 15 min>>` | `<<FILL>>` |

## 6. Execution conventions

Read these before executing, then follow them for every step.

- Record each actual result contemporaneously, as you observe it. Do not pre-fill, do not batch at the end.
- For negative tests, the actual result must capture the system's own denial: the exact error or authorization message text, plus confirmation that the forbidden action did not take effect (no record created, no privilege gained, no login granted). "Access denied as expected" without the message text is weak evidence.
- "Meets expected result" is not an actual result. Write the value, message, or screen state you saw.
- Use one unambiguous mark for pass or fail. A blank cell is incomplete, not a pass.
- Capture objective evidence (screenshot, log export) for every step whose pass depends on a system output or denial, and give that evidence a unique reference recorded in the step.
- Where a step changes account state (lock, disable, age a password), record the starting state and restore it, or note that cleanup is handled in section 12.
- The moment any step does not meet its expected result, mark it Fail, stop if instructed, and open a deviation per section 10. A privilege that should be denied but is allowed is a critical finding, not a minor one.

## 7. Test steps

For each step give the action, the precise expected result, the actual result as observed, pass or fail, and the evidence reference. Expected results are written before execution and must be specific enough that two people would agree on whether they were met. Group the steps by control area so coverage is visible.

### 7.1 Role-based access and least privilege

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 7.1.1 | `<<FILL: log in as the Operator/Analyst account>>` | `<<FILL: login succeeds; the role and user shown match the account>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-001>>` | `<<FILL>>` |
| 7.1.2 | `<<FILL: confirm the allowed privileges for this role are present (create/edit own record, run sequence)>>` | `<<FILL: each allowed function is available and works>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-002>>` | `<<FILL>>` |
| 7.1.3 | `<<FILL: attempt each denied privilege for this role (delete record, change config, open user management)>>` | `<<FILL: each denied function is absent or blocked with an authorization message; no change takes effect>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-003>>` | `<<FILL>>` |
| 7.1.4 | `<<FILL: repeat 7.1.1 to 7.1.3 for the Reviewer/QA role>>` | `<<FILL: reviewer can approve and read audit trail; cannot create or edit the data under approval>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-004>>` | `<<FILL>>` |
| 7.1.5 | `<<FILL: repeat for the Administrator role>>` | `<<FILL: admin can manage users and config; cannot create, edit, or approve a GxP record>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-005>>` | `<<FILL>>` |

### 7.2 Password and lockout policy

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 7.2.1 | `<<FILL: set a new password that is too short or fails complexity>>` | `<<FILL: system rejects it and states the unmet rule (length / character classes)>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-006>>` | `<<FILL>>` |
| 7.2.2 | `<<FILL: set a password equal to one of the last N used>>` | `<<FILL: system rejects reuse and cites password history>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-007>>` | `<<FILL>>` |
| 7.2.3 | `<<FILL: set a compliant password>>` | `<<FILL: change accepted; login with the new password succeeds>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-008>>` | `<<FILL>>` |
| 7.2.4 | `<<FILL: enter a wrong password the configured number of times, then once more>>` | `<<FILL: account locks at the configured threshold; further login is refused with a lockout message>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-009>>` | `<<FILL>>` |
| 7.2.5 | `<<FILL: attempt login during lockout with the correct password>>` | `<<FILL: login still refused until the configured duration elapses or an admin unlocks>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-010>>` | `<<FILL>>` |

### 7.3 Segregation of duties

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 7.3.1 | `<<FILL: as the Operator/Analyst, create and save a record requiring approval>>` | `<<FILL: record saved in a pending state; the same account has no approve option>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-011>>` | `<<FILL>>` |
| 7.3.2 | `<<FILL: as the same account, attempt to approve or e-sign that record>>` | `<<FILL: approval blocked; system requires a different reviewer and gives a segregation message>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-012>>` | `<<FILL>>` |
| 7.3.3 | `<<FILL: as the Reviewer/QA account, approve the record>>` | `<<FILL: approval succeeds; record state changes; approver identity recorded and differs from creator>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-013>>` | `<<FILL>>` |
| 7.3.4 | `<<FILL: as the Administrator, attempt to grant the Analyst account approver rights, then approve a record>>` | `<<FILL: per design, either the admin cannot self-grant approval rights, or the grant is logged and the admin still cannot approve GxP records>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-014>>` | `<<FILL>>` |

### 7.4 Disabled, expired, and unauthorized access

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 7.4.1 | `<<FILL: attempt login with the pre-disabled account>>` | `<<FILL: authentication refused; message indicates the account is disabled; no session created>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-015>>` | `<<FILL>>` |
| 7.4.2 | `<<FILL: attempt login with the expired/aged-password account>>` | `<<FILL: login blocked or forced into mandatory password change before any data access>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-016>>` | `<<FILL>>` |
| 7.4.3 | `<<FILL: disable an active account mid-session, then have that session attempt a privileged action>>` | `<<FILL: action refused or session terminated per design; no record change persists>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-017>>` | `<<FILL>>` |
| 7.4.4 | `<<FILL: as a logged-in low-privilege user, directly request a restricted URL/function (parameter or menu bypass)>>` | `<<FILL: access denied server-side, not just hidden in the menu; attempt logged in the security or audit log>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-018>>` | `<<FILL>>` |
| 7.4.5 | `<<FILL: leave a session idle past the configured timeout, then act>>` | `<<FILL: session has ended; system requires re-authentication before any action>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-019>>` | `<<FILL>>` |
| 7.4.6 | `<<FILL: open the security/audit log and confirm the denied and lockout events were recorded>>` | `<<FILL: failed logins, lockout, and the bypass attempt appear with user, timestamp, and outcome>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SEC-020>>` | `<<FILL>>` |

Add or remove rows so every requirement in section 1 and every role and denied privilege in section 3 is exercised. Number steps continuously within each group; do not reuse a number after a revision.

## 8. Acceptance criteria

This script passes only when all of the following are true:

- Every allowed privilege in the role-privilege matrix works for the role that should have it, and every denied privilege is blocked for the roles that should not, each with recorded actual results and evidence.
- The configured password complexity, history, age, and lockout values behave exactly as set in section 5.
- No single account can both perform and approve the same action; any combined-duty case is a documented, justified exception with a compensating control.
- Disabled and expired accounts cannot authenticate, session timeout enforces re-authentication, and direct (non-menu) requests for restricted functions are refused server-side and logged.
- No step is left blank or ambiguous; every deviation raised during execution is resolved with a documented disposition, and any retest is recorded under its own step or attachment.

A single denied privilege that the system actually allows is a failure of the script, investigated as a critical deviation, not averaged away against the passing steps.

## 9. Evidence index

| Evidence ref | Description | Step | Storage location / attachment |
|---|---|---|---|
| `<<FILL: SEC-003>>` | `<<FILL: denial message for a blocked privilege>>` | 7.1.3 | `<<FILL>>` |
| `<<FILL: SEC-009>>` | `<<FILL: lockout message at threshold>>` | 7.2.4 | `<<FILL>>` |
| `<<FILL: SEC-012>>` | `<<FILL: segregation-of-duties block on self-approval>>` | 7.3.2 | `<<FILL>>` |
| `<<FILL: SEC-020>>` | `<<FILL: security log showing denied and lockout events>>` | 7.4.6 | `<<FILL>>` |

## 10. Deviations raised during execution

Any step that does not meet its expected result, any departure from the written steps, and any prerequisite not met is recorded here and managed per the parent protocol and `<<FILL: deviation / test-incident SOP-ID>>`. Cross-reference the deviation number on the failing step.

| Deviation / incident no. | Step | Description | Classification | Disposition (retest, requirement change, accept with justification) | Closed (date) |
|---|---|---|---|---|---|
| `<<FILL: TI-2026-014>>` | `<<FILL: 7.x.x>>` | `<<FILL: what was observed vs expected>>` | `<<FILL: critical / major / minor>>` | `<<FILL>>` | `<<FILL>>` |

A blocked-action test that instead succeeded is, by default, critical: it means the configured control does not hold. Do not downgrade it without a documented impact assessment and QA agreement.

## 11. Execution summary

| Field | Entry |
|---|---|
| Total steps | `<<FILL>>` |
| Steps passed | `<<FILL>>` |
| Steps failed | `<<FILL>>` |
| Negative (denial) steps passed | `<<FILL: count, since these carry the security weight>>` |
| Deviations raised / closed | `<<FILL>>` |
| Requirements verified (from section 1) | `<<FILL>>` |
| Overall result | Pass / Fail (`<<FILL>>`) |

## 12. Test account cleanup

Security testing creates accounts, locked states, and aged passwords that must not leak into the controlled environment. Record the disposition of every test artifact.

| Item | Action taken | Initials / date |
|---|---|---|
| Test accounts created | `<<FILL: disabled / deleted>>` | `<<FILL>>` |
| Locked / disabled states set during test | `<<FILL: restored or removed>>` | `<<FILL>>` |
| Temporary elevated grants | `<<FILL: revoked>>` | `<<FILL>>` |

## 13. Sign-off

The tester executes and signs; an independent reviewer who did not execute the test confirms the record is complete, the evidence supports each pass (especially the denial evidence), and deviations are resolved. The reviewer should not be the same person who executed the script.

| Role | Name | Signature | Date |
|---|---|---|---|
| Tester (executed) | `<<FILL>>` | | |
| Reviewer (independent) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## 14. References

> 21 CFR Part 11 (electronic records and signatures), in particular 11.10(d) limiting system access to authorized individuals, 11.10(g) authority checks, and 11.300 controls for identification codes and passwords.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), for limiting access and input/output checks.
> EU GMP Annex 11 (Computerised Systems), section 12 on security and access control.
> EU GMP Annex 15 (Qualification and Validation), 2015 revision, for qualification testing principles.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025, for scaling test rigor to risk.
> GAMP 5, Second Edition (a risk-based approach to compliant GxP computerized systems).
> ICH Q9 (Quality Risk Management), for the risk basis of access control depth.
> For medical device software: 21 CFR Part 820 (QMSR, effective 2 February 2026, incorporating ISO 13485:2016) and IEC 62304.

Confirm the current version and clause numbers of each reference before issue.

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the script executed for an example laboratory information management system, verifying role-based least privilege, lockout, segregation of duties, and disabled-account behavior. The company, system, accounts, and numbers are illustrative; replace them with your own.

**Header (extract)**

| Field | Entry |
|---|---|
| Test script title | Security and Access Control, LIMS |
| Test script ID | TS-OQ-031, v1.0 |
| Parent protocol | OQ-LIMS-007 |
| System name and ID | Laboratory Information Management System, instance LIMS-VAL (validation) |
| System version / build | 11.4.2, build 9023 |
| Authentication model | Domain SSO, MFA on; local lockout policy applied |
| Test phase / type | OQ / scripted, risk High |

**Configured policy values under test (extract)**

| Parameter | Configured value |
|---|---|
| Minimum password length | 8 characters |
| Complexity | 3 of upper, lower, digit, symbol |
| Password history | no reuse of last 5 |
| Lockout threshold | 5 failed attempts |
| Lockout duration | 30 min, or admin unlock |
| Session timeout | 15 min idle |

**Test steps (executed, extract)**

| Step | Action | Expected result | Actual result | P/F | Evidence | Initials / date |
|---|---|---|---|---|---|---|
| 7.1.3 | As analyst1 (Analyst role), attempt to delete a saved result and open user management. | Both denied with an authorization message; no change. | Delete option was absent; user management returned "You are not authorized to access this function." No record removed. | Pass | SEC-003 | AP 09 Jun 2026 |
| 7.1.5 | As admin1 (Administrator role), attempt to approve a pending result. | Approve blocked; admin cannot approve GxP records. | Approve button was not shown for admin1; menu offered only user and config management. | Pass | SEC-005 | AP 09 Jun 2026 |
| 7.2.4 | Enter a wrong password for analyst2 five times, then a sixth attempt. | Account locks at the fifth failure; sixth refused with lockout message. | Lockout triggered after the fifth failure; sixth attempt returned "Account locked. Contact administrator." | Pass | SEC-009 | AP 09 Jun 2026 |
| 7.3.2 | As analyst1, who created result R-2206-041, attempt to approve it. | Self-approval blocked; a different reviewer required. | System returned "The creator of a record cannot approve it." No approval recorded. | Pass | SEC-012 | AP 09 Jun 2026 |
| 7.3.3 | As reviewer1 (QA role), approve R-2206-041. | Approval succeeds; approver differs from creator. | Approved by reviewer1, 09 Jun 2026 14:08 EDT; record showed creator analyst1, approver reviewer1. | Pass | SEC-013 | AP 09 Jun 2026 |
| 7.4.1 | Attempt login with disabled account analyst9. | Authentication refused; account disabled; no session. | Login returned "Your account is disabled." No session created; event in security log. | Pass | SEC-015 | AP 09 Jun 2026 |
| 7.4.4 | As analyst1, request the configuration page directly by its URL. | Access denied server-side, not just hidden; attempt logged. | Direct request returned a 403 authorization error from the server, not the page; security log recorded the denied attempt with user and timestamp. | Pass | SEC-018 | AP 09 Jun 2026 |

**Execution summary**

| Field | Entry |
|---|---|
| Total steps | 20 |
| Steps passed | 20 |
| Steps failed | 0 |
| Negative (denial) steps passed | 12 |
| Deviations raised / closed | 0 / 0 |
| Requirements verified | URS-021, URS-022, URS-023, URS-024 |
| Overall result | Pass |

**Sign-off**

| Role | Name | Date |
|---|---|---|
| Tester (executed) | A. Patel, signed | 09 Jun 2026 |
| Reviewer (independent) | R. Gomez, signed | 10 Jun 2026 |
| QA approval | S. Lin, signed | 10 Jun 2026 |

In this example the tester recorded the exact denial message text for every blocked action, not "access denied as expected", confirmed server-side enforcement of the URL bypass rather than a hidden menu, and showed that the record creator could not approve the same record. Twelve of the twenty steps were negative tests, which is where the security assurance actually sits. Had step 7.3.2 instead let analyst1 approve a record they created, the tester would have marked it Fail, raised a critical test incident, and held the conclusion, which is exactly what section 10 is built to capture.

## Common inspection findings this template prevents

- Access control "tested" only on the happy path, with no negative steps proving that a forbidden action is actually blocked.
- A denial recorded as "access denied as expected" with no message text and no proof the action did not take effect.
- A restricted function merely hidden from the menu but still reachable by direct URL or parameter, never tested for server-side enforcement.
- Password and lockout policy declared in the specification but never exercised, so the live setting could differ from the documented value with no evidence either way.
- The same account able to create and approve, or an administrator able to grant themselves data privileges, with no segregation-of-duties test and no documented exception.
- Disabled or terminated accounts that still authenticate, because the test never attempted a disabled-account login.
- A combined-duty exception used in practice with no written justification and no compensating control such as independent review of administrator actions.
- The security or audit log never checked to confirm that failed logins, lockouts, and bypass attempts are recorded.
- The same person executing and reviewing the security script, with no independent check that the denial evidence supports each pass.

## How to adapt this template

1. Set your test script ID, parent protocol, system version, authentication model, and effective date in the header, and confirm you are testing in a qualified non-production environment.
2. Paste your actual role-privilege matrix into section 3 and write one set of steps per role, covering both the privileges it should have and the privileges it must not.
3. Set the real configured policy values in section 5 from your configuration specification, then make sure section 7.2 challenges each one by behavior.
4. Add roles and denied-privilege rows as your access model requires; the four groups in section 7 are the minimum, not the ceiling. For SSO or federated systems, add steps for centrally disabled accounts and token expiry.
5. Decide before execution how any unavoidable combined-duty case is handled, and record it as a justified exception with a compensating control rather than letting a step quietly pass.
6. Point the cross-references in sections 4, 10, and 13 to your real protocol, deviation or test-incident procedure, and review and approval process, and make sure section 12 cleanup leaves no test account or locked state behind.
7. Confirm every regulation in section 14 against the current published version before issue.
