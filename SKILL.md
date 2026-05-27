---
name: twiglit-design
description: Use this skill to generate well-branded interfaces and assets for Twiglit, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Twiglit design skill

Twiglit is "a shared tree for people and the AIs they work with."
The brand is **calm, dense, paper-like** — white body, four layered greys,
one green, one berry. Square corners, hairline borders, system fonts,
sub-100ms motion. No emoji.

## Start here

1. Read **`README.md`** for the full brand voice, visual foundations,
   iconography rules, and the file index.
2. Skim **`colors_and_type.css`** for the token names you'll actually
   write into HTML/CSS.
3. Open the **Design System tab** in this project (or the
   `preview/*.html` cards directly) to see swatches, type specimens,
   spacing, components, and brand assets at a glance.
4. If you're recreating product UI, open `spec/components.html` and
   `spec/patterns.html` — every component and every assembled screen is
   spec'd there. Lift markup + inline SVGs directly.

## The three rules (memorize)

1. **One direction** — tokens → app CSS → component styles. Never inline hex.
2. **One green** — `--green` for fills, `--green-deep` for text on grey,
   `--green-soft` for tints. No new greens.
3. **No round corners** — square everything except the berry (50%) and
   filter chips (999px).

## File map for an agent

| Need… | Look at… |
| ----- | -------- |
| Token vars (color/space/motion/type) | `assets/css/tokens.css` |
| Component CSS (buttons, bars, berry, rail) | `assets/css/system.css` |
| Just color + type, distilled | `colors_and_type.css` |
| Logo, app icon, favicon | `assets/brand/` |
| Source-of-truth spec (HTML) | `spec/index.html`, `spec/foundations.html`, `spec/components.html`, `spec/patterns.html` |
| UI kits — real screens | `ui_kits/twiglit-ios/` |
| Cards used in the Design System tab | `preview/` |

## How to use this skill

**If creating visual artifacts** (slides, mocks, throwaway prototypes,
marketing pages): copy the assets you need out of `assets/brand/` and
link `assets/css/tokens.css` + `assets/css/system.css` into a static
HTML file. Use the components and patterns documented in `spec/` rather
than inventing your own. Avoid webfonts — Twiglit uses the system stack.

**If working on production code**: the canonical app is at
[`github.com/heathweaver/twiglit`](https://github.com/heathweaver/twiglit)
(Deno + Fresh). Treat `tokens.css` as the source of truth and propose
new tokens rather than reaching for hex.

**If invoked with no other guidance**: ask the user what they want to
build (mock? slide? prototype? marketing page?), ask 4-6 focused
questions about scope and audience, then act as an expert Twiglit
designer who outputs HTML artifacts _or_ production code, depending on
the need. Defer to the user's brand instincts when they conflict with
the doc — they own the system.

## Things to watch out for

- **Don't use the retired green `#6b8f3c`** — replace with `--green`.
- **Don't introduce new greens or greys.** The palette is closed.
- **Don't use the reserved lexicon** (`twig`, `leaf`, `grain`, `trunk`,
  `prune`, `graft`, `bloom`) in product copy — they're awaiting
  approval. Approved-for-everyday: `Twiglit`, `twigl`, `berry`.
- **Don't add emoji.** Not in copy, not in UI.
- **Don't add webfonts.** System stack only.
- **Don't round corners** unless it's the berry or a filter chip.
- **Don't write transitions longer than 100ms.**
- **Don't draw new icons hand-rolled in SVG.** Lift from
  `spec/foundations.html` (where every icon is inlined) or substitute
  from Phosphor / Lucide and flag the substitution to the user.
- **Size icons UP, not down.** Twiglit's audience skews older. Glyphs
  ≥18px in chrome, ≥22px in chat composers + any tappable surface. The
  glyph must fill ≥60% of its well — tiny icon in big circle reads as
  decorative. See the **Iconography sizing rules** card.

## Copywriting — anti-slop

Twiglit copy is **direct, calm, declarative** (see README "Voice & tone").
On top of that, any copy you write — UI strings, slide text, prototype
microcopy, marketing — must avoid the patterns below. Source of truth is
the team's "Copywriting Rules" doc in Twiglit; this is the distilled
checklist.

**Hard rules** (banned outright in all output, including conversational
replies):

- **No em dashes** (—). Use commas, parentheses, or two sentences.
- **No colons** as a rhetorical device inside prose. (Token tables, time
  stamps `09:42`, and ratios are fine.)
- **No "not X, but Y" / "no X, no Y, just Z" parallelisms.**

**Slop tells to avoid** (the fingerprints of unedited LLM output):

- **Rule-of-three triplets** when listing adjectives, benefits, or
  takeaways. Use one strong word or two, not always three.
- **Bolded bullet headers followed by a colon + descriptive text.** The
  single most recognisable LLM list format. Use prose or unbolded
  bullets. (Yes, this file uses some — exempted because it's a reference
  checklist, not product copy.)
- **Hedging openers**: "It's worth noting that," "Importantly,"
  "Notably," "Interestingly."
- **Promotional intensifiers**: "rich cultural heritage," "vibrant,"
  "bustling," "stunning," "robust," "seamless," "leverage," "delve,"
  "unpack," "multifaceted."
- **Vague closers**: "ultimately, this represents a paradigm shift," "in
  conclusion, X is more than just Y."
- **Broad-theme inflation** that connects a small thing to "the future
  of work," "human civilisation," "the digital age," without earning it.
- **Predictable transitions**: "moreover," "furthermore," "additionally,"
  "in addition to this."
- **Title-case subheadings** inside body copy. Sentence case (already a
  Twiglit rule — reinforced here).
- **Markdown leaking into prose** — stiff structure where a flowing
  paragraph would do.

**Test before shipping:** read it out loud. If it sounds like a
corporate blog post nobody asked for, rewrite it.
