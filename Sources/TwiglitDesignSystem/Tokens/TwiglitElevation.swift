#if canImport(SwiftUI)
import SwiftUI

/// A single elevation token. Twiglit is flat: hairline borders carry most
/// edges and shadow is rare. CSS blur radius is halved to approximate
/// SwiftUI's shadow `radius`.
public struct TwiglitShadow {
    public let color: Color
    public let radius: CGFloat
    public let x: CGFloat
    public let y: CGFloat

    public init(color: Color, radius: CGFloat, x: CGFloat, y: CGFloat) {
        self.color = color
        self.radius = radius
        self.x = x
        self.y = y
    }
}

public extension TwiglitShadow {
    /// `--shadow-bar` — 0 1px 0 rgba(0,0,0,0.05).
    static let bar = TwiglitShadow(color: .black.opacity(0.05), radius: 0, x: 0, y: 1)
    /// `--shadow-action` — 0 2px 3px rgba(0,0,0,0.12).
    static let action = TwiglitShadow(color: .black.opacity(0.12), radius: 1.5, x: 0, y: 2)
    /// `--shadow-modal` — 0 8px 32px rgba(0,0,0,0.16).
    static let modal = TwiglitShadow(color: .black.opacity(0.16), radius: 16, x: 0, y: 8)
    /// `--shadow-menu` — 0 4px 16px rgba(0,0,0,0.12).
    static let menu = TwiglitShadow(color: .black.opacity(0.12), radius: 8, x: 0, y: 4)
}

public extension View {
    /// Applies a Twiglit elevation token.
    func twiglitShadow(_ shadow: TwiglitShadow) -> some View {
        self.shadow(color: shadow.color, radius: shadow.radius, x: shadow.x, y: shadow.y)
    }
}
#endif
