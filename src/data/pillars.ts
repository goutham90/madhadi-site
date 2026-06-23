// Single source of truth for topic pillars, used by the dynamic pillar page,
// the pillars index, and the homepage. Add a pillar here and it appears everywhere.
export interface Pillar {
  slug: string;
  title: string;
  short: string;        // nav/card title
  blurb: string;        // one-line
  desc: string;         // longer intro paragraph for the pillar header
  image: string;
  regLinks?: { href: string; label: string }[];
}

export const PILLARS: Pillar[] = [
  {
    slug: 'data-integrity', title: 'Data Integrity', short: 'Data Integrity',
    blurb: 'ALCOA+, audit trails, the data lifecycle, program architecture, and warning-letter patterns.',
    desc: 'Data integrity is the discipline of proving that GxP records are complete, accurate, and trustworthy across their entire lifecycle. This pillar covers the ALCOA+ principles, audit-trail design and review, the data lifecycle, governance, gap assessment and remediation, and the recurring failure patterns regulators cite.',
    image: '/images/records-review.jpg',
    regLinks: [
      { href: 'https://www.fda.gov/media/119267/download', label: 'FDA Data Integrity Guidance (2018)' },
      { href: 'https://www.gov.uk/government/publications/guidance-on-gxp-data-integrity', label: 'MHRA GxP DI Guidance' },
      { href: 'https://picscheme.org/en/publications', label: 'PIC/S PI 041' },
    ],
  },
  {
    slug: 'csv-csa', title: 'CSV & Computer Software Assurance', short: 'CSV / CSA',
    blurb: 'GAMP 5, the validation lifecycle, the CSA risk-based approach, cloud and SaaS.',
    desc: 'Computer system validation and the newer Computer Software Assurance approach establish that software used in regulated processes is fit for its intended use. This pillar covers GAMP 5, risk-based scoping, the validation deliverable set, Part 11/Annex 11, cloud and SaaS, and operating validated systems after go-live.',
    image: '/images/records-server.jpg',
    regLinks: [
      { href: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents', label: 'FDA CSA Guidance' },
      { href: 'https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition', label: 'GAMP 5 (2nd ed.)' },
    ],
  },
  {
    slug: 'quality-assurance', title: 'Quality Assurance & QMS', short: 'Quality Assurance',
    blurb: 'The pharmaceutical quality system, CAPA, deviations, change control, validation, and document control.',
    desc: 'The quality management system is the framework that keeps a regulated operation in a state of control. This pillar covers ICH Q10, CAPA, deviation and change management, document control, process and cleaning validation, OOS investigations, stability, supplier qualification, training, and quality metrics.',
    image: '/images/audit-signing.jpg',
    regLinks: [
      { href: 'https://database.ich.org/sites/default/files/Q10%20Guideline.pdf', label: 'ICH Q10' },
      { href: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/cfrsearch.cfm?cfrpart=211', label: '21 CFR Part 211' },
    ],
  },
  {
    slug: 'audits-inspection', title: 'Audits & Inspection', short: 'Audits & Inspection',
    blurb: 'Inspection readiness, 483 and warning-letter responses, internal audits, FDA vs EMA dynamics.',
    desc: 'Audits and regulatory inspections are where a quality system is tested under pressure. This pillar covers building a genuine state of control, internal audit programs, FDA and EMA inspection dynamics, and how to respond to Form 483 observations and warning letters in a way that holds up.',
    image: '/images/audit-paperwork.jpg',
    regLinks: [
      { href: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations', label: 'FDA Inspections' },
    ],
  },
  {
    slug: 'equipment-qualification', title: 'Equipment & Instrument Qualification', short: 'Equipment Qualification',
    blurb: 'DQ/IQ/OQ/PQ, USP <1058>, analytical instrument qualification, method validation and transfer.',
    desc: 'Qualification establishes documented evidence that equipment and analytical instruments are installed correctly and perform as intended. This pillar covers the DQ/IQ/OQ/PQ lifecycle, USP <1058> analytical instrument qualification, method validation under ICH Q2(R2), and method transfer.',
    image: '/images/instrument-bench.jpg',
    regLinks: [
      { href: 'https://www.usp.org', label: 'USP <1058> AIQ' },
      { href: 'https://database.ich.org', label: 'ICH Q2(R2)' },
    ],
  },
  {
    slug: 'manufacturing-automation', title: 'Manufacturing & Automation Systems', short: 'Manufacturing Automation',
    blurb: 'MES, EBR, SCADA, DCS, PLC, and data integrity on the shop floor.',
    desc: 'Manufacturing and laboratory automation generate much of the GxP record. This pillar covers MES and electronic batch records, SCADA/DCS/PLC validation and interface controls, review by exception, and the specific data-integrity challenges of the shop floor.',
    image: '/images/manufacturing-cleanroom.jpg',
  },
  {
    slug: 'sterility-microbiology', title: 'Sterility & Microbiology', short: 'Sterility & Microbiology',
    blurb: 'EU GMP Annex 1, contamination control strategy, aseptic processing, environmental monitoring.',
    desc: 'Sterile and aseptically produced products demand the strictest contamination controls in the industry. This pillar covers the EU GMP Annex 1 contamination control strategy, aseptic processing and media fills, environmental monitoring program design, and the microbiological data that underpins sterility assurance.',
    image: '/images/microscopy-blue.jpg',
    regLinks: [
      { href: 'https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en', label: 'EU GMP Annex 1' },
    ],
  },
  {
    slug: 'clinical-gcp', title: 'Clinical & GCP', short: 'Clinical & GCP',
    blurb: 'GCP data integrity, EDC/eTMF/IRT systems, and safety/pharmacovigilance data.',
    desc: 'Clinical quality and good clinical practice govern the integrity of trial data and patient safety information. This pillar covers GCP data integrity, validation of EDC, IRT, eTMF and CTMS systems, and the integrity of pharmacovigilance and safety data.',
    image: '/images/records-review.jpg',
    regLinks: [
      { href: 'https://database.ich.org', label: 'ICH E6(R3) GCP' },
    ],
  },
  {
    slug: 'supply-chain-gdp', title: 'Supply Chain & GDP', short: 'Supply Chain & GDP',
    blurb: 'Good Distribution Practice, cold chain, serialization, and CDMO oversight.',
    desc: 'Quality does not stop at the factory gate. This pillar covers Good Distribution Practice, cold-chain and temperature control, serialization and traceability, and the oversight of contract manufacturers and testing labs through quality agreements.',
    image: '/images/manufacturing-cleanroom.jpg',
  },
  {
    slug: 'cell-gene-therapy', title: 'Cell & Gene Therapy', short: 'Cell & Gene Therapy',
    blurb: 'Why data integrity is structurally different for living, patient-specific products.',
    desc: 'Cell and gene therapies break many assumptions built into traditional GxP systems. This pillar covers why data integrity is structurally different for autologous, patient-specific products, chain of identity and custody, and BLA-level scrutiny.',
    image: '/images/microscopy-blue.jpg',
  },
  {
    slug: 'ai-automation', title: 'AI & Automation in Compliance', short: 'AI & Automation',
    blurb: 'Validating AI-enabled GxP systems and building compliant automation tools.',
    desc: 'Artificial intelligence and automation are entering regulated workflows faster than the guidance can keep up. This pillar covers a practical framework for validating AI-enabled GxP systems and building automation tools that stay inside the lines.',
    image: '/images/instrument-machine.jpg',
  },
];

export const pillarBySlug = (slug: string) => PILLARS.find(p => p.slug === slug);
