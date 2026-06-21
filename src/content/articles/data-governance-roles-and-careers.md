---
title: "Data Governance Roles and Career Paths: Owner, Steward, Custodian, and the Digital Quality Function"
description: "How data owner, steward, and custodian roles are defined in regulated life sciences, how to build a digital quality function, and where the careers sit. Practical role definitions, a sample RACI, and interview answers."
pubDate: 2026-06-20
tags: ["data-integrity", "data-governance", "digital-quality", "careers", "roles", "gxp", "raci"]
pillar: "data-integrity"
tier: "Intermediate"
---

Data governance fails for one of two reasons. Either nobody owns the data, so when an audit trail review slips or a system goes out of validation no single person is accountable, or everybody "owns" it, which is the same thing wearing a suit. The owner/steward/custodian model exists to fix that. It assigns named accountability for each GxP data set and the systems that hold it, so that when an inspector asks "who is responsible for the integrity of this chromatography data," there is a name, a job description, and a signature behind the answer.

This article defines the three governance roles as they are actually used in pharma and biotech, shows how they map onto a digital quality function, and lays out the career ladder. It is written for someone who has to set up these roles, sit in one of them, or interview for one. By the end you should be able to draft a role description, build the RACI, defend the model to an inspector, and know which job to aim for next.

---

## Why governance roles exist: the regulatory basis

No regulation contains a clean table that says "appoint an owner, a steward, and a custodian." The roles are an industry response to requirements that demand accountability for data integrity without prescribing the org chart. You assemble the model from several sources.

**EU GMP Chapter 4 (Documentation)** and the **PIC/S PI 041-1 "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments" (2021)** are the most direct. PI 041-1 states that senior management is responsible for establishing a data governance system and for ensuring it is resourced and embedded in the quality system. It explicitly ties data integrity to defined responsibilities and to a culture where staff are not afraid to report problems. The guidance frames data governance as "the sum total of arrangements to ensure that data, irrespective of the format in which it is generated, is recorded, processed, retained and used to ensure a complete, consistent and accurate record throughout the data life cycle."

**MHRA "GxP Data Integrity Guidance and Definitions" (2018)** says the same in fewer words: there should be a data governance system that is part of the overall quality management system, with clearly defined roles and responsibilities, and management is accountable for it.

**WHO Technical Report Series, Annex on data integrity (TRS 1033, Annex 4, 2021)** reinforces the management-accountability point and the need for designated responsibilities.

For computerized systems specifically, **EU GMP Annex 11** requires that responsibilities for system management be defined, that there be a documented agreement between the customer and any third party (the basis for the IT/vendor custodian split), and that data be secured against unauthorized changes by people with defined access rights. **21 CFR Part 11** drives the same access-control and accountability logic on the US side, and the **FDA "Data Integrity and Compliance With Drug CGMP" guidance (2018)** points back to the predicate rules in 21 CFR 211, including 211.68 (computer controls) and 211.194 (laboratory records).

The risk rationale underneath all of this: data integrity controls only work if a specific person is responsible for running them. An audit trail that nobody reviews, a user list that nobody recertifies, a backup that nobody confirms restored cleanly, these are the classic gaps. The owner/steward/custodian split exists so each of those controls has an accountable name.

> PIC/S PI 041-1, on management responsibility: senior management is responsible for the implementation of systems and procedures to minimize the potential risk to data integrity, and for identifying the residual risk, using quality risk management principles.

See also [data-governance-framework](/articles/data-governance-framework) for the program that these roles sit inside, and [di-program-architecture](/articles/di-program-architecture) for how the pieces connect.

---

## The three core roles, defined

The model separates accountability for the *content* of data from responsibility for the *system* that holds it. That separation is the whole point. A lab director can be accountable for the meaning and quality of test data without knowing how to administer the server it lives on, and an IT administrator can keep the system running without being expected to judge whether a result is scientifically valid.

### Data Owner

The data owner is accountable for a defined set of data, usually aligned to a business process or a system's primary purpose. This is a business or quality role, not an IT role. The owner is typically a department head or process leader: the head of QC for laboratory data, the head of manufacturing for batch records, the head of clinical operations for trial data.

What the owner is accountable for:

