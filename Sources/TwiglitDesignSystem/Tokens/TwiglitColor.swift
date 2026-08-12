#if canImport(SwiftUI)
import SwiftUI

/// The Twiglit color palette, transcribed from `assets/css/tokens.css`.
///
/// The palette is CLOSED: white body + four layered greys + one ink + one
/// green family + one berry. Do not introduce new greens or greys — reach for
/// an existing role instead.
public enum TwiglitColor {

    // MARK: - Surfaces — the layered-greys vocabulary

    /// `--bg` — content surface (the tree, modal bodies).
    public static let bg = Color(hex: 0xFFFFFF)
    /// `--bar-search` — Bar 1, search / global nav.
    public static let barSearch = Color(hex: 0xF2F2F2)
    /// `--bar-location` — Bar 2, breadcrumbs / location.
    public static let barLocation = Color(hex: 0xE9E9E9)
    /// `--bar-action` — Bar 3, verbs on the selected twig.
    public static let barAction = Color(hex: 0xD7D7D7)
    /// `--bar-selected` — Bar 4, highlight under the focused twig row.
    public static let barSelected = Color(hex: 0xF0F0F0)
    /// `--surface-sunken`.
    public static let surfaceSunken = Color(hex: 0xF8F8F8)
    /// `--surface-tint`.
    public static let surfaceTint = Color(hex: 0xFAFAFA)

    // MARK: - Ink — the dark right rail

    /// `--ink`.
    public static let ink = Color(hex: 0x40404A)
    /// `--ink-elev` — hover / pinned state.
    public static let inkElevated = Color(hex: 0x4D4D58)
    /// `--ink-icon` — idle icon.
    public static let inkIcon = Color(hex: 0x9B9B9B)
    /// `--ink-icon-hover`.
    public static let inkIconHover = Color(hex: 0xFFFFFF, opacity: 0.85)
    /// `--ink-divider`.
    public static let inkDivider = Color(hex: 0xFFFFFF, opacity: 0.10)

    // MARK: - Foreground / text

    /// `--fg` — body text.
    public static let fg = Color(hex: 0x333333)
    /// `--fg-muted` — secondary text.
    public static let fgMuted = Color(hex: 0x666666)
    /// `--fg-subtle` — meta, mono labels.
    public static let fgSubtle = Color(hex: 0x999999)
    /// `--fg-faint` — very low contrast.
    public static let fgFaint = Color(hex: 0xC0C0C0)
    /// `--fg-on-ink` — text on the dark rail.
    public static let fgOnInk = Color(hex: 0xFFFFFF)
    /// `--fg-on-brand` — text on brand green.
    public static let fgOnBrand = Color(hex: 0xFFFFFF)

    // MARK: - Borders

    /// `--border`.
    public static let border = Color(hex: 0xE0E0E0)
    /// `--border-strong`.
    public static let borderStrong = Color(hex: 0xC0C0C0)
    /// `--border-faint`.
    public static let borderFaint = Color(hex: 0xF0F0F0)

    // MARK: - Brand green — collapsed

    /// `--green` — THE brand green (buttons, FAB, logo bg).
    public static let green = Color(hex: 0x417505)
    /// `--green-deep` — darker green text on grey surfaces (verbs, links).
    public static let greenDeep = Color(hex: 0x2D5103)
    /// `--green-soft` — tint behind selected items, soft callouts.
    public static let greenSoft = Color(hex: 0xE8F0DA)
    /// `--green-hover`.
    public static let greenHover = Color(hex: 0x345D04)

    // MARK: - Berry — the bullet and the accent

    /// `--berry` — default twig bullet, avatar fallback.
    public static let berry = Color(hex: 0xB86B6A)
    /// `--berry-soft` — tint for locked / attention states.
    public static let berrySoft = Color(hex: 0xF1DCDB)
    /// `--berry-deep` — berry text on tint.
    public static let berryDeep = Color(hex: 0x8E4A4A)
}
#endif
