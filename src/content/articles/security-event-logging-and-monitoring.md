---
title: "Security Event Logging, Monitoring, and Review for GxP Systems"
description: "How to capture, store, alert on, and independently review the system-level security events that protect a GxP record, treating the infrastructure log layer as a data integrity control in its own right."
pubDate: 2026-06-22
tags: ["security-logging", "data-integrity", "21-CFR-Part-11", "audit-trail", "monitoring", "csv", "GxP"]
pillar: "csv-csa"
tier: "Advanced"
---

Most data integrity programs put enormous effort into the application audit trail and almost none into the layer underneath it. That is a mistake, and inspectors have started to notice. The application audit trail tells you that user `jdoe` changed an assay result from 98.2 to 99.1. It does not tell you that two minutes earlier an administrator logged into the database directly, ran an UPDATE statement against the results table, and disabled the audit trail for ninety seconds while doing it. The application has no idea that happened. The thing that knows is the system log: the operating system security log, the database server log, the application server log, the directory service log. Those logs are a separate data integrity control, and treating them as one is what separates a mature program from a paper one.

This article covers the security event logging layer end to end: which events actually matter for integrity, how to get them off the host where the threat lives and into a tamper-evident store, how to alert on the handful that warrant a same-day response, and how QA reviews administrator activity without IT marking its own homework. If you are coming from the application side, read [audit trail design and review](/articles/audit-trail-design-and-review) first, then come back here, because the central idea of this article is that the system log is a distinct control that the application audit trail cannot replace. Access control mechanics are covered in [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control); this article assumes those controls exist and asks the next question: how do you prove they are working and catch it when they fail.

---

## The system log as a data integrity control

### Why the two layers are not the same thing

The application audit trail and the system security log answer different questions, and a defensible program needs both.

| Question | Answered by |
|---|---|
| What did a user change inside the application? | Application audit trail |
| Who logged into the application, and when? | Application audit trail (usually) |
| Who logged into the operating system or database hosting the application? | System security log |
| Was the application audit trail turned off, and by whom? | System log and application config log, not the application data trail |
| Did anyone edit the database directly, bypassing the application? | Database server log only |
| Did the system clock move? | Operating system log |
| Did a privileged account get created or have its rights changed? | Directory service and OS security log |

The pattern that should worry you: every question that an attacker or a careless administrator would most want unanswered is answered only by the system log, never by the application trail. A user who wants to falsify a result and cover the tracks does not do it through the application, because the application records it faithfully. They do it underneath, where the application is blind. If the only integrity control you have is the application audit trail, you have built a very good lock on the front door and left the back wall open.

### Why it is required (regulation and risk)

The regulatory hook is less explicit than it is for the application audit trail, which is part of why this layer gets neglected, but it is firmly there. 21 CFR Part 11.10(d) requires that closed systems limit system access to authorized individuals, and 11.10(g) requires authority checks to ensure only authorized individuals can use the system, electronically sign records, access the operation, or alter a record. You cannot demonstrate that access was limited to authorized individuals unless you log access attempts and review them. 11.10(e) requires secure, computer-generated, time-stamped audit trails; if a privileged user can disable that trail, the act of disabling it has to be recorded somewhere the same user cannot reach, which is the system log on an off-host store.

> Persons who use closed systems to create, modify, maintain, or transmit electronic records shall employ procedures and controls designed to ensure the authenticity, integrity, and, when appropriate, the confidentiality of electronic records. (21 CFR 11.10, opening clause)

"Authenticity" and "integrity" are the operative words. An audit trail you cannot prove was running, on a host whose administrator access you do not monitor, supports neither.

In the European Union, EU GMP Annex 11 addresses security directly. Clause 12 calls for a mix of physical and logical controls that hold system access to authorized people, and it offers familiar examples of how to keep unauthorized users out: physical keys, pass cards, personal login codes tied to passwords, biometric checks, and locking down the rooms where the equipment and stored data sit. Clause 12.4 goes further and asks that the systems managing data and documents capture who acted on a record, whether they entered it, edited it, confirmed it, or removed it, together with the date and time of that action. The MHRA "GXP Data Integrity Guidance and Definitions" (March 2018) and PIC/S PI 041 both treat the segregation of system administration from the people who own the data as a core integrity expectation, and you cannot enforce or evidence that segregation without logging what administrators do. The risk rationale is simple: the highest-privilege accounts on a GxP system are the ones with the means and the access to falsify records invisibly, so they are the accounts whose activity most needs an independent record.

---

## Which events to capture