- The data set exists for a legitimate, defined purpose and is fit for that purpose.
- Data criticality and risk for that data set are assessed and kept current (links to [data-criticality-and-data-risk](/articles/data-criticality-and-data-risk)).
- Access is appropriate: who should be able to read, enter, change, approve, and the owner approves the access matrix.
- Retention and archival requirements are defined and met.
- Controls (audit trail review, periodic review, reconciliation) are happening, even if delegated.
- Decisions about the data set, new uses, migrations, decommissioning, get owner sign-off.

The owner does not personally perform every control. The owner is the accountable single name. In RACI terms the owner is usually Accountable.

### Data Steward

The steward is responsible for the day-to-day quality and governance of the data on the owner's behalf. This is the operational governance role and the one most data-governance jobs actually are. A steward translates the owner's accountability into running activity.

What the steward does:

- Maintains data definitions, metadata standards, and naming conventions for the data set.
- Runs or coordinates the periodic audit trail reviews and flags anomalies (see [operationalizing-audit-trail-review](/articles/operationalizing-audit-trail-review)).
- Performs user access recertification, confirming each active account still needs its privileges.
- Monitors data quality: completeness, consistency, ALCOA+ attributes, and raises deviations when something is off.
- Coordinates with the custodian on backups, archival, and system changes that affect the data.
- Is the first point of contact for questions about that data set during an inspection.

Stewards sit close to the process. In a QC lab the steward might be a senior analyst or a QC systems specialist. In clinical it might be a data manager. In RACI terms the steward is usually Responsible.

### Data Custodian

The custodian holds and operates the system or infrastructure that stores the data, and safeguards it technically. This is the IT or system-administration role. The custodian does not decide what the data means or whether access requests are legitimate; the custodian executes the technical controls that the owner approved and the steward governs.

What the custodian is responsible for:

- Physical and logical safekeeping of the data: storage, servers, databases, cloud tenancy.
- Backups, restores, and verified recoverability (links to [backup-restore-disaster-recovery-validation](/articles/backup-restore-disaster-recovery-validation)).
- Provisioning and de-provisioning accounts per approved requests; technical enforcement of access controls and segregation of duties.
- System availability, patching, security hardening, and disaster recovery.
- Maintaining the technical configuration baseline and supporting change control.
- Time synchronization and clock control on the systems (see [time-stamps-and-system-clock-control](/articles/time-stamps-and-system-clock-control)).

The custodian is frequently a third party: an internal IT department, a cloud or SaaS provider, or a managed-service vendor. When it is external, Annex 11 and the underlying quality agreement define the split (see [cdmo-oversight-quality-agreements](/articles/cdmo-oversight-quality-agreements) and [cloud-saas-validation](/articles/cloud-saas-validation)). In RACI terms the custodian is usually Responsible for the technical activities and Consulted on others.

### The critical line between the roles

The single most important design rule: **the custodian must not be able to make undetectable changes to the data they hold, and must not approve their own access.** If the IT administrator can edit a result, delete an audit trail entry, or grant themselves elevated rights without an independent approval, the segregation has collapsed and you have a classic data integrity finding waiting to happen. Custodian privileges (system admin) and data-entry/approval privileges (business roles) must be held by different people, and admin actions must themselves be logged and reviewed by someone outside IT, usually the steward or QA.

---

## A worked role-to-data mapping

Abstract definitions do not survive contact with an inspector. You need a concrete inventory that maps each GxP data set to a system, an owner, a steward, and a custodian. Below is a sample for a mid-size biologics site. This is the kind of table you would keep in your data governance framework and pull up when asked "who owns this."

| Data set | Primary system (generic) | Data owner (role) | Data steward (role) | Data custodian (role) |
|---|---|---|---|---|
| Chromatography raw data and results | CDS (e.g. Empower, OpenLab category) | Head of QC | QC systems specialist | IT application administrator |
| Batch manufacturing records | MES / EBR | Head of Manufacturing | MES super-user | IT / MES platform team |
| Stability data | LIMS + stability module | Stability program lead | LIMS data steward | IT application administrator |
| Environmental monitoring | EM software + LIMS | Head of Microbiology | Micro systems analyst | IT application administrator |
| Deviations, CAPA, change control | QMS (e.g. Veeva, MasterControl category) | Head of QA | QMS administrator (business) | IT / SaaS vendor |
| Clinical trial data | EDC / CTMS | Head of Clinical Data Management | Clinical data manager | EDC vendor (hosted) |
| Document control records | EDMS | Head of Quality Systems | Document control lead | IT / SaaS vendor |
| Calibration and metrology | CMMS / calibration software | Head of Engineering | Metrology coordinator | IT application administrator |

