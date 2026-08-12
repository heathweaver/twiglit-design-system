#if canImport(SwiftUI)
import SwiftUI

extension Color {
    /// Builds a color from a 24-bit RGB hex value, e.g. `Color(hex: 0x417505)`.
    ///
    /// The design tokens are authored in CSS as hex literals; this initializer
    /// keeps the Swift port a 1:1 transcription of those source values.
    init(hex: UInt32) {
        let red = Double((hex >> 16) & 0xFF) / 255.0
        let green = Double((hex >> 8) & 0xFF) / 255.0
        let blue = Double(hex & 0xFF) / 255.0
        self.init(.sRGB, red: red, green: green, blue: blue, opacity: 1.0)
    }

    /// Builds a color from a 24-bit RGB hex value with an explicit opacity,
    /// mirroring the `rgba(...)` tokens (e.g. the ink dividers and overlays).
    init(hex: UInt32, opacity: Double) {
        let red = Double((hex >> 16) & 0xFF) / 255.0
        let green = Double((hex >> 8) & 0xFF) / 255.0
        let blue = Double(hex & 0xFF) / 255.0
        self.init(.sRGB, red: red, green: green, blue: blue, opacity: opacity)
    }
}
#endif
