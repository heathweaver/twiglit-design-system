#if canImport(SwiftUI)
import SwiftUI

/// Light DM thread header (`preview/comp-chat-leaf.html` `.leaf-header`).
///
/// `bar-search` surface with avatar + name. For 1:1 threads the avatar lives
/// here; the message list below carries bubbles only.
public struct DMThreadHeader: View {
    private let title: String
    private let subtitle: String?
    private let pictureURL: URL?
    private let onBack: () -> Void

    public init(
        title: String,
        subtitle: String? = nil,
        pictureURL: URL? = nil,
        onBack: @escaping () -> Void
    ) {
        self.title = title
        self.subtitle = subtitle
        self.pictureURL = pictureURL
        self.onBack = onBack
    }

    public var body: some View {
        HStack(spacing: 10) {
            Button(action: onBack) {
                Image(systemName: "chevron.left")
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundStyle(TwiglitColor.greenDeep)
                    .frame(width: 36, height: 36)
                    .background(TwiglitColor.bg)
                    .clipShape(Circle())
            }
            .buttonStyle(.plain)

            avatar

            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(TwiglitFont.sans(TwiglitFontSize.body, TwiglitFontWeight.bold))
                    .foregroundStyle(TwiglitColor.fg)
                    .lineLimit(1)
                if let subtitle, !subtitle.isEmpty {
                    Text(subtitle)
                        .font(TwiglitFont.mono(TwiglitFontSize.micro))
                        .foregroundStyle(TwiglitColor.fgMuted)
                        .lineLimit(1)
                }
            }

            Spacer(minLength: 0)
        }
        .padding(.horizontal, TwiglitSpacing.x3)
        .padding(.vertical, TwiglitSpacing.x2)
        .background(TwiglitColor.barSearch)
        .overlay(alignment: .bottom) {
            Rectangle()
                .fill(TwiglitColor.border)
                .frame(height: 1)
        }
    }

    @ViewBuilder
    private var avatar: some View {
        ZStack {
            Circle().fill(TwiglitColor.berry)
            if let pictureURL {
                AsyncImage(url: pictureURL) { phase in
                    switch phase {
                    case .success(let image):
                        image.resizable().scaledToFill()
                    default:
                        initials
                    }
                }
            } else {
                initials
            }
        }
        .frame(width: 36, height: 36)
        .clipShape(Circle())
    }

    private var initials: some View {
        Text(title.first.map { String($0).uppercased() } ?? "?")
            .font(.system(size: 14, weight: .semibold))
            .foregroundStyle(TwiglitColor.fgOnBrand)
    }
}
#endif
