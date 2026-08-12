import CoreGraphics

/// The 4-point spacing scale, compact-by-default, from `assets/css/tokens.css`.
public enum TwiglitSpacing {
    /// `--space-1` — 4pt.
    public static let x1: CGFloat = 4
    /// `--space-2` — 8pt.
    public static let x2: CGFloat = 8
    /// `--space-3` — 12pt.
    public static let x3: CGFloat = 12
    /// `--space-4` — 16pt.
    public static let x4: CGFloat = 16
    /// `--space-5` — 20pt.
    public static let x5: CGFloat = 20
    /// `--space-6` — 24pt.
    public static let x6: CGFloat = 24
    /// `--space-7` — 32pt.
    public static let x7: CGFloat = 32
    /// `--space-8` — 40pt.
    public static let x8: CGFloat = 40
    /// `--space-9` — 56pt.
    public static let x9: CGFloat = 56
    /// `--space-10` — 72pt.
    public static let x10: CGFloat = 72
}

/// Header bar heights — real measurements from the app.
public enum TwiglitBarHeight {
    /// `--h-bar-search` — 52pt.
    public static let search: CGFloat = 52
    /// `--h-bar-location` — 30pt.
    public static let location: CGFloat = 30
    /// `--h-bar-action` — 40pt.
    public static let action: CGFloat = 40
}

/// Corner radii. Twiglit is a sharp-corners system: hairline borders carry
/// edges. Exceptions: berry (50%), filter chips (999px), and the 4px control
/// radius on mobile nav / search FAB (`preview/comp-mobile-pill.html`).
public enum TwiglitRadius {
    /// Sharp corners — the system default.
    public static let none: CGFloat = 0
    /// 4px control radius — mobile nav pill, active pocket, search FAB.
    public static let control: CGFloat = 4
    /// Fully rounded pill (filter chips only). Mirrors `border-radius: 999px`.
    public static let pill: CGFloat = 999
}