Note that the owner is always a named *role* on the business side, never "IT," and the custodian is the only column where an external vendor appears. When a CDS is hosted by a vendor, the custodian splits: the vendor is custodian of the infrastructure, internal IT is custodian of the application layer, and the quality agreement says exactly who does what.

Acceptance criteria for the mapping itself: every GxP system in your validated system inventory appears at least once; every row has all four roles filled with a real role title (not "TBD"); no person sits as both custodian admin and approver of their own access on the same system; and the table is under change control so it stays current.

---

## How to build a digital quality function

The roles above are the atoms. A digital quality function is the organization that holds them together and gives the owners, stewards, and custodians a place to escalate, a common methodology, and an inspection-facing front. Here is how to stand one up, in sequence.

### Step 1: Get a sponsor and a charter

Digital quality lives at the seam between QA, IT, and the operating functions. Without an executive sponsor it gets squeezed. Write a one-page charter: scope (GxP computerized systems and the data in them), mandate (data integrity, computer system validation, system lifecycle governance), and reporting line. Most functions report into Quality, with a strong dotted line to IT. PI 041-1's management-accountability requirement is your lever to get the sponsor; data governance is explicitly a senior-management responsibility.

### Step 2: Inventory systems and classify

You cannot govern what you have not listed. Build or refresh the validated system inventory: every GxP computerized system, its GxP impact, its GAMP category (see [gamp5-csv-framework](/articles/gamp5-csv-framework)), its data criticality, validation status, and current owner/steward/custodian. This inventory is the spine of everything else. Classify by data criticality so you spend effort where the risk is (see [data-criticality-and-data-risk](/articles/data-criticality-and-data-risk)).

### Step 3: Assign the roles and ratify them

For each system, name the owner, steward, and custodian. Have the owners formally accept accountability in writing. This sounds bureaucratic; it is the difference between a model on paper and one an inspector believes. Ratify the assignments through your governance board.

### Step 4: Stand up a governance board

A cross-functional data governance or computerized systems governance board, chaired from Quality, with IT, the major process owners, and validation represented. It meets on a defined cadence (monthly is common), reviews the system inventory, approves new systems and major changes, reviews data integrity metrics, and adjudicates issues that cross functional lines. It is the escalation path for stewards. Minute it; the minutes are inspection evidence.

### Step 5: Write the procedures

The function needs a small, coherent procedure set: a data governance policy, a computer system validation procedure (see [gamp5-csv-framework](/articles/gamp5-csv-framework) and [computer-software-assurance-fda](/articles/computer-software-assurance-fda)), an audit trail review procedure (see [audit-trail-design-and-review](/articles/audit-trail-design-and-review)), an access management procedure, a periodic review procedure (see [validation-master-plan-and-periodic-review](/articles/validation-master-plan-and-periodic-review)), and an electronic records/signatures procedure (see [electronic-signatures-implementation](/articles/electronic-signatures-implementation)). The role definitions live in the data governance policy and are referenced by the others.

### Step 6: Build the metrics and the review cadence

Define data integrity and digital quality metrics: percentage of systems with current periodic review, audit trail reviews completed on time, open access-recertification actions, data integrity deviations by category, time to remediate. Report them to the governance board and to management review (see [management-review-q10](/articles/management-review-q10) and [quality-metrics-and-kpis](/articles/quality-metrics-and-kpis)). Metrics are how you prove the governance system is working, which is exactly what PI 041-1 expects management to be able to demonstrate.

### Step 7: Train, then run

Train owners, stewards, and custodians on their specific responsibilities, not generic data integrity slides (see [training-program-gxp](/articles/training-program-gxp)). Then operate, and let the metrics and the board surface what is not working.

Acceptance criteria for the function: a ratified charter with a named sponsor; a current system inventory with all roles assigned; a governance board with minuted meetings on cadence; the procedure set approved and in effect; metrics reported to management review; and role-specific training records on file.

