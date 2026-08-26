import Foundation
import CoreGraphics
import ImageIO
import UniformTypeIdentifiers

let inputPath = "assets/images/sangeetstream_mobile.png"
let url = URL(fileURLWithPath: inputPath)
guard let source = CGImageSourceCreateWithURL(url as CFURL, nil),
      let cgImage = CGImageSourceCreateImageAtIndex(source, 0, nil) else {
    print("Failed to load source image")
    exit(1)
}

let w = cgImage.width
let h = cgImage.height

// Crop top status bar (5.8%) and bottom URL bar (8.5%)
let cropY = Int(Double(h) * 0.058)
let cropH = Int(Double(h) * 0.855)

let cropRect = CGRect(x: 0, y: cropY, width: w, height: cropH)
guard let cropped = cgImage.cropping(to: cropRect) else {
    print("Failed to crop image")
    exit(1)
}

guard let dest = CGImageDestinationCreateWithURL(url as CFURL, UTType.png.identifier as CFString, 1, nil) else {
    print("Failed to create destination")
    exit(1)
}
CGImageDestinationAddImage(dest, cropped, nil)
if CGImageDestinationFinalize(dest) {
    print("SUCCESS: Cropped \(w)x\(h) to \(w)x\(cropH)")
}
