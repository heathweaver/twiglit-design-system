#if canImport(SwiftUI)
import SwiftUI

/// The type scale, tuned for high-density tree readability. Values are the
/// `--t-*` tokens in points (the CSS authors them in px at 1:1 with points).
public enum TwiglitFontSize {
    /// `--t-micro` — badge text, timestamps.
    public static let micro: CGFloat = 11
    /// `--t-small` — secondary labels.
    public static let small: CGFloat = 12
    /// `--t-body` — default body / row text.
    public static let body: CGFloat = 14
    /// `--t-base` — paragraph prose.
    public static let base: CGFloat = 15
    /// `--t-md` — small heading.
    public static let md: CGFloat = 17
    /// `--t-lg` — section title.
    public static let lg: CGFloat = 20
    /// `--t-xl` — page title.
    public static let xl: CGFloat = 28
    /// `--t-2xl` — display.
    public static let xxl: CGFloat = 40
    /// `--t-3xl` — hero.
    public static let xxxl: CGFloat = 56
}

/// The four available weights. Twiglit's default rhythm is regular + bold;
/// reach for medium and heavy only when bold isn't enough nuance.
///
/// The CSS numeric weights map onto SwiftUI's named weights: 400→regular,
/// 500→medium, 600→semibold, 700→bold.
public enum TwiglitFontWeight {
    /// `--w-regular` (400).
    public static let regular: Font.Weight = .regular
    /// `--w-medium` (500).
    public static let medium: Font.Weight = .medium
    /// `--w-bold` (600).
    public static let bold: Font.Weight = .semibold
    /// `--w-heavy` (700).
    public static let heavy: Font.Weight = .bold
}

/// Font builders over the system stack. No webfonts ship with the design
/// system, so the sans stack is SF Pro (`.system`) and the mono stack is
/// SF Mono (`.system(design: .monospaced)`).
public enum TwiglitFont {
    /// System sans font at a design-system size and weight.
    public static func sans(_ size: CGFloat, _ weight: Font.Weight = TwiglitFontWeight.regular) -> Font {
        .system(size: size, weight: weight)
    }

    /// System monospaced font — keyboard chips, mono labels, timestamps.
    public static func mono(_ size: CGFloat, _ weight: Font.Weight = TwiglitFontWeight.regular) -> Font {
        .system(size: size, weight: weight, design: .monospaced)
    }
}
#endif
