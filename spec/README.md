# Twiglit Design System v0.2 (May 2026)

Canonical source for tokens, components, and patterns. **Don't reach for a
hex.** If a role is missing, add a token in `assets/css/tokens.css` and
propose it — never invent inline.

## What's where

- **`Overview.pdf`** — printable summary. Read this first if you want the
  one-pager.
- **`index.html`** — landing page. Mission, palette swatches, vocabulary.
- **`foundations.html`** — tokens (color, type, spacing, radii, motion,
  iconography). The reference for `tokens.css`.
- **`components.html`** — buttons, inputs, chips, badges, the berry,
  outlines, the four-bar header, the ink rail, the mobile pill, callouts.
- **`patterns.html`** — assembled screens: Home, Chats, Tree, the five
  leaves we've shipped, the details panel redesign.
- **`assets/css/tokens.css`** — the canonical token list. **This is the
  source of truth**; `assets/styles.css` in the app should mirror it.
- **`assets/css/system.css`** — reference component CSS that demonstrates
  how the tokens compose.
- **`assets/brand/`** — logo, app icon, favicon, chat icon.
- **`assets/js/`** — small scripts the HTML pages depend on (tweaks panel,
  topbar). Not used by the app.

## Closed palette (memorize this)

| Role       | Token            | Hex       | Use                           |
| ---------- | ---------------- | --------- | ----------------------------- |
| Body       | `--bg`           | `#ffffff` | Content surface               |
| Bar 1      | `--bar-search`   | `#f2f2f2` | Top search bar                |
| Bar 2      | `--bar-location` | `#e9e9e9` | Breadcrumb / location         |
| Bar 3      | `--bar-action`   | `#d7d7d7` | Action verbs on selected twig |
| Bar 4      | `--bar-selected` | `#f0f0f0` | Selected row highlight        |
| Ink        | `--ink`          | `#40404a` | Right-rail dark column        |
| Foreground | `--fg`           | `#333333` | Body text                     |
| Muted      | `--fg-muted`     | `#666666` | Secondary text                |
| Subtle     | `--fg-subtle`    | `#999999` | Meta, timestamps              |
| Faint      | `--fg-faint`     | `#c0c0c0` | Placeholder, disabled         |
| Border     | `--border`       | `#e0e0e0` | Default hairline              |
| Green      | `--green`        | `#417505` | Brand bg, FAB, logo           |
| Green deep | `--green-deep`   | `#2d5103` | Green text on grey            |
| Green soft | `--green-soft`   | `#e8f0da` | Tint behind selected items    |
| Berry      | `--berry`        | `#b86b6a` | Twig bullet, avatar fallback  |
| Berry soft | `--berry-soft`   | `#f1dcdb` | Tint for attention states     |

The legacy `#6b8f3c` brand green is **retired** — replace with `--green`.

## Typography weights

Four weights are available. Default rhythm is regular + bold; reach for medium
and heavy only when bold isn't enough nuance. Don't use 300 (light) or 800/900
(extra-bold/black) — they read thin or shouty on screen.

| Token         | Value | Use                                    |
| ------------- | ----- | -------------------------------------- |
| `--w-regular` | 400   | Body, paragraphs, captions, tree rows  |
| `--w-medium`  | 500   | Secondary emphasis, small labels       |
| `--w-bold`    | 600   | Headings, titles, primary emphasis     |
| `--w-heavy`   | 700   | Strong emphasis when bold isn't enough |

## Three rules

1. **One direction.** Tokens flow one way: `tokens.css` → app CSS → component
   styles. Never inline hex.
2. **One green.** No new greens. If you think you need one, you don't.
3. **No round corners.** Square everywhere except the berry (50%) and
   filter chips (999px).

## How to view

Open any HTML file in a browser. They're self-contained, no build step.

## Status

v0.2 · May 2026. Migration plan tracking app conformance lives separately;
this directory is the spec, not the migration.
