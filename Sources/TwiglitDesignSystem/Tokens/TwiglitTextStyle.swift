#if canImport(SwiftUI)
import SwiftUI

/// A composed type token — font, tracking, line height and default color —
/// mirroring the semantic `.ds-*` classes in `colors_and_type.css`.
///
/// Use these rather than hand-rolling size + weight + tracking each time.
/// Apply with `Text(...).twiglitTextStyle(.h1)`.
public struct TwiglitTextStyle {
    public let font: Font
    /// Letter spacing expressed in em (CSS `letter-spacing`). Converted to
    /// points against `size` when applied.
    public let trackingEm: CGFloat
    public let size: CGFloat
    /// CSS `line-height` multiple, if the token pins one.
    public let lineHeightMultiple: CGFloat?
    /// Default foreground color, if the token pins one.
    public let color: Color?
    public let uppercase: Bool

    public init(
        font: Font,
        size: CGFloat,
        trackingEm: CGFloat = 0,
        lineHeightMultiple: CGFloat? = nil,
        color: Color? = nil,
        uppercase: Bool = false
    ) {
        self.font = font
        self.size = size
        self.trackingEm = trackingEm
        self.lineHeightMultiple = lineHeightMultiple
        self.color = color
        self.uppercase = uppercase
    }

    /// Tracking in points, as SwiftUI's `.tracking(_:)` expects.
    public var trackingPoints: CGFloat { trackingEm * size }

    /// Extra spacing between lines, as SwiftUI's `.lineSpacing(_:)` expects.
    /// `lineSpacing` is the gap *added* to the font's natural line height, so
    /// we subtract 1 from the CSS multiple.
    public var lineSpacing: CGFloat? {
        guard let multiple = lineHeightMultiple else { return nil }
        return size * (multiple - 1)
    }
}

public extension TwiglitTextStyle {
    /// `.ds-hero` — 56/bold, tight leading, display tracking.
    static let hero = TwiglitTextStyle(
        font: TwiglitFont.sans(TwiglitFontSize.xxxl, TwiglitFontWeight.bold),
        size: TwiglitFontSize.xxxl, trackingEm: -0.022, lineHeightMultiple: 1.02
    )
    /// `.ds-display` — 40/bold.
    static let display = TwiglitTextStyle(
        font: TwiglitFont.sans(TwiglitFontSize.xxl, TwiglitFontWeight.bold),
        size: TwiglitFontSize.xxl, trackingEm: -0.022, lineHeightMultiple: 1.05
    )
    /// `.ds-h1` / `.ds-page-title` — 28/bold.
    static let h1 = TwiglitTextStyle(
        font: TwiglitFont.sans(TwiglitFontSize.xl, TwiglitFontWeight.bold),
        size: TwiglitFontSize.xl, trackingEm: -0.015, lineHeightMultiple: 1.25
    )
    /// `.ds-h2` / `.ds-section-title` — 20/bold.
    static let h2 = TwiglitTextStyle(
        font: TwiglitFont.sans(TwiglitFontSize.lg, TwiglitFontWeight.bold),
        size: TwiglitFontSize.lg, trackingEm: -0.015, lineHeightMultiple: 1.25
    )
    /// `.ds-h3` / `.ds-heading` — 17/bold.
    static let h3 = TwiglitTextStyle(
        font: TwiglitFont.sans(TwiglitFontSize.md, TwiglitFontWeight.bold),
        size: TwiglitFontSize.md, trackingEm: -0.015, lineHeightMultiple: 1.25
    )
    /// `.ds-lead` — 17/regular, muted.
    static let lead = TwiglitTextStyle(
        font: TwiglitFont.sans(TwiglitFontSize.md, TwiglitFontWeight.regular),
        size: TwiglitFontSize.md, lineHeightMultiple: 1.6, color: TwiglitColor.fgMuted
    )
    /// `.ds-paragraph` / `.ds-p` — 15/regular.
    static let paragraph = TwiglitTextStyle(
        font: TwiglitFont.sans(TwiglitFontSize.base, TwiglitFontWeight.regular),
        size: TwiglitFontSize.base, lineHeightMultiple: 1.5
    )
    /// `.ds-body` — 14/regular, the default row text.
    static let body = TwiglitTextStyle(
        font: TwiglitFont.sans(TwiglitFontSize.body, TwiglitFontWeight.regular),
        size: TwiglitFontSize.body, lineHeightMultiple: 1.5
    )
    /// `.ds-small` — 12/regular, muted.
    static let small = TwiglitTextStyle(
        font: TwiglitFont.sans(TwiglitFontSize.small, TwiglitFontWeight.regular),
        size: TwiglitFontSize.small, color: TwiglitColor.fgMuted
    )
    /// `.ds-micro` — 11/regular, subtle.
    static let micro = TwiglitTextStyle(
        font: TwiglitFont.sans(TwiglitFontSize.micro, TwiglitFontWeight.regular),
        size: TwiglitFontSize.micro, color: TwiglitColor.fgSubtle
    )
    /// `.ds-mono` — 11/mono, muted, wider tracking.
    static let mono = TwiglitTextStyle(
        font: TwiglitFont.mono(TwiglitFontSize.micro, TwiglitFontWeight.regular),
        size: TwiglitFontSize.micro, trackingEm: 0.04, color: TwiglitColor.fgMuted
    )
    /// `.ds-eyebrow` — 10/mono, uppercase, wide tracking, subtle.
    static let eyebrow = TwiglitTextStyle(
        font: TwiglitFont.mono(10, TwiglitFontWeight.regular),
        size: 10, trackingEm: 0.12, color: TwiglitColor.fgSubtle, uppercase: true
    )
    /// `.ds-label` — 11/mono/bold, uppercase, muted.
    static let label = TwiglitTextStyle(
        font: TwiglitFont.mono(TwiglitFontSize.micro, TwiglitFontWeight.bold),
        size: TwiglitFontSize.micro, trackingEm: 0.01, color: TwiglitColor.fgMuted, uppercase: true
    )
}

private struct TwiglitTextStyleModifier: ViewModifier {
    let style: TwiglitTextStyle

    @ViewBuilder
    func body(content: Content) -> some View {
        let base = content
            .font(style.font)
            .tracking(style.trackingPoints)
            .textCase(style.uppercase ? .uppercase : nil)
            .lineSpacing(style.lineSpacing ?? 0)

        if let color = style.color {
            base.foregroundStyle(color)
        } else {
            base
        }
    }
}

public extension View {
    /// Applies a composed Twiglit type token (font, tracking, leading, and the
    /// token's default color).
    func twiglitTextStyle(_ style: TwiglitTextStyle) -> some View {
        modifier(TwiglitTextStyleModifier(style: style))
    }
}
#endif