---

## RACI: making "who does what" auditable

A role model is only useful if it resolves real questions. RACI (Responsible, Accountable, Consulted, Informed) is the tool. Build one RACI for the data governance activities and keep it as a controlled document. Here is a worked example for the recurring data integrity controls.

| Activity | Data Owner | Data Steward | Data Custodian | QA | Process user |
|---|---|---|---|---|---|
| Define data criticality / risk | A | R | C | C | I |
| Approve access matrix | A | R | C | C | I |
| Provision / remove a user account | I | R | R | C | I |
| Audit trail review (periodic) | A | R | C | C | I |
| User access recertification | A | R | C | C | I |
| Backup execution and restore test | I | C | R | I | I |
| System change control | A | R | R | C | I |
| Periodic review of the system | A | R | C | C | I |
| Data integrity deviation investigation | A | R | C | A | I |
| Data migration / decommissioning | A | R | R | C | I |

Two rules keep a RACI honest. First, exactly one Accountable per row; if two functions both think they are accountable, the work falls between them. Second, the Accountable cannot be the same person performing a control that needs independent oversight; that is why audit trail review is Accountable to the owner but the owner is not the one quietly approving their own data changes. Note that data integrity deviation investigation can carry a dual A (owner for the data, QA for the quality decision); when you do that, document who decides what so it is not ambiguous.

For the broader role framework across GxP, see [gxp-roles-responsibilities](/articles/gxp-roles-responsibilities).

---

## Common mistakes and inspection-finding patterns

These are the patterns regulators cite, described generically. If your governance model does not prevent them, it is decorative.

**No defined ownership.** A system is in use, validated, generating GxP data, and when asked "who owns this data," the site cannot name a person, or three people give three answers. This reads to an inspector as an absent data governance system, which is a direct hit against PI 041-1 and the MHRA guidance.

**Custodian with unchecked admin rights.** The IT administrator (or a vendor) holds an account that can modify or delete records and audit trails, with no independent review of admin activity. This is one of the most cited data integrity weaknesses. The fix is segregation: admin actions logged and reviewed by someone outside IT, and admins barred from data-entry/approval roles on the same system.

**Audit trail review assigned to nobody, or assigned to the person who created the data.** If the steward role is undefined, audit trail review tends to either not happen or be done by the analyst reviewing their own work. Reviews must be independent and the responsibility named.

**Owner accountability never formally accepted.** Names appear in a spreadsheet, but the owners were never told and never agreed. When questioned, the "owner" disclaims responsibility. Formal acceptance closes this.

**Stale access lists.** No recertification means accounts of leavers and movers persist, terminated employees retain logins, contractors keep elevated rights. This is both a Part 11/Annex 11 access-control finding and evidence the steward role is not operating.

**Vendor custodian with no quality agreement.** A hosted or SaaS system where the supplier holds the data and there is no documented agreement defining responsibilities. Annex 11 requires that agreement. Its absence is a finding and a real risk, because nobody can say who is responsible for backups, audit trails, or breach notification.

**Governance board that does not meet, or meets without minutes.** A board on the org chart but with no evidence of activity. Inspectors ask for minutes; "we meet sometimes" is not an answer.

**Roles defined but not trained.** People hold the title without knowing the specific tasks. Generic data integrity training does not discharge a role-specific responsibility.

For how these surface in inspections and warning letters, see [fda-warning-letters-patterns](/articles/fda-warning-letters-patterns) and [quality-culture-di-failures](/articles/quality-culture-di-failures).

---

## Where the jobs are: career paths in digital quality

This is the part most articles skip. The owner/steward/custodian model maps onto real job titles and a real ladder. Here is the terrain.

### Entry and adjacent points

Most people arrive at digital quality from one of three directions, not from a "data governance" degree.

- **From the lab or shop floor.** A QC analyst, manufacturing associate, or microbiologist who became the local super-user for the LIMS, CDS, or MES, learned where the data integrity risks live, and moved into a systems or steward role. This is the most common path and arguably the strongest, because process knowledge is the scarce part.
- **From IT.** A system administrator or business analyst who learned GxP and validation and moved into computer system validation or custodian-side quality roles. The gap to close is regulatory and quality thinking.
- **From QA.** A quality professional who specialized in computerized systems, data integrity, and validation. Strong on the quality framework, learning the technical depth.

