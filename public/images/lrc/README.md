# LRC 10.0 — Image assets

Every photographic asset is declared in **`data/conference.ts`** and rendered
through **`components/ui/SectionImage.tsx`**. Nothing is hard-coded in a section
component. An unfilled slot shows an intentional branded placeholder that keeps
the exact layout box (no stock photos, no layout shift).

## Status

| Slot | File | Status |
|---|---|---|
| hero | `hero/hero.jpg` | ✅ supplied (LRC 9.0 photo) |
| about | `about/about.jpg` | ✅ supplied |
| venue | `event/venue.jpg` | ✅ supplied |
| program | `experience/program.jpg` | ✅ supplied |
| finalCta | `legacy/final-cta.jpg` | ✅ supplied |
| speaker portraits ×5 | `speakers/` | ⏳ awaiting confirmed line-up |
| testimonial photos | `testimonials/` | ⏳ optional, awaiting real quotes |
| partner logos ×6 | `partners/` | ⏳ awaiting confirmed partners |

## The five section images

Supplied as ~4000–6400 px JPGs. They carry a burned-in **LRC 9.0 / "DO MORE" /
"09 YEARS"** event-branding bar along the bottom edge, and (hero) an on-screen
"9.0" graphic. `scripts/process-images.mjs` prepares them for the web:

1. trims the branding bar off the bottom (`bottomTrim` per image; hero also `topTrim`),
2. downscales to a web width (2200–2400 px landscape, 1300 px the portrait),
3. re-encodes JPEG q0.82 → 200–500 KB each.

`next/image` then serves resized AVIF/WebP per request. Re-run with
`node scripts/process-images.mjs` after replacing a source file in `_incoming/`
(git-ignored; copy fresh originals there first).

| Slot | Final px | Ratio | Render | object-position | Notes |
|---|---|---|---|---|---|
| hero | 2400×1424 | ~5:3 | background (`fill`), priority | `74% 38%` / mob `78% 36%` | Speaker held in the right third; ink gradient + 35 % wash over the darkened left for the headline. Any residual 9.0 signage is knocked well back. |
| about | 1700×1020 | 5:3 | contained | `50% 42%` | Wide hall establishing shot beside the About copy. Shown in full (no crop). |
| venue | 1900×1140 | 5:3 | background (`fill`) | `38% 40%` | Packed room + stage on the right of the dark Event Details panel; strengthened ink gradient. |
| program | 1300×1716 | ~3:4 | contained | `50% 22%` | Portrait speaker at the podium; caption bar overlays the lower third. Shown in full. |
| finalCta | 2200×1320 | 5:3 | background (`fill`) | `50% 38%` / mob `50% 32%` | Applauding audience ≈30 % opacity behind the closing ink gradient. |

To replace one: drop the new full-res file in `_incoming/<name>.jpg`, adjust that
job's trims in `scripts/process-images.mjs` if needed, run the script, then tune
`position` / `positionMobile` in `data/conference.ts`.

## Speakers (`speakers.list`)

- Folder `speakers/`, e.g. `speaker-01.jpg`. Ratio **3:4 portrait**, ~600×800,
  head roughly centred, consistent crop across all speakers.
- On each list item set `photo`, `placeholder: false`, `name` / `role` / `org`.
  Optional `photoPosition` (e.g. `"50% 20%"`).

## Testimonials (`testimonials.list`)

- Folder `testimonials/`, e.g. `participant-01.jpg`. Ratio **1:1**, ~400×400.
- Set `photo` + `placeholder: false`. No file → neutral avatar glyph (never a stock face).

## Partner logos (`partners.logos`)

- Folder `partners/`, e.g. `access-bank.svg`. **Transparent SVG preferred** (PNG ok).
  Rendered `object-fit: contain` with padding — never cropped or distorted.
- Set `{ name, src }` on a slot. Only add confirmed partners.
