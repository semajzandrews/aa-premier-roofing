# AA Premier Roofing & Construction — Build Signature

**Slug:** `aa-premier-roofing`
**Client:** AA Premier Roofing & Construction (legal: AA Consulting TX) — real BWYW client, inbound referral
**Location:** Dallas–Fort Worth metroplex, TX
**Owners:** Anthony (940) 783-2238 · Ashton (214) 205-6991 · aaconsultingtx@gmail.com
**Verified socials:** IG @aaconsultingtx · FB facebook.com/61578391972084
**Build date:** 07-01-2026
**Stack:** Hand-authored static site (HTML/CSS/JS), fully self-hosted assets, static-export ready. Serves via `python3 -m http.server`.

## Art direction — "Storm & Shelter"
Deliberately NOT the loud contractor red/blue/orange every DFW roofer uses, and NOT the warm-earth palette our two existing contractor builds own.
- **Palette:** slate ink `#14181e` + cool limestone `#eceeec` + **verdigris patina** `#1f5e58 → #2c887c` (the color aged copper/metal roofing becomes — premium, category-authentic, ownable). Human warmth delivered through golden-hour photography, not warm UI.
- **Type:** Cabinet Grotesk (display, 400–800) + Satoshi (body), self-hosted Fontshare woff2.
- **Brand mark:** hand-drawn layered roof-peak chevron monogram (patina gradient) — references the "built in layers" story. Zero-attribution original SVG.

## Signature moment (ONE, roofing-specific)
**"Anatomy of a Premium Roof"** — a vertical scroll-driven cross-section that builds itself layer by layer as you scroll: decking → underlayment → ice & water shield → premium shingles → ridge cap & ventilation, each narrated with why it matters. Hand-built isometric SVG, driven by GSAP ScrollTrigger, reduced-motion shows all layers static.

**Why this and not before/after:** both existing contractor builds (`construction-dna`, `plhomeimprovement`) already use a before/after reveal, and the before/after drag-slider is on the AI-tell watchlist. The roof-anatomy scroll-build is genuinely business-specific, educational (justifies premium pricing), and avoids every flagged tell.

## Arsenal used
- **Fontshare** (Cabinet Grotesk + Satoshi) — self-hosted `assets/fonts/`
- **Pexels photo** — 17 images, each verified against its label via labeled contact sheet, banked in the image-library under `roofing/*` (uniqueness enforced)
- **Pexels video** — aerial drone glide over a Sun Belt suburb (id 4117521), graded warm, muted loop, 720 + 360, poster + reduced-motion fallback → `assets/video/`
- **GSAP 3.12.5 + ScrollTrigger** — self-hosted `assets/vendor/`, drives the signature + reveals
- **Lenis 1.1.14** — self-hosted smooth scroll
- **Keyless Google Maps** (`output=embed`, Ramos pattern) — DFW service-area map
- **Icons** — hand-drawn inline SVG (monogram, service glyphs, UI) — no attribution needed

## Anti-sameness ledger
- **antiTags:** `oak-clay-warm`, `amber-ochre`, `clash-display`, `fraunces`, `before-after-slider`, `drag-reveal`, `blueprint-drafting`, `horizontal-marquee`, `drag-to-scroll`, `pinned-horizontal`, `hard-hat-cliche`
- **vs construction-dna** (amber + Clash Display/Author + drag-the-wall reveal + drafting): different palette (patina), different type, different signature (roof anatomy).
- **vs plhomeimprovement** (oak/clay + Fraunces + scroll-wipe reveal + blueprint): different palette, different type, different signature.
- **AI-tell compliance:** ZERO horizontal auto-scroll marquee, ZERO drag-to-scroll rows, ZERO pinned-horizontal, ONE signature moment (vertical, non-drag).

## Structural fields
- nav_archetype: fixed top bar, transparent-over-hero → blur-slate-on-scroll, wordmark + monogram + phone + CTA, full-screen numbered mobile menu
- hero_skeleton: full-bleed cinematic video, left-weighted eyebrow → clamp-H1 (with italic keyword) → lede → dual CTA → trust chips
- layout_grammar: centered max-1240 container, alternating dark/light bands, editorial bento gallery, 2-col split sections
- section_grammar: rule+uppercase eyebrow in patina, big Cabinet H2 with patina keyword accent
- footer_archetype: 4-col (brand+social / services / company / contact) over ink, bysemaj moniker bar
- motion_vocab: IntersectionObserver reveal (fade+rise), GSAP scroll-tied layer build, hover lifts, nav underline draw. Ease `cubic-bezier(.33,1,.68,1)` (not the monoculture eases).

## CRM hookup (the friend's ask)
Lead form `#leadForm` is webhook-ready. When `data-crm-endpoint` is set to a JobNimbus / AccuLynx / Zapier (or Formspree) URL, it POSTs the lead as JSON: `{name, phone, email, address, service, preferredDate, preferredTime, message, source, submittedAt}`. Currently empty → shows the same-day-callback success state client-side. See CLIENT_PUNCHLIST.md.

## 07-03-2026 polish pass (live in prod)
- Anatomy SVG viewBox cropped to ink (`52 192 478 224`), pins re-spaced (r=12), radial patina aura behind the slab — illustration now fills the sticky stage.
- Lead form: optional preferred-day (native date) + best-time select = Wix Bookings parity; holiday lighting + junk removal added to the service dropdown (old-site bookable services).
- Mobile sticky action bar `#mobBar` (Call now / Free inspection), shows past 0.7×viewport scroll, ≤760px only, safe-area padded.
- SEO: RoofingContractor JSON-LD (honest fields only), canonical + og:url/og:image/twitter card — absolute URLs on the vercel domain until cutover.
- Perf: `loading="lazy" decoding="async"` on all below-fold imgs; phones swap to `hero-360.mp4`; Save-Data shows poster via `.hero.no-video`.

## Review
`?static` query param renders the page fully-visible with native scroll (Lenis + reveal animations off) for the static-review harness / QA. Verified desktop (1440) + mobile (375): hero, nav/mobile-menu, services, signature (both breakpoints), storm, work, story, reviews, service area, lead form (submit + success), footer.