If you are trying to break in, see [breaking-into-gxp-quality](/articles/breaking-into-gxp-quality) and [career-guide-gxp-validation](/articles/career-guide-gxp-validation).

### The titles and what they mean

Title inflation and inconsistency are real across companies, but these are the common rungs:

| Level | Typical titles | Core work |
|---|---|---|
| Individual contributor (early) | CSV Analyst, Data Steward, QC/MES Systems Specialist, Validation Engineer | Execute validation, run audit trail reviews, maintain data definitions, support access management |
| Senior IC | Senior CSV Specialist, Data Integrity Specialist, Computerized Systems QA Lead | Own validation strategy for a system or area, lead DI assessments, author procedures |
| Lead / SME | DI SME, Digital Quality Lead, Validation Lead | Set methodology, chair audit trail review programs, represent the area in inspections |
| Manager | Manager of CSV / Digital Quality / Data Integrity | Run a team, own the system portfolio, manage the governance board operationally |
| Senior leadership | Head/Director of Digital Quality, Director of Data Integrity, Head of Computerized Systems Compliance | Own the function, the sponsor relationship, the strategy, and the inspection narrative |

The owner role in the governance model usually sits with operating-function leaders (head of QC, head of manufacturing), so "data owner" is rarely a job title you apply for; it is a hat that a department head wears. The steward and custodian roles, by contrast, map directly onto specialist and engineer jobs. The digital quality leadership roles are what the steward/SME track grows into.

### Skills that actually differentiate

Hiring managers in this space consistently value:

- **Real data integrity depth**, not slideware: ALCOA+ applied to specific systems, audit trail review done in anger, data lifecycle thinking (see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data-lifecycle-and-metadata](/articles/data-lifecycle-and-metadata)).
- **CSV/CSA fluency**: GAMP 5 second edition, the FDA Computer Software Assurance guidance (2022 draft), risk-based testing (see [gamp5-csv-framework](/articles/gamp5-csv-framework) and [computer-software-assurance-fda](/articles/computer-software-assurance-fda)).
- **System-specific knowledge** of the platform categories: CDS, LIMS, MES/EBR, EDMS, QMS, EDC. Knowing how audit trails and access controls work in a real LIMS or CDS is worth more than any certificate.
- **Inspection experience**, having defended a system or a data set to FDA, EMA, or MHRA. Even one inspection moves you up a rung.
- **The ability to write** a procedure, a risk assessment, or a remediation plan that holds up (see [technical-writing-for-gxp](/articles/technical-writing-for-gxp)).

Increasingly, fluency with AI/ML governance and validation is becoming a differentiator as those systems enter GxP scope (see [validating-ai-gxp-systems](/articles/validating-ai-gxp-systems) and [gxp-ml-model-lifecycle](/articles/gxp-ml-model-lifecycle)).

### What good looks like at each level

A strong IC closes audit trail reviews on time and catches real anomalies. A strong lead designs a review program that scales and survives an inspection. A strong leader can stand in front of an inspector and explain, without notes, who owns what data, how the governance system works, and how they know it is working. That last sentence is, in practice, the job interview for the top roles.

---

## Interview questions and how to answer them

These are the questions that actually get asked for digital quality and data governance roles, with the shape of a strong answer. Use them to prepare; an inspector asks variants of the same things.

**"Explain the difference between a data owner, a data steward, and a data custodian."**
The owner is the business/quality role accountable for a defined data set: its purpose, criticality, access approval, and retention. The steward operates the governance day to day on the owner's behalf: data definitions, audit trail reviews, access recertification, data quality monitoring. The custodian holds and safeguards the system technically: storage, backups, provisioning, security, and is often a third party. Close with the critical line: the custodian must not be able to make undetectable changes or approve their own access; segregation of duties between custodian admin and business approval is mandatory.

**"Who is responsible for data integrity in your organization?"**
The honest, regulation-aligned answer is layered: senior management is accountable for the data governance system overall (PI 041-1, MHRA guidance), data owners are accountable for their specific data sets, stewards run the day-to-day controls, custodians safeguard the systems, and every user is responsible for their own records. Avoid the trap of saying "QA" or "IT" alone; that signals you do not understand distributed accountability.

