# Leadership Rebirth Conference 10.0 — Website

Production landing page for **LRC 10.0** by **ImpactField**.
Built with Next.js 14 (App Router), TypeScript and Tailwind CSS. Deploys to Vercel with zero config.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Deploying to Vercel

1. Push this folder to a Git repository.
2. Import the repo in Vercel — framework preset **Next.js** is detected automatically.
3. No environment variables are required.
4. After the first deploy, set the production domain and update `site.url` in
   [`data/conference.ts`](data/conference.ts) (used for canonical URL, sitemap, robots and Open Graph).

## Where the content lives

All copy, links, dates, speakers, tickets, FAQs, stats and image URLs are in a single file:

**[`data/conference.ts`](data/conference.ts)** — edit here, never in the components.

### Confirmed content (from the LRC 10.0 document)

- Theme, about copy, five worlds, audience, "what to expect", "why attend", partnership tiers, legacy copy
- Dates: **31 Oct 2026 (from 10:00) – 1 Nov 2026 (from 14:00)**
- Venue: **De Base Landmark, Independence Layout, Enugu**
- FAQ questions and answers
- CTA links (registration / higher ticket / partner)

### Placeholders to replace before launch

| Item | Location in `data/conference.ts` | Notes |
|---|---|---|
| Speakers | `speakers.list` | Currently 5 "To Be Announced" cards. Add `name`, `role`, `org`, `photo`, set `placeholder: false`. |
| Testimonials | `testimonials.list` | Placeholder quotes. Replace `quote` / `name` / `role`, set `placeholder: false`; optional square `photo`. |
| Partner logos | `partners.logos` | Set `{ name, src }` on a slot — `src` under `/images/lrc/partners/`. Empty slots show a neutral tile. |
| Ticket pricing | `tickets.tiers` | Silver is free (confirmed). Gold/Diamond prices live on the events platform — shown as "See pricing on registration". |
| Photography | `imageAssets` + **`public/images/lrc/README.md`** | Every image slot renders a branded placeholder until its `src` is set. See the manifest for folder, filename, ratio and dimensions per slot. |
| Program agenda | `program.items` | Indicative list — replace with the final programme. |
| Social links | `footer.socials` | Point to real ImpactField profiles. |

### Images

All imagery is declared in `imageAssets` / the `speakers` · `testimonials` · `partners`
lists in `data/conference.ts` and rendered through `components/ui/SectionImage.tsx` —
no component hard-codes a path. Each unfilled slot shows an intentional placeholder that
holds the exact layout box (no stock photos, no layout shift). Drop files into
`public/images/lrc/<section>/` and set the path — full spec (ratio, dimensions, focal
guidance) in [`public/images/lrc/README.md`](public/images/lrc/README.md). All images are
local; there are no remote image hosts.

## Structure

```
app/
  layout.tsx            fonts, metadata, SEO
  page.tsx              section composition + JSON-LD (Event + FAQ schema)
  opengraph-image.tsx   generated OG/Twitter image
  robots.ts, sitemap.ts
components/
  Header, Hero, Countdown, AboutConference, ThemeSection, CultureReasons,
  FiveWorlds, EventDetails, Speakers, Audience, Experience, Program, WhyAttend,
  Tickets, Testimonials, ImpactStats, FAQ, Partners, Legacy, FinalCTA, Footer,
  Preloader, Logo, AnniversarySeal
  ui/                   CTAButton, SectionHeading, SectionImage, Reveal
data/conference.ts      single source of truth (content + imageAssets)
lib/icons.tsx           icon registry
public/images/lrc/      image drop-in folders + README manifest
```

## Design system — aligned to ImpactField

Tokens mirror the live ImpactField site (impactfield.com.ng, Elementor global kit) so the
page reads as *ImpactField presents LRC 10.0*, not a standalone event site.

| Role | Value | Notes |
|---|---|---|
| Ink / primary | `#020D19` (token `green`) | Headings, header, footer, dark sections |
| Accent | `#FF6D00` (token `orange`) | Primary CTAs, eyebrows, marks, focus ring |
| Body text | `#828282` (token `muted`) | Inter, line-height 1.8 |
| Alt surface | `#F5F5F4` (token `cream`) / `sand` | Section alternation |
| Conference accent | `#0C3B2E` (token `forest`) + `#C89B3C` (`gold`) | Kept only for the Five Worlds section and the "10.0" wordmark |

- **Type:** **Onest** (display) + **Inter** (body/UI) via `next/font` — the ImpactField pairing.
- **Buttons:** 100px pill radius, orange primary (`CTAButton`).
- **Chrome:** ImpactField-style dark sticky header with a parent-brand utility strip
  (Home / About Us / Our Programmes / Blog / Contact Us / Our Events) + LRC section nav;
  dark multi-column footer with the "Join Our Team" volunteer CTA and links back into the
  ImpactField ecosystem. Lightweight branded preloader (`components/Preloader.tsx`), once
  per session, skipped for `prefers-reduced-motion`.
- **Motion:** subtle fade-up on scroll, honours `prefers-reduced-motion`.
- **Accessibility:** semantic landmarks, skip link, visible focus rings, keyboard-friendly accordion/carousel, `scroll-padding-top` for anchor nav.

## QA notes

- Production build passes; no console errors; no horizontal overflow at 390 / 820 / 1440.
- `scripts/shots.mjs` is an optional Playwright screenshot helper (install `playwright` separately to use it; not a project dependency).