The trap here is to either log nothing useful (default OS settings rarely capture what matters) or to log everything and drown. The discipline is to capture the integrity-relevant events completely and to be deliberate about the rest. The list below is the set that matters for a GxP system, regardless of whether the system is a LIMS, a chromatography data system, an MES, a historian, or the database and servers underneath them.

### The integrity-relevant event set

| Event | Why it is integrity-relevant | Where it is logged |
|---|---|---|
| Audit trail disabled, paused, or its configuration changed | Direct attack on the primary integrity control | Application config log and OS/DB log |
| System or instrument clock change | Backdating a late entry to look contemporaneous | OS security log |
| Privileged or administrator login (interactive and remote) | The accounts with means to falsify records invisibly | OS, DB, and directory logs |
| Direct database access outside the application | Bypasses the application audit trail entirely | DB server log |
| Failed-login spikes against an account | Brute force, credential stuffing, or a shared-account fishing attempt | OS, application, directory logs |
| Account creation, deletion, enable, or disable | Unauthorized access provisioning; orphaned accounts | Directory and application logs |
| Privilege or group-membership change | Quiet escalation to administrator or to a data-editing role | Directory and application logs |
| Security log cleared or rotated off-schedule | Destroying the record of the above | OS security log |
| Logging service stopped | Going dark before doing something | OS log |
| Changes to the logging or forwarding configuration | Redirecting or muting the evidence stream | OS and forwarder logs |
| Backup deletion or restore from backup | A restore can silently roll a record back to an earlier state | Backup system and DB logs |
| Account lockout and lockout reset | Lockout reset by an admin can mask a brute-force attempt | OS and directory logs |

If you capture only these and capture them completely, you have the events an inspector will ask about and the events an investigation will need. The first three rows, audit-trail-disabled, clock change, and privileged login, are the ones to build first if you have to phase the work.

### What you can be lighter on

Routine application reads, successful standard-user logins to a low-risk system, and verbose debug output are not integrity-relevant in themselves and can be logged at a lower retention or excluded with a documented rationale. The judgment is risk-based: tie the depth of logging to what the system does. A system that takes raw analytical data and feeds batch release decisions earns the full set; a read-only reporting front end that touches no source record can carry less. Write the rationale down in the system's data integrity assessment so the scoping decision is defensible rather than accidental.

### How to turn capture on (step by step)

1. Start from the integrity-relevant event set above and map each row to the specific log source on this system: which OS audit policy subcategory, which database audit specification, which application security setting, which directory audit policy.
2. Enable the corresponding audit policy on each host. On Windows this is Advanced Audit Policy (Logon/Logoff, Account Management, Account Logon, Policy Change, System, and object access on the audit-trail tables and config files). On Linux this is the audit daemon (auditd) with rules watching the relevant binaries, config files, and the audit configuration itself. On the database it is native auditing scoped to logins, DDL, direct DML on GxP tables, and audit-config changes.
3. Set object-level auditing on the artifacts that hold or control the integrity record: the audit trail table or files, the application configuration that enables them, the logging configuration, and any credential store.
4. Configure forwarding off the host immediately (see the next section) so that the moment events start being captured they also start leaving the host.
5. Qualify the capture: in OQ or a focused configuration verification, perform each integrity-relevant event in a controlled way and confirm it appears in the log with the right detail. This is the test that proves the logging works, and it is the test most often skipped.

**Acceptance criteria for capture.** Each event in the integrity-relevant set produces a log entry containing who (a unique, attributable identity, never a shared account), what (the specific action and target), and when (a trustworthy timestamp). The capture survives a host reboot and is enabled by a controlled configuration that is itself under change control. A test that deliberately triggers each event during qualification finds the matching log entry every time.

---

## Off-host, tamper-evident storage

### Why local logs are not enough

Here is the failure mode the whole storage design exists to defeat. An administrator on the host has, by definition, the rights to edit or clear the logs on that host. If the only copy of the security log lives on the same machine as the activity it records, the person most able to do something they should not is also the person most able to erase the evidence. A local log is a control that the controlled party administers, which is no control at all for the highest-risk events.

The fix is to get the log off the host the moment it is written, into a store that the host's administrators cannot reach with the same credentials. This is sometimes called a SIEM (Security Information and Event Management) platform, sometimes a central log server, sometimes a log archive. The name matters less than three properties.

### The three properties an off-host store must have

| Property | What it means | How it is achieved |
|---|---|---|
| Separation of duties | The people who administer the GxP hosts cannot administer or delete from the log store | Different administrator group, ideally a different team (security or a neutral IT function) |
| Tamper evidence | Any alteration or deletion of stored logs is itself detectable | Write-once or append-only storage, cryptographic hashing or chaining, immutability windows |
| Near-real-time forwarding | Events leave the host fast enough that a local wipe does not also lose the central copy | Streaming forwarder (syslog over TLS, agent-based forwarding) rather than nightly batch pulls |

