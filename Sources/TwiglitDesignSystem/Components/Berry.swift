#if canImport(SwiftUI)
import SwiftUI

/// The status of a twig, which recolors its berry bullet.
///
/// `shared` and `multiplied` use accent colors that live only on the berry —
/// they are intentionally outside the closed surface/green/berry palette.
public enum BerryStatus {
    case `default`
    case shared
    case multiplied

    var accent: Color {
        switch self {
        case .default: return TwiglitColor.berry
        case .shared: return Color(hex: 0x27AA66)
        case .multiplied: return Color(hex: 0x9B59B6)
        }
    }
}

/// The berry — Twiglit's signature twig bullet.
///
/// A hairline-stroked circle that fills with an inner dot when checked. A
/// focused berry recolors to `green-deep`; status recolors to shared/multiplied.
/// Web parity: `ui_kits/twiglit-ios/iosScreens.jsx`.
public struct Berry: View {
    private let checked: Bool
    private let status: BerryStatus
    private let focused: Bool
    private let size: CGFloat

    public init(
        checked: Bool = false,
        status: BerryStatus = .default,
        focused: Bool = false,
        size: CGFloat = 14
    ) {
        self.checked = checked
        self.status = status
        self.focused = focused
        self.size = size
    }

    private var color: Color {
        // Focus wins over status, matching the web component's precedence.
        focused ? TwiglitColor.greenDeep : status.accent
    }

    public var body: some View {
        Circle()
            .strokeBorder(color, lineWidth: 1.25)
            .overlay {
                if checked {
                    // Inner dot at 18% inset, per the web `inset: '18%'`.
                    Circle()
                        .fill(color)
                        .padding(size * 0.18)
                }
            }
            .frame(width: size, height: size)
    }
}
#endif
