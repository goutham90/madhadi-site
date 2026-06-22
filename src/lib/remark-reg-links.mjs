// Build-time auto-linker for regulation citations.
//
// Turns plain-text citations (21 CFR 211.192, ICH Q9, EU GMP Annex 11, USP <71>,
// PIC/S PI 041, ISO 13485, ...) into links to the correct authoritative source. Links the
// FIRST occurrence per page per citation, never inside an existing link, heading, or code.
// This fixes "regulation links go to the wrong place" once, for every article, every
// template, and all future content, without hand-editing bodies.
//
// Dependency-free (no unist-util-visit): we walk the mdast tree ourselves.

// 21 CFR Part 211 sections -> their subpart letter (for the canonical eCFR section URL).
const SUBPART_211 = {
  22: 'B', 25: 'B', 28: 'B', 34: 'B',
  42: 'C', 44: 'C', 46: 'C', 48: 'C', 56: 'C', 58: 'C',
  63: 'D', 65: 'D', 67: 'D', 68: 'D', 72: 'D',
  80: 'E', 82: 'E', 84: 'E', 86: 'E', 87: 'E', 89: 'E', 94: 'E',
  100: 'F', 101: 'F', 103: 'F', 105: 'F', 110: 'F', 111: 'F', 113: 'F', 115: 'F',
  122: 'G', 125: 'G', 130: 'G', 132: 'G', 134: 'G', 137: 'G',
  142: 'H', 150: 'H',
  160: 'I', 165: 'I', 166: 'I', 167: 'I', 170: 'I', 173: 'I', 176: 'I',
  180: 'J', 182: 'J', 184: 'J', 186: 'J', 188: 'J', 192: 'J', 194: 'J', 196: 'J', 198: 'J',
  204: 'K', 208: 'K',
};
const ECFR = 'https://www.ecfr.gov/current/title-21/chapter-I';
const PART_URL = {
  '4': `${ECFR}/subchapter-A/part-4`,
  '11': `${ECFR}/subchapter-A/part-11`,
  '50': `${ECFR}/subchapter-A/part-50`,
  '54': `${ECFR}/subchapter-A/part-54`,
  '56': `${ECFR}/subchapter-A/part-56`,
  '58': `${ECFR}/subchapter-A/part-58`,
  '210': `${ECFR}/subchapter-C/part-210`,
  '211': `${ECFR}/subchapter-C/part-211`,
  '312': `${ECFR}/subchapter-D/part-312`,
  '314': `${ECFR}/subchapter-D/part-314`,
  '600': `${ECFR}/subchapter-F/part-600`,
  '610': `${ECFR}/subchapter-F/part-610`,
  '820': `${ECFR}/subchapter-H/part-820`,
  '1271': `${ECFR}/subchapter-L/part-1271`,
};
// ISO standards with a confident catalogue id (others are left as plain text rather than
// risk a wrong link, which is the exact problem we are fixing).
const ISO_URL = {
  '13485': 'https://www.iso.org/standard/59752.html',
  '14971': 'https://www.iso.org/standard/72704.html',
  '9001': 'https://www.iso.org/standard/62085.html',
  '14644': 'https://www.iso.org/standard/53394.html',     // 14644-1:2015
  '14644-1': 'https://www.iso.org/standard/53394.html',
  '11137': 'https://www.iso.org/standard/33952.html',     // 11137-1
};
const ICH_FAMILY = {
  Q: 'https://www.ich.org/page/quality-guidelines',
  E: 'https://www.ich.org/page/efficacy-guidelines',
  M: 'https://www.ich.org/page/multidisciplinary-guidelines',
  S: 'https://www.ich.org/page/safety-guidelines',
};
const EUDRALEX = 'https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en';
const USPNF = 'https://www.uspnf.com/';
const PICS = 'https://picscheme.org/en/publications';

// Ordered: more specific patterns first so "21 CFR 211.192" wins over "21 CFR Part 211"
// and "ICH Q2(R2)" over "ICH Q2". One global regex of candidates; resolve() maps each.
const RE = /(21 CFR (?:Part )?\d+(?:\.\d+[a-z]?)?)|(ICH [QEMS]\d+[A-Z]?(?:\(R?\d+\))?)|((?:EU GMP |EU )?Annex \d+)|(USP <\d+>)|(PIC\/S PI \d+)|(ISO \d{3,5}(?:-\d+)?)|(\bPart 11\b)/g;

function resolve(text) {
  // returns { url, key } or null
  let m;
  if ((m = text.match(/^21 CFR (?:Part )?(\d+)(?:\.(\d+)([a-z]?))?$/))) {
    const part = m[1], sec = m[2];
    if (!sec) {
      return PART_URL[part] ? { url: PART_URL[part], key: `cfr-part-${part}` } : null;
    }
    if (part === '211' && SUBPART_211[+sec]) {
      return {
        url: `${ECFR}/subchapter-C/part-211/subpart-${SUBPART_211[+sec]}/section-211.${sec}`,
        key: `cfr-211.${sec}`,
      };
    }
    // other parts' sections (incl. 820, restructured under the QMSR): link to the part page
    return PART_URL[part] ? { url: PART_URL[part], key: `cfr-part-${part}-sec` } : null;
  }
  if ((m = text.match(/^ICH ([QEMS])\d+/))) {
    const fam = m[1];
    return ICH_FAMILY[fam] ? { url: ICH_FAMILY[fam], key: `ich-${text.replace(/\s+/g, '')}` } : null;
  }
  if (/Annex \d+$/.test(text)) {
    return { url: EUDRALEX, key: text.replace(/^(EU GMP |EU )/, '').trim() };
  }
  if ((m = text.match(/^USP <(\d+)>$/))) {
    return { url: USPNF, key: `usp-${m[1]}` };
  }
  if (/^PIC\/S PI \d+$/.test(text)) {
    return { url: PICS, key: text };
  }
  if ((m = text.match(/^ISO (\d{3,5}(?:-\d+)?)/))) {
    return ISO_URL[m[1]] ? { url: ISO_URL[m[1]], key: `iso-${m[1]}` } : null;
  }
  if (text === 'Part 11') {
    return { url: PART_URL['11'], key: 'cfr-part-11' };
  }
  return null;
}

function splitText(value, linkedKeys) {
  RE.lastIndex = 0;
  const out = [];
  let last = 0, m;
  while ((m = RE.exec(value)) !== null) {
    const matched = m[0];
    const r = resolve(matched);
    if (!r || linkedKeys.has(r.key)) continue; // leave as plain text
    if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) });
    out.push({
      type: 'link',
      url: r.url,
      data: { hProperties: { target: '_blank', rel: 'noopener noreferrer' } },
      children: [{ type: 'text', value: matched }],
    });
    linkedKeys.add(r.key);
    last = m.index + matched.length;
  }
  if (out.length === 0) return null; // no change
  if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
  return out;
}

const NO_LINKIFY = new Set(['heading', 'link', 'linkReference', 'definition']);

export function remarkRegLinks() {
  return (tree) => {
    const linkedKeys = new Set();
    const walk = (node, allowed) => {
      if (!node.children) return;
      const out = [];
      for (const child of node.children) {
        if (child.type === 'text' && allowed) {
          const parts = splitText(child.value, linkedKeys);
          if (parts) { out.push(...parts); continue; }
          out.push(child);
        } else {
          if (child.children) walk(child, allowed && !NO_LINKIFY.has(child.type));
          out.push(child);
        }
      }
      node.children = out;
    };
    walk(tree, true);
  };
}