Tamper evidence does not require exotic technology. Append-only or write-once-read-many (WORM) storage, an object store with an immutability lock for the retention period, or periodic hashing of log batches with the hashes stored separately all qualify. The standard you are meeting is the same one the application audit trail meets under Part 11.10(e): record changes shall not obscure previously recorded information, applied now to the log store itself.

### How to set it up (step by step)

1. Stand up a log store outside the administrative control of the GxP system owners. If IT runs the GxP servers, the log store should be owned by security or by a separate IT function, with access that the server administrators do not hold.
2. Configure each GxP host to forward the integrity-relevant events over an encrypted channel (TLS-protected syslog or an authenticated agent) in near real time, not as a scheduled batch.
3. Enable immutability on the store: WORM, an object-lock retention policy, or hash-chaining so that any deletion or edit of an archived event is detectable.
4. Set retention to at least the GxP record retention period for the records the system supports, and confirm the store enforces it. Security logs that prove the integrity of a batch record need to outlive the batch record.
5. Monitor the forwarding path itself. A host that stops forwarding is a host that has gone dark, intentionally or not, and that gap is exactly when something would be hidden. Alert on forwarding silence.
6. Qualify the store and the path as infrastructure: include log forwarding and retention in [infrastructure qualification](/articles/infrastructure-qualification-and-spreadsheet-validation), with a test that a forwarded event arrives intact and that an attempted deletion from the store is prevented or detected.

**Acceptance criteria for storage.** Security events arrive at the off-host store within minutes of occurring; the GxP host administrators cannot delete or alter events in the store using their host credentials; any tampering with stored events is detectable; retention meets or exceeds the supported records' retention; and a forwarding outage raises an alert rather than passing silently.

---

## Alerting: the events that warrant a same-day response

Most security events are reviewed periodically. A small subset cannot wait for a periodic review because by the time the monthly review runs, the damage is done and the window to investigate has closed. Alerting is the control that handles those.

The error to avoid is alert fatigue: wire up a hundred alerts, get five hundred a day, and the reviewer learns to ignore all of them, including the real one. The discipline is to alert on the few events that are both high-signal and time-sensitive, and to send everything else to the periodic review instead.

### What to alert on in real time

| Alert | Why it cannot wait | Typical response |
|---|---|---|
| Audit trail disabled or paused on a production GxP system | The integrity control is off right now; any data created in that window is suspect | Immediate investigation; quarantine affected records |
| System clock moved backward outside a known maintenance window | Active backdating risk against a contemporaneous record | Immediate investigation; identify records timestamped in the affected window |
| Logging service stopped or forwarding silent on a production host | The system has gone dark; you are blind until it is fixed | Restore logging; investigate the gap |
| Failed-login spike above threshold against a privileged account | Brute force or credential attack in progress | Lock the account; investigate source |
| New account added to an administrator or data-editing group | Unauthorized privilege escalation | Verify against an approved access request; revoke if none |
| Security log cleared on a production host | Direct destruction of evidence | Immediate investigation; rely on the off-host copy |

Tune the failed-login threshold to the system. Three failures might be normal for a forgetful user; thirty failures in two minutes against a service account is an attack. Set the threshold from observed baseline behavior, document it, and revisit it, because a threshold that fires constantly trains people to ignore it and a threshold that never fires is not actually a control.

### What does not need an alert

Single failed logins, routine successful logins, scheduled maintenance windows that were approved in advance, and the ordinary day-to-day administration that the periodic review will catch. Route these to the review queue, not to someone's phone at 2 a.m. The credibility of the alerting channel depends on it being quiet most of the time.

**Acceptance criteria for alerting.** Each real-time alert reaches a named, available responder by a defined route; thresholds are documented and based on baseline behavior; a test alert (a deliberately triggered audit-trail-disable in a non-production copy, for example) reaches the responder within the target time; and a documented procedure defines the response, the escalation, and the record of action for each alert type. False-positive rate is low enough that responders still act on alerts.

---

## QA-independent review of administrator activity

### Why independence is the whole point

Periodic review of the security log is where the system layer earns its keep, and the single most important attribute of that review is independence. The review has to be done by, or formally on behalf of, someone who is not the administrator whose activity is under review. IT reviewing its own administrators is the audit equivalent of marking your own homework: the conflict is structural, not a matter of anyone's good faith.

