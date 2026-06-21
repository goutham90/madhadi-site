// Shared tag normalization so the homepage chips and the /topics page agree on
// one canonical key + clean display name. Without this, "CSV"/"csv",
// "data integrity"/"data-integrity", "21 CFR Part 11"/"21-CFR-Part-11" all show
// as separate topics with inconsistent casing.

// Canonical key: lowercase, any run of non-alphanumerics becomes a single hyphen.
export const tagKey = (s: string) =>
  String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Tokens that should render fully uppercase.
const ACRONYMS = new Set([
  'gxp', 'gmp', 'gcp', 'glp', 'gdp', 'gvp', 'fda', 'ema', 'mhra', 'eu', 'us', 'uk', 'who',
  'csv', 'csa', 'qms', 'qa', 'qc', 'capa', 'oos', 'oot', 'di', 'bla', 'nda', 'ind', 'anda',
  'api', 'usp', 'ich', 'iso', 'iec', 'astm', 'mes', 'ebr', 'scada', 'plc', 'dcs', 'hmi',
  'lims', 'cds', 'eln', 'erp', 'hvac', 'wfi', 'pq', 'iq', 'oq', 'dq', 'rtm', 'urs', 'fat',
  'sat', 'cqa', 'cpp', 'ppq', 'cpv', 'hbel', 'ade', 'pde', 'maco', 'toc', 'lal', 'ccit',
  'ccs', 'em', 'tmf', 'edc', 'irt', 'ctms', 'rbm', 'cdisc', 'sdtm', 'adam', 'udi', 'mdr',
  'ivdr', 'dhf', 'dscsa', 'epcis', 'atmp', 'cgt', 'cmc', 'cmo', 'cdmo', 'it', 'ai', 'ml',
  'rpa', 'sop', 'cfr', 'pqr', 'apr', 'vmp', 'rca', 'qp', 'sip', 'cip', 'ipc', 'pat', 'ctd',
]);

// Special-cased display names (mixed case or expanded forms) keyed by tagKey.
const DISPLAY: Record<string, string> = {
  'gxp': 'GxP', 'alcoa': 'ALCOA+', 'alcoa-plus': 'ALCOA+', 'gamp': 'GAMP', 'gamp-5': 'GAMP 5',
  'gamp5': 'GAMP 5', 'etmf': 'eTMF', 'samd': 'SaMD', 'ectd': 'eCTD', 'econsent': 'eConsent',
  'cgmp': 'cGMP', 'qmsr': 'QMSR', 'iec-62304': 'IEC 62304', 'iso-13485': 'ISO 13485',
  'iso-14971': 'ISO 14971', 'iso-14644': 'ISO 14644', '21-cfr-part-11': '21 CFR Part 11',
  'part-11': 'Part 11', 'annex-11': 'Annex 11', 'annex-1': 'Annex 1', 'devops': 'DevOps',
  'ich-q7': 'ICH Q7', 'ich-q9': 'ICH Q9', 'ich-q10': 'ICH Q10', 'ich-q12': 'ICH Q12',
  'ich-q2': 'ICH Q2', 'ich-q14': 'ICH Q14', 'ich-e6': 'ICH E6', 'isa-88': 'ISA-88',
  'isa-95': 'ISA-95',
};

export function tagDisplay(s: string): string {
  const key = tagKey(s);
  if (DISPLAY[key]) return DISPLAY[key];
  return key
    .split('-')
    .map((w) => (ACRONYMS.has(w) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}
