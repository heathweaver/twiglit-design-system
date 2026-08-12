#if canImport(SwiftUI)
import SwiftUI

/// Shared body for Twiglit buttons. Lives in a real `View` (not the
/// `ButtonStyle` struct) so `@Environment(\.isEnabled)` actually resolves.
private struct TwiglitButtonBody<Label: View>: View {
    @Environment(\.isEnabled) private var isEnabled

    let label: Label
    let foreground: Color
    let background: Color
    let border: Color?

    var body: some View {
        label
            .font(TwiglitFont.sans(TwiglitFontSize.small, TwiglitFontWeight.bold))
            .tracking(TwiglitFontSize.small * -0.015)
            .foregroundStyle(foreground)
            .padding(.vertical, 7)
            .padding(.horizontal, TwiglitSpacing.x4)
            .background(background)
            .overlay {
                if let border {
                    Rectangle().stroke(border, lineWidth: 1)
                }
            }
            .opacity(isEnabled ? 1 : 0.5)
    }
}

/// The primary button — a square, hairline-free green fill. One per surface.
/// Web parity: `.btn.btn-primary` in `assets/css/system.css`.
public struct TwiglitPrimaryButtonStyle: ButtonStyle {
    public init() {}

    public func makeBody(configuration: Configuration) -> some View {
        TwiglitButtonBody(
            label: configuration.label,
            foreground: TwiglitColor.fgOnBrand,
            background: configuration.isPressed ? TwiglitColor.greenHover : TwiglitColor.green,
            border: nil
        )
        .animation(TwiglitMotion.ease, value: configuration.isPressed)
    }
}

/// The secondary button — the content surface with a strong hairline border.
/// Web parity: `.btn.btn-secondary`.
public struct TwiglitSecondaryButtonStyle: ButtonStyle {
    public init() {}

    public func makeBody(configuration: Configuration) -> some View {
        TwiglitButtonBody(
            label: configuration.label,
            foreground: TwiglitColor.fg,
            background: configuration.isPressed ? TwiglitColor.barSearch : TwiglitColor.bg,
            border: TwiglitColor.borderStrong
        )
        .animation(TwiglitMotion.ease, value: configuration.isPressed)
    }
}

public extension ButtonStyle where Self == TwiglitPrimaryButtonStyle {
    /// Twiglit primary button — square green fill.
    static var twiglitPrimary: TwiglitPrimaryButtonStyle { TwiglitPrimaryButtonStyle() }
}

public extension ButtonStyle where Self == TwiglitSecondaryButtonStyle {
    /// Twiglit secondary button — bordered surface.
    static var twiglitSecondary: TwiglitSecondaryButtonStyle { TwiglitSecondaryButtonStyle() }
}
#endif