This is the direct analogue of the rule for the application audit trail: the people who generate the records should not be the sole reviewers of the trail of those records. For the system log the records are administrator actions, so quality assurance, or a security function reporting outside the line being reviewed, owns the review. The reviewer does not need to be able to run a database; they need to be able to read the log, recognize what is normal, and challenge what is not.

### What the review covers

1. Every privileged login on the production GxP systems in the period: was each one performed by an authorized administrator, for a documented reason, ideally tied to an approved change or incident ticket.
2. Every audit-trail configuration change, every clock change, and every logging-service stop: each explainable from a contemporaneous record (a planned-maintenance entry, a change record, a documented NTP resync), with anything unexplained raised as a deviation.
3. Every account creation, deletion, and privilege change: reconciled against approved access requests, with any change lacking an approval treated as a finding. Pair this with the periodic access review described in [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).
4. Every direct database access outside the application: each justified by a documented, approved task (an emergency data fix under change control, for example), with unjustified direct access treated as a serious integrity finding.
5. Failed-login patterns: confirm that spikes were investigated and closed.

### How to run the review (step by step)

1. Set a frequency that matches risk. High-risk production systems that feed release decisions earn a monthly cadence; lower-risk systems can run quarterly. Write the frequency and rationale into the procedure.
2. Pull the period's integrity-relevant events from the off-host store, not from the host (reviewing the host's local copy reintroduces the tampering risk the store exists to remove).
3. Work the categories above. For each event, reconcile to an authorizing record. The review is fundamentally a reconciliation: every privileged action should map to an approved reason.
4. Document what was reviewed, the period, the source, the reviewer, the date, the events examined, the exceptions found, and the disposition of each. A review with no record of scope is not evidence that the review happened.
5. Route exceptions into the quality system as deviations or investigations under [change control](/articles/change-control-validated-systems) and the CAPA process. An exception with no follow-through is worse than no review, because it shows you saw the problem and did nothing.

**Acceptance criteria for review.** The reviewer is demonstrably independent of the administrators being reviewed; the review draws from the tamper-evident off-host store; every privileged action in the period reconciles to an authorizing record or is raised as a deviation; the review is documented with scope, source, reviewer, and disposition of each exception; and exceptions are tracked to closure in the quality system. The frequency is defined, risk-based, and met.

---

## A worked example

A quality control laboratory runs a chromatography data system whose results feed batch release. The application audit trail is fully configured at the application level, Tier 3, prior values captured, review documented. By the application's own evidence, the system is clean.

The monthly security log review, run by QA from the central log store, surfaces a privileged login to the database server at 23:14 on a Tuesday by the account `svc_dbadmin`. The application audit trail shows nothing at that time, because nothing happened in the application. The database log, however, shows three things in sequence: a direct connection to the results database, an UPDATE statement against the chromatography results table, and a disconnect, all within four minutes. The OS log shows that ninety seconds before the UPDATE, the application's audit-trail logging service was stopped, then restarted afterward.

None of this is visible from the application. The application audit trail has no entry for the changed result because the change was made underneath it, with the trail temporarily off. The only reason it surfaced at all is that the system log captured the privileged login, the direct DML, and the logging-service stop, forwarded all three off-host before anything local could be cleaned up, and an independent reviewer read them and asked why a service account edited release data at 23:14.

The investigation finds the change was an analyst, working through a shared service account, "correcting" a result that had failed specification, without a deviation, without a change record, without leaving a trace in the application. The record is invalidated, the batch is held, the shared account is decommissioned in favor of named credentials with the database direct-access right removed, and the gap, that direct DML on the results table was possible at all and that the audit trail could be stopped without an alert, becomes a CAPA. The alert on audit-trail-stopped, which had not existed, is built so the next attempt is caught in minutes rather than at month-end.

That is the entire argument for this layer in one incident. The application said everything was fine. The system log said otherwise, and it was right.

---

## Roles

| Role | Responsibility |
|---|---|
| IT / system administration | Configure and maintain event capture and forwarding; do not own the log store or its review |
| Security / log-store owner | Own the off-host store, enforce immutability and retention, administer access that the GxP host admins do not hold |
| Quality assurance | Own the independent periodic review of administrator activity; raise and track exceptions; approve the logging configuration as a controlled item |
| System / process owner | Define which events are integrity-relevant for the system; ensure the logging design is in the data integrity assessment; resource the reviews |
| Incident responder (named on-call) | Act on real-time alerts within the target time; document the response |
| Validation / CSV | Qualify the capture, forwarding, retention, and alerting; include log integrity tests in OQ and infrastructure qualification |

