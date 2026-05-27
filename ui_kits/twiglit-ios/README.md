# Twiglit iOS — UI kit

A design-system-aligned recreation of three core iOS screens, built to
show **what the iOS app should look like** once the Twiglit design
system is applied properly.

Open `index.html` to see all three screens side by side on a pan/zoom
canvas. Click any phone to open it fullscreen.

## What's different from the current app

The current app at [`heathweaver/twiglit-ios`](https://github.com/heathweaver/twiglit-ios)
ships with **plain iOS chrome**: `Color(.systemGray5)` instead of brand
greys, SF Symbols only (no berries), `house.fill` / `magnifyingglass` /
`arrowtriangle.forward.fill` for nav and send, and a generic pill nav
that doesn't quite match the spec's mobile pill.

This kit corrects each of those:

| Concern | Current iOS app | This kit |
| ------- | --------------- | -------- |
| Greys | `Color(.systemGray5)` (~#E5E5EA) | `--bar-search` / `--bar-location` / `--bar-action` (the four-bar vocabulary) |
| Bullets | None (chevron + text only) | The **berry** — empty, checked, shared, multiplied, focused |
| Tree header | `house.fill` + `›` text | The four-bar spine: search → breadcrumb → action verbs → selected row |
| Action verbs | SF Symbols icon-only buttons | Icon + green-deep label (`Complete`, `Outdent`, `Indent`, `Delete`, `Details`) |
| Send button | `arrowtriangle.forward.fill` | Square green tile, matches web "+ New twigl" treatment |
| Nav pill | `house.fill / bubble.left / list.bullet.indent` | `tree / chat / team / more` icons matching `spec/components.html` |
| Twigl start | Plain text field | The patterns-page `home-start` (serif welcome + composer + prompts) |
| DM bubbles | `(220,248,198)` green + `Color.white` | `--green-soft` + `--bg` with `--border` hairline — square, not rounded |

## Screens

The canvas has three sections:

**Entry & navigation**
- **Login · magic link** — replaces `LoginView.swift`. Centered brand mark, the bar-location grey as a quiet auth background, square email input + green button.
- **DMs list** — replaces `ConversationsView.swift` (list mode). Brand-styled rows with avatar, name + timestamp, preview, shared-twig count, and a green unread chip.

**Core surfaces**
1. **Tree (outline)** — replaces `OutlineRootView.swift`. The four-bar header is the spine. Rows use berries with `done` / `shared` /
   `multiplied` / focused states. "+ New twigl" button matches web.
2. **Twigl (AI start)** — replaces `ConversationsView` empty state. The
   long-shadow app icon centered, serif welcome (matches spec
   `home-start` pattern), brand composer with audio-wave hint, prompt chips.
3. **DM (thread)** — replaces `ChatThreadScreen`. WhatsApp-shape thread
   with **square** bubbles, ink-colored header, embedded shared-twig
   card using the design system.

**Detail surfaces**
- **Twig details · the leaf** — replaces `TwigDetailsSheet.swift`. Title with berry, mono meta strip, description, twiglits list, people roles, activity feed. Ink header.
- **Twigl · AI conversation** — the active AI thread (after sending from the start screen). Shows the **Bloom** propose-tray (the green-soft card with "Accept all / Pick" actions).

## Bringing this to SwiftUI

Map the colors directly:

```swift
extension Theme {
  static let bg          = Color.white                          // --bg
  static let barSearch   = Color(hex: 0xF2F2F2)                 // --bar-search
  static let barLocation = Color(hex: 0xE9E9E9)                 // --bar-location
  static let barAction   = Color(hex: 0xD7D7D7)                 // --bar-action
  static let barSelected = Color(hex: 0xF0F0F0)                 // --bar-selected
  static let ink         = Color(hex: 0x40404A)                 // --ink
  static let fg          = Color(hex: 0x333333)                 // --fg
  static let fgMuted     = Color(hex: 0x666666)                 // --fg-muted
  static let fgSubtle    = Color(hex: 0x999999)                 // --fg-subtle
  static let border      = Color(hex: 0xE0E0E0)                 // --border
  static let green       = Color(hex: 0x417505)                 // --green
  static let greenDeep   = Color(hex: 0x2D5103)                 // --green-deep
  static let greenSoft   = Color(hex: 0xE8F0DA)                 // --green-soft
  static let berry       = Color(hex: 0xB86B6A)                 // --berry
  static let berrySoft   = Color(hex: 0xF1DCDB)                 // --berry-soft
}
```

The berry itself can be built with `Circle().stroke()` + an inner
`Circle().fill()`. The four-bar header is just four stacked `HStack`s
with the brand greys.

## Files

| File | What it is |
| ---- | ---------- |
| `index.html` | Mounted canvas with three iOS frames |
| `iosScreens.jsx` | `ScreenTree`, `ScreenTwigl`, `ScreenDM` + `Berry`, `FolderBullet`, `MobilePillNav` |
| `ios-frame.jsx` | iPhone bezel + status bar (starter) |
| `design-canvas.jsx` | Pan/zoom canvas (starter) |
