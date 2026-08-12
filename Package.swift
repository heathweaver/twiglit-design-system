// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "TwiglitDesignSystem",
    platforms: [
        .iOS(.v17),
        .macOS(.v14)
    ],
    products: [
        .library(
            name: "TwiglitDesignSystem",
            targets: ["TwiglitDesignSystem"]
        )
    ],
    targets: [
        .target(
            name: "TwiglitDesignSystem"
        )
    ]
)
