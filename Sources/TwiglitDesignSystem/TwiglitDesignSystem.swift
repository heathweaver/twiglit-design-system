/// Twiglit Design System — a SwiftUI port of the tokens and components defined
/// in the `heathweaver/twiglit-design-system` repository.
///
/// The source of truth for these values is that repo's `assets/css/tokens.css`
/// and `colors_and_type.css`. When the upstream tokens change, re-sync the
/// Swift transcription here.
///
/// Entry points:
/// - ``TwiglitColor`` — the closed color palette.
/// - ``TwiglitSpacing`` / ``TwiglitBarHeight`` / ``TwiglitRadius`` — layout.
/// - ``TwiglitFont`` / ``TwiglitTextStyle`` — typography.
/// - ``TwiglitMotion`` / ``TwiglitShadow`` — motion and elevation.
/// - ``Berry`` — the signature twig bullet.
/// - ``MobilePillNav`` / ``DMThreadHeader`` — mobile chrome.
/// - ``TwiglitPrimaryButtonStyle`` / ``TwiglitSecondaryButtonStyle``.
public enum TwiglitDesignSystem {
    /// The upstream design-system version this port tracks.
    public static let version = "0.2"
}
