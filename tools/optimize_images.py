#!/usr/bin/env python3
"""Generate optimized web assets from the originals in assets-src/.

Outputs into src/ (the Eleventy input dir):
  - screenshots: 480w + 960w WebP (phone), native-width WebP (watch)
  - app icons: 128px WebP for in-page display, 180px PNG apple-touch icons
  - brand favicon: square-cropped 32/180/512 PNGs from the traffic-light banner

Run from the repo root: python3 tools/optimize_images.py
"""

import sys
from pathlib import Path

from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "assets-src"
OUT_DIR = ROOT / "src"

WEBP_QUALITY = 82


def save_webp(img: Image.Image, dest: Path, width: int = 0) -> None:
    out = img
    if width and img.width > width:
        height = round(img.height * width / img.width)
        out = img.resize((width, height), Image.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    out.save(dest, "WEBP", quality=WEBP_QUALITY, method=6)
    print(f"  {dest.relative_to(ROOT)}  {out.width}x{out.height}  {dest.stat().st_size // 1024}K")


def save_png(img: Image.Image, dest: Path, size: int) -> None:
    out = img.resize((size, size), Image.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    out.save(dest, "PNG", optimize=True)
    print(f"  {dest.relative_to(ROOT)}  {size}x{size}  {dest.stat().st_size // 1024}K")


def screenshots() -> None:
    print("Screenshots:")
    for png in sorted((SRC_DIR / "screenshots").rglob("*.png")):
        img = Image.open(png).convert("RGB")
        rel = png.relative_to(SRC_DIR / "screenshots")
        out_base = OUT_DIR / "screenshots" / rel.parent / rel.stem.lower()
        if img.width >= 960:
            save_webp(img, out_base.with_name(out_base.name + "-480.webp"), 480)
            save_webp(img, out_base.with_name(out_base.name + "-960.webp"), 960)
        else:
            save_webp(img, out_base.with_name(out_base.name + f"-{img.width}.webp"))


def icons() -> None:
    print("App icons:")
    for name in ("random-run", "bikeright", "go-for-a-walk"):
        img = Image.open(SRC_DIR / "icons" / f"{name}.png").convert("RGBA")
        save_webp(img.convert("RGB"), OUT_DIR / "img" / f"{name}-icon-128.webp", 128)
        save_png(img, OUT_DIR / "img" / f"{name}-icon-180.png", 180)


def favicon() -> None:
    """Square-crop the traffic-light icon out of the landscape banner."""
    print("Favicon:")
    img = Image.open(SRC_DIR / "icons" / "play-in-traffic-banner.png").convert("RGB")
    bg = img.getpixel((4, 4))
    # Bounding box of everything meaningfully different from the cream background
    # (the background itself varies by a few RGB points, so threshold the diff).
    solid = Image.new("RGB", img.size, bg)
    diff = ImageChops.difference(img, solid).convert("L").point(lambda v: 255 if v > 16 else 0)
    bbox = diff.getbbox()
    if not bbox:
        sys.exit("could not locate icon in banner")
    left, top, right, bottom = bbox
    w, h = right - left, bottom - top
    side = min(round(max(w, h) * 1.16), img.width, img.height)  # 8% margin per side
    cx, cy = (left + right) // 2, (top + bottom) // 2
    half = side // 2
    cx = min(max(cx, half), img.width - half)
    cy = min(max(cy, half), img.height - half)
    square = img.crop((cx - half, cy - half, cx + half, cy + half))

    for size in (512, 180, 32):
        save_png(square, OUT_DIR / "img" / f"favicon-{size}.png", size)
    save_webp(square, OUT_DIR / "img" / "play-in-traffic-icon-128.webp", 128)


if __name__ == "__main__":
    screenshots()
    icons()
    favicon()
