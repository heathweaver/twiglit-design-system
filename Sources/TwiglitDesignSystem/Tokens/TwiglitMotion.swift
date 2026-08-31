#if canImport(SwiftUI)
import SwiftUI

/// Motion tokens. The system targets sub-100ms; anything slower gets
/// refactored. Two curves cover everything: a standard ease and a slight
/// overshoot spring.
public enum TwiglitMotion {
    /// `--d-fast` — 80ms, the default for everything.
    public static let durationFast: TimeInterval = 0.08
    /// `--d-base` — 100ms ceiling.
    public static let durationBase: TimeInterval = 0.10
    /// `--d-slow` — alias of base, 100ms.
    public static let durationSlow: TimeInterval = 0.10

    /// `--ease` — cubic-bezier(0.2, 0.7, 0.2, 1), the default.
    public static let ease = Animation.timingCurve(0.2, 0.7, 0.2, 1, duration: durationFast)

    /// `--ease-spring` — cubic-bezier(0.34, 1.4, 0.64, 1), a slight overshoot.
    public static let easeSpring = Animation.timingCurve(0.34, 1.4, 0.64, 1, duration: durationBase)
}
#endif