**"How would you set up data governance for a new GxP system?"**
Walk the sequence: classify the system (GxP impact, GAMP category, data criticality), assign owner/steward/custodian and have the owner formally accept, define the access matrix and segregation of duties, configure and verify audit trail and time controls, put it under change control and periodic review, and register it in the system inventory and on the governance board. Mention that the role assignment goes on the controlled RACI.

**"An inspector asks who owns the chromatography data. What do you say?"**
Name the role (head of QC as owner, the QC systems specialist as steward, the application administrator as custodian), and be ready to show the controlled document where that mapping lives. The point of the question is whether the accountability is real and documented or improvised on the spot.

**"How do you make sure the IT administrator cannot tamper with data?"**
Segregation of duties: admins do not hold data-entry or approval roles on the same system; admin actions are captured in the audit trail; and that admin activity is reviewed independently by the steward or QA, not by IT itself. Privileged access is granted on the approved access matrix and recertified. If the custodian is a vendor, the quality agreement and Annex 11 define and constrain their rights.

**"What metrics tell you your data governance is working?"**
Periodic reviews and audit trail reviews completed on time, open access-recertification actions, data integrity deviations by category and trend, time to remediate, percentage of systems with assigned and accepted owners. Tie it back: management needs these to demonstrate the governance system is effective, which the guidance expects.

**"What is the regulatory basis for the owner/steward/custodian model?"**
Be precise: there is no single regulation that names those three roles. The model is assembled from PI/S PI 041-1 (2021), the MHRA GxP Data Integrity Guidance (2018), WHO TRS 1033 Annex 4 (2021) on management accountability and defined responsibilities, and EU GMP Annex 11 plus 21 CFR Part 11 for system-management responsibilities, access control, and the customer/third-party agreement. Showing you know it is an industry construct built on those requirements, rather than reciting a fictional clause, is what separates a strong candidate.

For broader interview prep, see [gxp-quality-interview-preparation](/articles/gxp-quality-interview-preparation).

---

## Practical tips

- **Make owner acceptance a signature, not a spreadsheet cell.** A short acknowledgment that the named owner signs converts a paper model into a real one and removes the "I never agreed to that" defense.
- **Keep the role-to-data mapping under change control** and review it at every governance board meeting. People move; the mapping decays in months if untended.
- **Do not let "data custodian" quietly become "data decision maker."** The most common drift is IT making judgment calls (granting access, deciding retention) because the business owner is disengaged. Push those decisions back to the owner.
- **Right-size for your company.** At a small company one person may wear two hats (steward and custodian), which is fine as long as the incompatible combination, custodian admin plus self-approval of access or data changes, is never held by one person. Document the rationale.
- **Map the model onto the systems you actually run.** A generic policy is worthless until each LIMS, CDS, MES, and QMS has named roles. Inspectors test the specific, not the policy.
- **Use the governance board minutes as inspection evidence.** They prove the system is alive. No minutes, no proof.
- **Tie the roles to access management.** The steward's access recertification and the custodian's provisioning are where the model touches reality most often; if those run well, the rest tends to follow (see [csv-cybersecurity-access-control](/articles/csv-cybersecurity-access-control)).

---

## Related articles

- [data-governance-framework](/articles/data-governance-framework): the program these roles operate inside
- [di-program-architecture](/articles/di-program-architecture): how the data integrity pieces connect
- [data-criticality-and-data-risk](/articles/data-criticality-and-data-risk): classifying data so governance is risk-based
- [gxp-roles-responsibilities](/articles/gxp-roles-responsibilities): the wider GxP role framework
- [audit-trail-design-and-review](/articles/audit-trail-design-and-review) and [operationalizing-audit-trail-review](/articles/operationalizing-audit-trail-review): the steward's core control
- [csv-cybersecurity-access-control](/articles/csv-cybersecurity-access-control): access management and segregation of duties
- [breaking-into-gxp-quality](/articles/breaking-into-gxp-quality) and [career-guide-gxp-validation](/articles/career-guide-gxp-validation): getting in and moving up
- [gxp-quality-interview-preparation](/articles/gxp-quality-interview-preparation): broader interview practice
