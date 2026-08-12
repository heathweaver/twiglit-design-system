#if canImport(SwiftUI)
import SwiftUI

/// One tab in the mobile nav pill (`preview/comp-mobile-pill.html`).
public struct MobilePillNavItem: Identifiable, Hashable {
    public let id: String
    public let label: String
    public let systemImage: String

    public init(id: String, label: String, systemImage: String) {
        self.id = id
        self.label = label
        self.systemImage = systemImage
    }
}

/// White mobile nav pill with a square green search affordance.
///
/// Canonical preview: `preview/comp-mobile-pill.html` — white pill, 4px radius,
/// active tab = `green-soft` / `green-deep`, idle = `fg-muted`, search FAB =
/// 56×56 green square with magnifying glass (not a circular `+`).
public struct MobilePillNav: View {
    @Binding private var selection: String
    private let items: [MobilePillNavItem]
    private let onSearchTapped: () -> Void

    private let pillShape = RoundedRectangle(cornerRadius: TwiglitRadius.control, style: .continuous)
    private let searchShadow = TwiglitShadow(
        color: TwiglitColor.green.opacity(0.40),
        radius: 12,
        x: 0,
        y: 8
    )

    public init(
        selection: Binding<String>,
        items: [MobilePillNavItem],
        onSearchTapped: @escaping () -> Void
    ) {
        _selection = selection
        self.items = items
        self.onSearchTapped = onSearchTapped
    }

    public var body: some View {
        HStack(spacing: 10) {
            HStack(spacing: 0) {
                ForEach(items) { item in
                    pillItem(item)
                }
            }
            .padding(.horizontal, TwiglitSpacing.x2)
            .padding(.vertical, 6)
            .background(TwiglitColor.bg)
            .clipShape(pillShape)
            .overlay(pillShape.stroke(TwiglitColor.border, lineWidth: 1))
            .twiglitShadow(.modal)

            Button(action: onSearchTapped) {
                Image(systemName: "magnifyingglass")
                    .font(.system(size: 20, weight: .medium))
                    .foregroundStyle(TwiglitColor.fgOnBrand)
                    .frame(width: TwiglitSpacing.x9, height: TwiglitSpacing.x9)
                    .background(TwiglitColor.green)
                    .clipShape(pillShape)
            }
            .buttonStyle(.plain)
            .twiglitShadow(searchShadow)
            .accessibilityLabel("Search tree")
        }
        .padding(.horizontal, TwiglitSpacing.x4)
        .padding(.top, 10)
        .padding(.bottom, 6)
        .frame(maxWidth: .infinity)
        .background(TwiglitColor.bg)
    }

    @ViewBuilder
    private func pillItem(_ item: MobilePillNavItem) -> some View {
        let isActive = selection == item.id
        Button {
            selection = item.id
        } label: {
            VStack(spacing: 2) {
                Image(systemName: item.systemImage)
                    .font(.system(size: 20))
                    .frame(width: 24, height: 24)
                Text(item.label)
                    .font(.system(size: 12, weight: .regular))
            }
            .foregroundStyle(isActive ? TwiglitColor.greenDeep : TwiglitColor.fgMuted)
            .frame(maxWidth: .infinity)
            .padding(.vertical, TwiglitSpacing.x2)
            .padding(.horizontal, TwiglitSpacing.x1)
            .background {
                if isActive {
                    RoundedRectangle(cornerRadius: TwiglitRadius.control, style: .continuous)
                        .fill(TwiglitColor.greenSoft)
                }
            }
        }
        .buttonStyle(.plain)
        .animation(TwiglitMotion.ease, value: isActive)
    }
}
#endif