The non-negotiable structural rule across this table: the party that administers the GxP hosts does not own the log store and does not perform the independent review. If those collapse into one team, the control is cosmetic.

---

## Common 483-type mistakes

- **The system log layer simply does not exist.** Plenty of effort on the application audit trail, nothing underneath it. No record of who logged into the OS or database, no detection of direct database edits. The application trail is treated as the only integrity control, leaving every back-channel unmonitored.
- **Logs live only on the host.** Security events are captured but stored on the same machine the administrators control, so the highest-privilege users can clear the evidence of their own actions. No off-host copy, no immutability.
- **No detection of audit-trail-disabled.** The application audit trail can be stopped, and nothing records or alerts on the stopping. The one event that most undermines the primary integrity control is invisible.
- **IT reviews its own administrators.** The periodic review of privileged activity is performed by the same function whose activity is being reviewed, with no independent challenge. The conflict is structural and an inspector will say so.
- **Direct database access is possible and unmonitored.** Application users or administrators can edit GxP tables directly, bypassing the application audit trail entirely, and nothing flags it. This is the classic invisible-falsification path.
- **Alert fatigue or no alerting at all.** Either no real-time alerts exist for the time-sensitive events, or so many alerts fire that responders ignore all of them, including the real one.
- **No clock-change detection.** System clock changes are not logged or not reviewed, so backdating cannot be detected. A backward clock change near a contested result is one of the most serious findings there is, and many programs cannot even see it.
- **Logging not qualified.** The logging configuration was never tested. Nobody confirmed that triggering each integrity-relevant event actually produces a log entry, so the program is trusting capture it has never verified.
- **Review with no record of scope.** Someone "reviews the logs" but cannot show what period, what source, what events, or what exceptions. An undocumented review is not evidence a review happened.
- **Retention shorter than the records it protects.** Security logs roll off after ninety days while the batch records they protect must be kept for years, so when an old record is questioned the proof of who touched it is gone.

---

## Interview Q&A angle

**Q: What is the difference between an application audit trail and a system security log, and why do you need both?**
The application audit trail records what users do inside the application: who changed which field, from what value to what value, when. The system security log records what happens at the operating system, database, and infrastructure layer: who logged into the host, who accessed the database directly, whether the audit trail itself was stopped, whether the clock moved. You need both because the events most useful to someone falsifying a record, direct database edits, disabling the audit trail, backdating the clock, are invisible to the application and visible only to the system log. Relying on the application trail alone leaves the back channel unmonitored.

**Q: An administrator on a GxP server can edit the local security log. How do you make the log trustworthy?**
You get it off the host in near real time into a store the host administrators cannot reach with their host credentials, owned by a separate function such as security, with write-once or immutable storage and retention that meets or exceeds the records it protects. Local-only logs are a control administered by the controlled party, which is no control. The off-host, tamper-evident store is what makes the highest-privilege actions provable.

**Q: Which security events would you alert on in real time, and how do you avoid alert fatigue?**
Real-time alerts for the time-sensitive, high-signal events: audit trail disabled or paused on production, a backward clock change outside a maintenance window, logging stopped or forwarding gone silent, a failed-login spike against a privileged account, a new member of an administrator group, and a cleared security log. Everything else goes to the periodic review. Avoid fatigue by alerting only on those, setting thresholds from observed baseline behavior, and documenting them, so the channel stays quiet enough that responders still act on it.

**Q: Who should review administrator activity, and why does it matter who does it?**
Quality assurance, or a security function reporting outside the line being reviewed, must do it, never the administrators whose activity is under review. It matters because IT reviewing its own privileged actions is a structural conflict, the same reason record creators should not be the sole reviewers of the audit trail of those records. The reviewer reconciles every privileged action to an authorizing record and raises anything unexplained as a deviation tracked to closure.

**Q: How do you prove your security logging actually works?**
You qualify it. During OQ or a focused configuration verification you deliberately trigger each integrity-relevant event in a controlled environment, a test login, a test direct-database access, a test audit-trail stop, and confirm each appears in the log and arrives intact at the off-host store with the right who, what, and when. Capture you have never tested is capture you cannot rely on, and "we assume it logs" is not an answer an inspector accepts.

---

Security event logging is the layer that catches what the application cannot see. Build the integrity-relevant event set, get the logs off the host into a tamper-evident store the administrators do not control, alert on the handful of events that cannot wait, and have an independent function reconcile privileged activity to authorizing records on a risk-based cadence. Do that and the back wall is closed, not just the front door. For the application-side counterpart, see [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review); for the access controls this monitoring assumes, see [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).
