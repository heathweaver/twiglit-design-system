# Twiglit Design System

> A shared tree for people and the AIs they work with. Twigl what matters in
> from anywhere, share branches with the people who need them, and the AIs
> each of you use can read the tree and pick up where the last one left off.

This folder is a **design system** — tokens, components, language, and brand
context that an AI designer can read to produce well-branded Twiglit
artifacts (slides, prototypes, mocks, marketing pages) without re-deriving
the rules from scratch.

It's a distillation of the canonical spec the Twiglit team shipped as
`v0.2 · May 2026`. Read `spec/index.html`, `spec/foundations.html`,
`spec/components.html`, and `spec/patterns.html` in a browser to see the
source-of-truth pages this is built from.

---

## Sources

This system was built from materials the user attached:

- **Spec HTML pages** (now mirrored in `spec/`):
  - `spec/index.html` — overview, palette, lexicon, principles
  - `spec/foundations.html` — color / type / spacing / radii / motion / icons
  - `spec/components.html` — buttons, inputs, chips, berry, bars, rail, nav pill
  - `spec/patterns.html` — assembled screens (Home, DMs, Tree, Leaves)
  - `spec/README.md` — the team's own README, palette table, three rules
  - `spec/Overview.pdf` — printable one-pager
- **Brand assets**: logo lockup (`wordmark.svg`, outlined), app icon, chat icon, favicon
- **CSS**: `assets/css/tokens.css` (canonical), `assets/css/system.css`
- **GitHub repos**:
  - [`heathweaver/twiglit`](https://github.com/heathweaver/twiglit) — the
    web/server app (Deno + Fresh). The spec we're following is the
    source of truth for visuals; this repo is the source of truth for
    behavior.
  - [`heathweaver/twiglit-ios`](https://github.com/heathweaver/twiglit-ios) —
    the iOS app (SwiftUI). The current iOS visuals **drift from the
    spec**: `Color(.systemGray5)` instead of brand greys, SF Symbols
    instead of the design-system iconography, and no berries. The
    `ui_kits/twiglit-ios/` UI kit in this folder shows what the screens
    should look like after the design system is applied properly.

> **For future designers**: explore the GitHub repo directly to recreate
> screens at higher fidelity, or to find component implementations not yet
> captured here.

---

## Index

| File / Folder                    | What it is                                                                                                                                                                      |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `README.md`                      | This file — start here                                                                                                                                                          |
| `SKILL.md`                       | Agent-skill manifest (cross-compatible w/ Claude Code)                                                                                                                          |
| `colors_and_type.css`            | Distilled CSS vars + semantic type classes                                                                                                                                      |
| `assets/css/tokens.css`          | Canonical token list (color, space, motion, etc.)                                                                                                                               |
| `assets/css/system.css`          | Reference component CSS — buttons, inputs, bars, berry, outline, rail, mobile pill, callouts                                                                                    |
| `assets/css/colors_and_type.css` | Mirror of root colors_and_type.css                                                                                                                                              |
| `assets/brand/`                  | Logo (`wordmark.svg`, outlined), `app-icon.png`, `chat-icon.png`, `favicon.png`                                                                                                 |
| `assets/js/`                     | Spec-page support scripts (topbar, tweaks-panel)                                                                                                                                |
| `spec/`                          | The four canonical spec HTML pages + the team's README and PDF                                                                                                                  |
| `preview/`                       | Cards rendered in the Design System tab (one swatch / specimen / spec per card)                                                                                                 |
| `ui_kits/twiglit-ios/`           | UI kit — seven iOS screens (Login, DM list, Tree, Twigl AI start, DM thread, Twig details, AI thread) showing how the iOS app **should** look once the design system is applied |
| `assets/glossary.ts`             | The authoritative vocabulary file — same content the MCP server uses                                                                                                            |

No webfonts ship with the design system. Twiglit uses the **system stack**
(`-apple-system`, `system-ui`, "Segoe UI", "Noto Sans") for everything,
and the wordmark ships as outlined SVG (`assets/brand/wordmark.svg`).
See "Typography" below.

---

## The three rules (memorize these)

1. **One direction.** Tokens flow one way: `tokens.css` → app CSS →
   component styles. Never inline hex.
2. **One green.** No new greens. If you think you need one, you don't.
3. **No round corners.** Square everywhere except the berry (50%) and
   filter chips (999px).

---

## CONTENT FUNDAMENTALS

Twiglit copy is **direct, calm, declarative**. The product talks like a
considered notebook, not a chirpy app.

### Voice & tone

- **Direct, not chatty.** Statements over questions. Verbs first.
  - ✓ "Twigl what matters in from anywhere."
  - ✓ "Tree before time."
  - ✗ "Hey there! Ready to organize your thoughts? 😊"
- **Botanical metaphor, all approved.** The authoritative glossary lives
  at `assets/glossary.ts` (mirrored from the MCP server). The full
  vocabulary — and it's all **approved for product copy**:
  - **Twiglit** — the product itself.
  - **Twig** — a single item in the tree (task, note, project — the
    atomic building block).
  - **Twiglits** — the children of a twig (subtasks, anything nested).
  - **Tree** — the full hierarchical structure of twigs.
  - **Berry** — the small circle to the left of each twig; tap to focus.
  - **Leaf** — the detail panel on the right.
  - **Focus mode** — when you zoom into a twig + its twiglits.
  - **Home** — top-level view showing all root twigs.
  - **Twigler** — a Twiglit user.
  - **Workspace** — the root container for a user's tree (hidden from UI).
  - **Shared twig** — twig shared with other twiglers; **green berry**.
  - **Multiplied twig** — twig mirrored in multiple places; **purple berry**.
  - **Owner / Assignee / Participant** — roles on a twig.

  > ⚠️ The early spec `spec/index.html` proposed extra verbs like
  > _prune_, _graft_, _bloom_ — those are **not in the glossary** and
  > should not be used. Stick to the list above.

- **Sentence case for everything.** Titles, buttons, menus — sentence
  case. Never Title Case In UI. Never ALL CAPS except in mono eyebrow
  labels (where it's a typographic move, not shouting).
- **Person.** Second person ("you") is the default. The product
  ("Twiglit", "twigl") is referred to in the third person, not "we".
- **No exclamations.** No "!". Patience is calm; enthusiasm is rude.
- **No emoji** in product copy. Emoji are not part of the brand. The only
  pictograms are the SVG icon set + the berry bullet.

### Casing examples

| Surface          | Example                                                       |
| ---------------- | ------------------------------------------------------------- |
| Hero             | "Twigl what matters between the AIs and people in your life." |
| Section eyebrow  | `01 · Foundations` (mono, uppercase, dotted)                  |
| Section title    | "Color roles, not raw colors"                                 |
| Button           | "Save" · "Add" · "Cancel" · "Delete" · "+ New twigl"          |
| Bar verb         | "Focus" · "Details" · "Complete" · "Outdent" · "Indent"       |
| Callout headline | "The bars are a vocabulary, not decoration."                  |
| Empty state      | "Nothing pinned yet."                                         |

### Headlines lean punchy

The team writes single-clause headlines that double as principles:

- "Grow softly."
- "Trees, not folders."
- "Calm, never quiet."
- "Tree before time."
- "The berry knows."

### Microcopy patterns

- **Keyboard shortcuts** render in `.kbd` chips, mono, uppercase symbols:
  `⌘ /`, `⌥ ↵`, `⇧ ⌘ T`. The keyboard chip is the **only** place mono is
  used in chrome.
- **Timestamps** use `09:42` / `Yesterday` / `Mar 14` — mono font,
  `--fg-subtle`.
- **Empty states** are one sentence + the affordance to fix it ("Nothing
  here yet. + New twigl").

---

## VISUAL FOUNDATIONS

### The four-bar header (the spine)

Every desktop screen stacks the same four horizontal bars, each a darker
grey than the last. Read top-down: **who → where → what → selected**.

| Bar   | Token            | Hex       | Job                                                    |
| ----- | ---------------- | --------- | ------------------------------------------------------ |
| Bar 1 | `--bar-search`   | `#f2f2f2` | Avatar, global search, inbox icon                      |
| Bar 2 | `--bar-location` | `#e9e9e9` | Breadcrumb / location                                  |
| Bar 3 | `--bar-action`   | `#d7d7d7` | Verbs on the selected twig (Focus, Details, Complete…) |
| Bar 4 | `--bar-selected` | `#f0f0f0` | The selected row highlight                             |

Heights are fixed: `44 / 36 / 40 / variable`. Bar 3 is the only one with
a real elevation (`--shadow-action`, `0 2px 3px rgba(0,0,0,.12)`).

The **body** below the bars is pure white because everything else is
grey. The bars are a vocabulary, not decoration — never reorder, recolor,
or merge them.

### Color

- **White body**, **four greys** (Bar 1–4), **two greens** (bright +
  deep) + a soft tint, **one berry** + a soft tint, **one ink** for the
  right rail and mobile pill. That's the whole brand.
- **`--green` (#417505)** is for _fills_: logo bg, FAB, primary button,
  the AI send button, the rail-active stripe.
- **`--green-deep` (#2d5103)** is for _green text on grey_: action-bar
  verbs ("Focus", "Indent"), the "+ New twigl" label, focused folder
  glyph.
- **`--green-soft` (#e8f0da)** tints behind selected items, callout
  backgrounds, "approved" badge.
- **`--berry` (#b86b6a)** is the twig bullet and avatar fallback. Never
  use it as a UI background.
- **`--ink` (#40404a)** is the right rail and the mobile pill nav.
- The legacy `#6b8f3c` brand green is **retired** — substitute `--green`.

### Typography

- **Body, headings, UI — SF Pro / system stack.** No webfonts in product
  UI. `-apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Noto Sans"…`
  On Apple devices this resolves to SF Pro.
- **Wordmark — Avenir Next Bold (700), shipped as outlined SVG.** The
  brand lockup lives at `assets/brand/wordmark.svg`. The type is
  converted to vector paths, so the file is self-contained and renders
  identically regardless of which fonts the viewer has installed. The
  source font, Avenir Next, is proprietary (Linotype/Monotype) and is
  **not bundled** — to regenerate the wordmark, work on a Mac where
  Avenir Next is system-installed, then outline before exporting.
  Avenir Next is **only** used in the wordmark — never for body,
  headings, or UI chrome.
- **Four weights** in product type: 400 (regular), 500 (medium), 600
  (bold), 700 (heavy). Default rhythm is regular + bold. 300 and 800/900
  are forbidden.
- **Tight tracking** at display sizes: `-0.022em`. Body is neutral.
- **Mono** (`ui-monospace`, "SF Mono") appears in exactly three places:
  keyboard chips, mono eyebrow labels, and timestamps. Never for prose.

### Spacing

- **4-point rhythm** from `--space-1` (4px) to `--space-10` (72px).
- The tree is **dense**: most internal gaps are `--space-2` to
  `--space-4`. Larger values are for layout chrome, not row content.

### Radii — square, always

- **Default: 0.** No rounded buttons, no rounded cards, no rounded inputs.
- **Two exceptions, each earned for one reason**:
  - The **berry** (the bullet) — `border-radius: 50%`. The bullet is the
    brand. It stays round.
  - **Filter chips** — `border-radius: 999px`. Earned, not default.

If you find yourself wanting to round something, ask whether it's
actually the berry or a filter chip. If not, square it.

### Backgrounds

- **No imagery, no gradients, no textures** in product chrome. The
  marketing site may use full-bleed photography (none provided yet), but
  the app is white body + four greys + ink rail.
- **No hand-drawn illustrations.** The brand is allergic to whimsy.
- The only gradient permitted is the subtle "long shadow" on the app
  icon and the avatar gradients in DMs (e.g. `linear-gradient(135deg,
#b88a6e, #8b5a3c)` for a photo avatar fallback).
- The `topbar` on the doc site uses `backdrop-filter: saturate(1.4)
blur(12px)` over rgba(255,255,255,0.92). That's the **one** place blur
  is used.

### Motion

- **Sub-100ms target.** If a transition takes longer, something is wrong
  with the code, not the design.
- **One easing**: `cubic-bezier(0.2, 0.7, 0.2, 1)` (`--ease`).
- **Two durations** are actually used in practice: `--d-fast` (80ms) for
  hovers / focus / color swaps, and `--d-base` (100ms) as a ceiling for
  panel slides.
- **No bounces, no springs, no fades longer than 100ms.** Patience is
  calm; slowness is rude.

### Hover & press states

- **Buttons (primary)** darken on hover: `--green` → `--green-hover`
  (`#345d04`). Press has no extra transform.
- **Buttons (secondary)** swap white bg → `--bar-search` on hover.
- **Buttons (ghost)** swap transparent → `--bar-search` on hover, with
  `--fg-muted` → `--fg` color shift.
- **Outline rows** get a subtle `rgba(0,0,0,0.02)` wash on hover; when
  selected, they get `--bar-selected` AND a full-bleed pseudo-element
  background extending edge-to-edge.
- **Rail pins** get `rgba(255,255,255,0.3)` on hover; active pins gain a
  3px-wide `--green` rail on the left edge.
- **The "+ New twigl" button** uses `opacity: 0.7` on hover.

### Borders & shadows

- **Hairlines carry edges**, not shadows. The default `--border`
  (`#e0e0e0`) is the workhorse; `--border-strong` (`#c0c0c0`) is for
  input outlines.
- **Shadow is rare** and has only four levels:
  - `--shadow-bar` (`0 1px 0 rgba(0,0,0,.05)`) — implied edge under bars
  - `--shadow-action` (`0 2px 3px rgba(0,0,0,.12)`) — Bar 3 lifts off
    the page
  - `--shadow-menu` (`0 4px 16px rgba(0,0,0,.12)`) — popups
  - `--shadow-modal` (`0 8px 32px rgba(0,0,0,.16)`) — modals
- **No inner shadows. No glows. No colored shadows.**

### Cards

A card is `background: var(--bg)` (white) + `border: 1px solid
var(--border)` + `padding: var(--space-5)` (20px) + **square corners**.
No shadow. The padding stays consistent; density is achieved via the
type scale and tight gaps, not shrinking padding.

### Transparency & blur

- Only used on the doc-site **topbar** (translucent white with backdrop
  blur). Not used in the app.
- `rgba(255,255,255,...)` appears in the ink rail for icon hover and
  divider hairlines.

### Layout rules

- The desktop chrome (Bar 1+2+3 = 120px) is **fixed at the top**; scroll
  padding is 128px to clear it.
- The **ink rail** is fixed to the right edge, 64px wide.
- The body is the only scrollable column.
- The **mobile pill nav** floats at the bottom of the viewport,
  centered, with a green FAB sticking out to the right.

### The berry (signature visual)

A 1px-stroke circle with an optional pseudo-element center dot:

- **Empty** — outline only (`--berry`)
- **Checked** — outline + 22%-inset filled center
- **Shared** — color shifts to `#27AA66`
- **Multiplied** — color shifts to `#9B59B6`
- **Focused row** — color shifts to `--green-deep`

Sizes: 11 / 14 / 18 / 24 px. The stroke scales from 1px → 1.5px at xl.

### Imagery

The system as provided is image-light. The app icon is a stylized
white plant on `--green` with a 45° "long shadow" — that long-shadow
treatment is a brand cue and should be reused for any icon needing depth.

Photo avatars in DMs use a warm gradient
(`linear-gradient(135deg, #b88a6e, #8b5a3c)`) as a placeholder until a
real photo loads. The DM list also uses these gradient blobs:

- berry red gradient for an unset avatar (`var(--berry)`)
- green gradient for the AI / system
- sky-blue gradient (`#5a7da5 → #4a6fa5`) for an alternate accent

There is no full-bleed product photography in the brand. Stock imagery
should not be invented — leave a placeholder and ask the user.

---

## ICONOGRAPHY

- **Style**: cleanly drawn, traditional metaphors — a house is a house,
  a magnifier is a magnifier. **Stroked, never filled.** 24×24 viewBox.
  **1.5–1.75px stroke**, rounded line caps + joins. Inherits
  `currentColor`. Centered visually, not mathematically.
- **Size up. Always.** Twiglit's users skew older and the calm/dense
  rhythm of the brand makes it tempting to under-size affordances —
  resist it. Glyphs are **18px minimum** in chrome, **22px+ in chat
  composers and any tappable surface**. Wells (the round backgrounds
  behind icons) stay **at least 30–32px**, and the glyph should fill
  ≥60% of the well — small icon swimming in a big well reads as
  decorative and the hit zone feels unclear. Padding around interactive
  glyphs is for visual rhythm, not negotiation: **tighten it**.
  - **Tappable target minimum**: 44×44 (iOS) / 32×32 (web inside a
    composer or toolbar). Below that, you're punishing presbyopic +
    motor-impaired users to save 4px of layout.
  - **Send buttons, mic, +, model selectors** all carry a clearly
    visible icon ≥20px. The Twiglit "ink on paper" aesthetic does not
    excuse 14px icons.
  - **Test with reading glasses off arm's length.** If you can't tell
    what the icon is supposed to do, it's too small or too thin.
- **System**: a placeholder set drawn in **Phosphor Regular** style. The
  team's target is a custom set drawn for Twiglit; until then, Phosphor
  Regular (or hand-redrawn equivalents) is the substitute.
  - **Substitution flag** — there is no icon font shipped in the system.
    When you need an icon not already inlined in the spec pages, lift it
    from Phosphor or Lucide (both share the stroked-1.5px style). Lucide
    is CDN-friendly: `https://unpkg.com/lucide@latest`.
- **Where icons live**: every icon used in `spec/foundations.html`,
  `spec/components.html`, and `spec/patterns.html` is inlined as SVG —
  copy them out of those files rather than redrawing.
- **No icon-only buttons** when actionable. Icons are paired with a text
  label. The only icon-only affordances are the **rail pins** (large
  hit target, exhaustively learned), the **bar-avatar** (initials), and
  the **berry** (which isn't really an icon, it's the bullet).
- **No emoji.** Not in copy, not in UI.
- **No unicode glyphs as icons.** The breadcrumb arrow `›` is the one
  exception, and it's `var(--berry)`-colored.
- **The long-shadow app icon** is the only "illustrated" mark in the
  system. It's `assets/brand/app-icon.png`. The smaller `chat-icon.png`
  reuses the same long-shadow treatment in a circle.

---

## How to design with this system

Open the **Design System tab** to scan tokens + components at a glance.
For a faithful recreation:

1. Link `assets/css/tokens.css` first, then `assets/css/system.css`. Or
   link `colors_and_type.css` for just the type + color layer.
2. Build the chrome with the four-bar header. Don't substitute.
3. Use the berry for any bullet/status. Don't reach for a checkbox.
4. Use the system font stack. Don't add Inter / Roboto / anything else.
5. Use `--green` for fills, `--green-deep` for text, `--green-soft` for
   tints. That's the whole green policy.
6. Square corners by default. The berry and filter chips are the only
   exceptions.
7. Keep transitions ≤100ms with the one `--ease`.

When something doesn't fit, add a token to `tokens.css` and explain why,
rather than inlining a hex.

---

## Status

`v0.2 · May 2026`. The spec is post-Heath-approval for the closed
palette, the four-bar spine, square corners, and the four-weight type
stack. The lexicon is **awaiting approval** for most terms — only
`Twiglit`, `twigl`, and `berry` are cleared for everyday product copy.
