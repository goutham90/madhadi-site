import { getCollection } from 'astro:content';
import { pillarBySlug } from '../data/pillars';

// Build-time search index: one compact record per published article.
// Indexed fields: title, description, tags, pillar (slug + name), tier, and
// the article's H2/H3 section headings (so a search hits in-page topics too).
export async function GET() {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const index = articles
    .map((a) => {
      const headings = [...a.body.matchAll(/^#{2,3}\s+(.+?)\s*$/gm)]
        .map((m) => m[1].replace(/[*_`#]/g, '').trim())
        .join(' · ');
      const pillarName = pillarBySlug(a.data.pillar ?? '')?.short ?? a.data.pillar ?? '';
      return {
        t: a.data.title,
        d: a.data.description ?? '',
        tags: a.data.tags ?? [],
        p: a.data.pillar ?? '',
        pn: pillarName,
        tier: a.data.tier ?? '',
        u: `/articles/${a.slug}`,
        h: headings,
      };
    })
    .sort((x, y) => x.t.localeCompare(y.t));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
