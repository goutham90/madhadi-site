# madhadi.com — Design System v3 ("The Record")

A GROUND-UP redesign, not a reskin. v2 failed because it kept the generic AI-landing skeleton
(mono kicker → centered serif H2 → row of hairline cards, repeated, everything centered, zero imagery)
and only swapped color/font. v3 changes the ARCHITECTURE, branding, art direction, and adds a real
visual/imagery layer. Aim: looks like a senior human designer built an editorial publication for a
precision/regulatory field — NOT a Claude default.

## CONCEPT
"The Record." A field manual for data integrity. The domain's soul = the verified record, the audit
trail, ALCOA+, calibration, inspection, the controlled document, the seal of approval. The visual
language = precision instrument + regulatory document + serious editorial magazine. Technical
marginalia (monospaced labels, registration ticks, numbered sections), confident editorial display
type, art-directed duotone imagery, alternating light/dark section treatments, asymmetric grids.

## ANTI-PATTERNS (do NOT do these — they read as AI-generated)
- ❌ The repeated "[eyebrow] + centered headline + 3 equal bordered cards" section. BAN IT.
- ❌ Everything centered. Default to LEFT-aligned, asymmetric (7/5, 8/4, 5/7 splits, offset columns).
- ❌ Uniform grids of identical hairline cards with tiny pill tags.
- ❌ Flat page with no imagery, no depth, no dark sections, no texture.
- ❌ Emoji or geometric-glyph "icons" (◎ ◈ ◇ ▲). Use the line-art emblems in /public/brand/emblems/.
- ❌ Inter / Newsreader / generic geometric sans. (We use Fraunces + Hanken Grotesk + Space Mono.)
- ❌ Evenly-spaced, predictable, symmetric rhythm everywhere.

## DO (the new system)
- ✅ Asymmetric 12-col editorial layouts; varied measures; left-aligned display headlines.
- ✅ ALTERNATE section treatments so consecutive sections look DIFFERENT: bone, full-bleed DARK INK,
     image-led (duotone photo), index/list-with-leader-dots, featured-editorial (big image + standfirst).
- ✅ Real imagery (duotone-treated photos from /public/images/) as focal moments: hero, one dark
     section, pillar/article headers. Treat with .duotone (see below) so they look art-directed.
- ✅ Technical marginalia layer: Space Mono labels, numbered sections (running 01 / 02 / 03), a
     registration-tick rule divider (/public/brand/ticks-rule.svg), faint grid texture, the seal mark.
- ✅ Big confident Fraunces display (clamp up to ~4.5rem), tight leading, optional drop cap in articles,
     pull quotes, editorial index lists.
- ✅ Depth: dark ink sections, layered seal/graphic elements, subtle shadows, image overlays.

## TOKENS (defined globally in src/layouts/Layout.astro :root)
Color: --bone #EBE5D7 (page bg) · --bone-2 #E2DBC9 · --paper #F7F3EA (cards) · --ink #16130D (text & dark
section bg) · --ink-2 #241F17 · --graphite #574F42 (secondary text) · --muted #837B69 (meta) ·
--line #D3CBB7 (hairline on bone) · --line-ink rgba(236,230,216,.15) (hairline on ink) ·
--vermilion #CB4B2A (SIGNAL accent: links, marks, numbers, rules) · --vermilion-2 #AE3C1F (hover) ·
--oxblood #7A2E23 (deep accent) · --on-ink #ECE6D8 (text on dark) · --on-ink-dim #B7AE9B.
Back-compat aliases kept (--accent→--vermilion, --navy→--ink, --link→--vermilion-2, --paper-2→--bone-2,
--text→--ink, --body→--graphite, --surface→--paper, etc.) so partial refs never break.
Type: --display "Fraunces", Georgia, serif · --sans "Hanken Grotesk", system-ui, sans-serif ·
--mono "Space Mono", ui-monospace, monospace. Loaded via Google Fonts <link> in Layout head.
Headings = display. Body/UI = sans. Labels/marks/meta/code = mono.
Geometry: radius 3px (crisp). --container 1240px · --measure 68ch. Shadows subtle/warm.
Imagery: .duotone = grayscale + a bone→ink (or ink→vermilion) mix via filter/blend; images get a faint
ink overlay for text legibility. Hero/section images are full-bleed or large, never tiny thumbnails.

## SHARED GLOBAL CLASSES (in Layout — reuse, don't reinvent)
.kicker (mono uppercase label, vermilion, NO mandatory leading rule — vary placement) · .display
(Fraunces clamp) · .lead (large standfirst) · .btn (solid ink) · .btn-accent (vermilion) · .btn-ghost ·
.tag (small mono, understated) · .tier-badge · .card (paper, hairline, used SPARINGLY not as the default) ·
.index-list (editorial list w/ leader dots + mono numbers) · .section-dark (full-bleed ink treatment) ·
.rule-ticks (registration-tick divider) · .seal (decorative octagon seal mark) · .marginalia (mono note).
Emblems: <img src="/brand/emblems/pillar-<slug>.svg"> (currentColor line art).

## ASSET INVENTORY (real files on disk — use them)
Brand (/public/brand/): logo.svg, logo-light.svg (dark bg), seal.svg (big decorative seal, currentColor),
texture-grid.svg (faint tiling grid bg), ticks-rule.svg (registration-tick divider, currentColor).
Emblems (/public/brand/emblems/): pillar-<slug>.svg for all 8 pillars — render via the global .emblem
class: `<span class="emblem" style="--src:url('/brand/emblems/pillar-data-integrity.svg')"></span>` and set
its `color` (cream var(--on-ink) on dark, vermilion or ink on light). They are line-art masks.
Photos (/public/images/, all 1600px JPEG, Unsplash/PD license): lab-beakers, lab-glassware,
scientist-pipette, scientist-test-tubes, manufacturing-cleanroom, manufacturing-worker, instrument-bench,
instrument-machine, records-review, records-server, audit-paperwork, audit-signing, microscopy-purple,
microscopy-blue (.jpg). Wrap in `<div class="duotone"><img src=...></div>` for the art-directed treatment.
PILLAR → header image map (use on pillar pages + article heroes): data-integrity=records-review,
csv-csa=records-server, equipment-qualification=instrument-bench, quality-assurance=audit-signing,
audits-inspection=audit-paperwork, cell-gene-therapy=microscopy-blue, manufacturing-automation=manufacturing-cleanroom,
ai-automation=instrument-machine.

## CANONICAL EXEMPLAR
src/pages/index.astro and src/layouts/ArticleLayout.astro are the reference implementations of v3. Match
their quality and devices: .kicker + display headline, asymmetric grids (.hero-grid / .disc-head splits),
.index-list editorial rows with mono numbers, full-bleed .section-dark plates, .duotone imagery, the seal,
tick rules, mono marginalia. Study them before converting a page.

## PER-PAGE MANDATE
- Each page must use AT LEAST 2 different section treatments and must NOT be a stack of identical card grids.
- Homepage is the centerpiece: art-directed, asymmetric, imagery-led, with a dark section and an index list.
- Pillar pages: image/emblem header band + editorial article index (not card grid) + sidebar.
- Preserve ALL content, copy, data arrays, hrefs, slugs, getCollection queries, and <script> interactivity
  VERBATIM. This is presentation only.
