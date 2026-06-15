# madhadi.com — Design System v2 ("The Regulatory Review")

This is the single source of truth for the 2026 redesign. Every page must conform to it.
The aesthetic north star: a top-tier scientific/regulatory institution — calm, authoritative,
editorial, light, generously spaced, typographically rich. Think NEJM / Nature editorial pages
crossed with FDA / ICH / ISPE institutional sites. It must read as designed by a senior human
editorial designer, NOT generated.

## HARD RULES (anti-"AI-look")
- LIGHT theme on warm paper. NEVER reintroduce the old dark palette (#08090a etc.).
- NO gradient text, NO gradient-filled icon tiles, NO glow/box-shadow halos, NO neon colors.
- NO fully-rounded "pill everything" — geometry is crisp (4px). Tags/badges are small squared chips.
- ONE restrained accent (brass) used sparingly. Navy is the structural/brand color. Blue links only.
- Display headings (h1/h2, hero, card titles, article titles) are SERIF (var(--serif)).
  Body, UI, nav, labels are SANS (var(--sans)). Metadata/eyebrows/code are MONO (var(--mono)).
- Generous whitespace. Sections breathe (4–6rem vertical rhythm). Don't crowd.
- Preserve ALL existing content, copy, data arrays, and links verbatim. This is a RESKIN +
  re-layout only. Do not delete articles, rename routes, or change wording.

## TOKENS (defined globally in Layout.astro — USE THESE, never hardcode hex except palette below)
Color:
- --paper        #F7F4EC   page background (warm)
- --paper-2      #EFEADD   alternating section tint / subtle fills
- --surface      #FFFFFF   cards
- --ink          #1B1813   headings (warm near-black)
- --body         #3D372E   body text
- --muted        #756B5B   secondary/meta text
- --line         #E2DAC9   hairline borders
- --line-2       #D2C8B2   stronger hairline
- --navy         #102A43   brand / footer / primary buttons / strong rules
- --navy-2       #163B5F   navy hover / secondary
- --link         #1C4E80   inline links + interactive
- --link-h       #102A43   link hover
- --brass        #9A6A2A   rare accent (eyebrow rule, active marker, key stat, CTA underline)
- --brass-soft   #F0E6D2   brass tint background
Tier colors (refined, AA on white):
- Beginner       #2F6E4F  (forest)
- Intermediate   #1C4E80  (navy-blue)
- Advanced       #7A3B57  (oxblood)
Pillar accent identity (harmonized, muted — for .pillar-label, coverage dots, pillar cards):
- data-integrity         #1C4E80  (navy-blue)
- csv-csa                #2F6E4F  (forest)
- equipment-qualification#8A5A1E  (bronze)
- quality-assurance      #6B4E8A  (muted violet)
- audits-inspection      #9A3B3B  (brick)
- cell-gene-therapy      #2B6E73  (teal)
- manufacturing-automation #46566E (slate-blue)
- ai-automation          #7A3B57  (oxblood)

Type:
- --serif "Newsreader", Georgia, 'Times New Roman', serif   (display/headings; opsz; 400/500/600 + italic)
- --sans  "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif (body/UI)
- --mono  "IBM Plex Mono", "SF Mono", Consolas, monospace    (eyebrows, meta, code, tags)
Scale (use rem): display clamp(2.4,5vw,3.6); h1 clamp(2,4vw,2.9); section-title/h2 clamp(1.55,2.6vw,2.05);
h3 1.3; body 1.0625 (lh1.7); article body 1.125 (lh1.78); small 0.8125; eyebrow 0.72 mono uppercase ls .16em.
Geometry/space:
- --radius 4px; --radius-lg 8px; --radius-sm 3px
- --container 1160px; --container-narrow 760px; --measure 70ch
- --shadow-sm 0 1px 2px rgba(27,24,19,.05); --shadow 0 14px 40px -22px rgba(16,42,71,.28)

## SHARED GLOBAL CLASSES (already defined in Layout.astro — reuse, don't redefine)
- .eyebrow / .section-label  — mono uppercase kicker, brass, with a short leading rule
- .section-title             — serif h2 display
- .lead                      — large serif/Sans intro paragraph
- .tag                       — small squared mono chip (hairline). .tag:hover navy.
- .tier-badge                — squared mono badge; set color via inline style using tier hex above
- .btn-primary (navy solid), .btn-ghost (hairline), .btn-outline (link-colored hairline)
- .card                      — white surface, hairline border, radius, subtle hover lift
- .callout                   — paper-2 bg, left navy rule
- .page-header / .page-label — standard interior page header (eyebrow + serif h1 + lead p)
- .topic-pill                — rounded chip for topic cloud (one allowed rounded element)
- .prose                     — long-form body styles (also baked into ArticleLayout)
Container helpers: wrap wide pages in Layout `wide={true}`. Use .section for vertical rhythm.

## PER-PAGE INSTRUCTIONS
- Replace EVERY hardcoded color (#94a3b8 body, #34d399/#4f8ef7/#a78bfa tiers, #e879f9 etc.,
  rgba(79,142,247,...) , #080910) with the tokens above. No leftover dark-theme values.
- Convert headings to serif via the global element styles (h1–h3 already serif) — don't fight it.
- Card titles/article titles: serif. Eyebrows/labels/meta: mono. Body: sans.
- Tier badge pattern stays (inline style with `${color}1A` bg / `${color}` text / `${color}40` border)
  but pull color from the NEW tier hex map (Beginner #2F6E4F, Intermediate #1C4E80, Advanced #7A3B57).
- Pillar pages: give each its harmonized pillar accent (map above) for .pillar-label and accents.
- Reduce radii to 4px geometry, hairline borders (--line), white cards on paper.
- Keep all responsive breakpoints working; verify mobile single-column.
- Keep the exact data arrays, hrefs, slugs, and copy. Layout/markup may be restructured for
  better hierarchy, but no content is lost.
