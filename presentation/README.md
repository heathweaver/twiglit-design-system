# Twiglit presentation kit

Slide masters for angel-investor pitches and board updates. 16:9 (1920×1080).
Built on the Twiglit design system — same tokens as the product so a deck and the app feel like the same surface.

## What's in here

| File | Purpose |
| --- | --- |
| `slide_templates.html` | The 8 masters, filled in with sample Twiglit content. **Open this to see the kit.** Duplicate it to start a real deck. |
| `deck_kit.css` | Slide-specific styles. Extends `colors_and_type.css`. Sets the 1920×1080 type scale, layouts, and accent backgrounds. |
| `deck-stage.js` | Slide shell (scaling, keyboard nav, print-to-PDF). Don't edit. |
| `colors_and_type.css` | Mirror of the root file. Tokens stay one-direction. |
| `wordmark.svg` / `app-icon.png` | Brand assets used in slides. The wordmark is outlined SVG; no webfont needed. |

## The 8 masters

| # | Master | When to use it |
| - | --- | --- |
| 01 | **Cover** | Slide 1 of every deck. Wordmark + tagline + round/date/founder. |
| 02 | **Section divider** | Chapter break between sections. Big number eyebrow, hero headline, one-line context. Sage background. |
| 03 | **Big statement** | The slide that has to stick. One claim, nothing else. Ink background. |
| 04 | **Two-column** | Problem/solution, today/with Twiglit, before/after. |
| 05 | **Three pillars** | Three principles, three features, three reasons-why-us. |
| 06 | **Big number** | A market stat or traction stat. Stat + caption + source line. |
| 07 | **Quote** | Customer testimonial, advisor quote, press pull-quote. Sage background. |
| 08 | **Ask** | Closing slide. Amount raised + use-of-funds split + contact. Ink background. |

## How to make a real deck

1. Duplicate `slide_templates.html` → `decks/<name>.html` (one file per deck).
2. Replace the placeholder content slide by slide. Voice rules in `../README.md` — sentence case, no emoji, approved vocab only (`Twiglit`, `twigl`, `berry`).
3. Add or remove slides — they're plain `<section class="slide ...">` children of `<deck-stage>`. Update the `data-screen-label` and `slide__pageno` count.
4. Add speaker notes if you want a script: drop a `<script type="application/json" id="speaker-notes">[...]</script>` in `<head>` with one string per slide.
5. Press `P` (or print to PDF from the browser) for handouts. Use the **Export as PPTX (editable)** skill from this project to hand investors a real PowerPoint / Google Slides file.

## Brand rhythm for a 10-slide angel pitch

Sequoia-style: one idea per slide, huge type, calm. A 10-slide order that works:

```
01  Cover                 →  Master 01
02  Section · The problem →  Master 02
03  Problem               →  Master 03 or 04
04  Section · The solution→  Master 02
05  What Twiglit is       →  Master 03 (big statement)
06  How it works          →  Master 05 (three pillars)
07  Why now               →  Master 06 (big number)
08  Traction              →  Master 06 or 07 (quote)
09  Team                  →  Master 05 (three pillars, retitled)
10  Ask                   →  Master 08
```

Keep accent backgrounds rare — one sage and one ink slide per deck is plenty. White is the default.

## Things to keep from drifting

- **No new greens or greys.** Same palette as the product. `--green` / `--green-deep` / `--green-soft`. `--ink` for dark slides.
- **No emoji.** Not in copy, not in slides.
- **No rounded corners.** The berry stays round; everything else is square.
- **System font** for body / headings. The wordmark on the cover is an outlined SVG (`wordmark.svg`), not live text.
- **No webfonts.** The wordmark ships as vector paths so no font file is bundled. Don't add Inter, Roboto, Söhne, etc.
- **No hand-drawn illustrations.** Imagery is a placeholder until a real photo is available — ask the user.

## Slot conventions for filling in

Inside each slide, the slots are commented in `slide_templates.html`. The general rule:

- `.slide__wordmark` (top-left) and `.slide__pageno` (bottom-right) appear on every slide — keep them.
- `.slide__section` (bottom-left) names the current section. Drop it on the cover and on dense slides.
- `.slide__master` (top-right) is the **template tag**. Delete it once you've replaced the placeholder content with real content — it's there to label the master, not to ship.
