#!/usr/bin/env python3
"""Generate 1200x630 social share cards (og:image / twitter:image) for the
site and each app. Brand: asphalt background, signal-color route line,
app icon, Sora display type.

Run from the repo root: python3 tools/make_share_cards.py
Fonts are fetched once into ~/.cache/pit-tools/fonts (TTF builds of the
same Google fonts the site uses).
"""

import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "img"
FONT_CACHE = Path.home() / ".cache" / "pit-tools" / "fonts"

FONT_URLS = {
    "Sora-Bold.ttf": "https://github.com/google/fonts/raw/main/ofl/sora/Sora%5Bwght%5D.ttf",
    "DMSans.ttf": "https://github.com/google/fonts/raw/main/ofl/dmsans/DMSans%5Bopsz%2Cwght%5D.ttf",
}

W, H = 1200, 630
ASPHALT = (26, 26, 26)
WARM_WHITE = (245, 240, 232)
WARM_MUTED = (245, 240, 232, 178)

CARDS = [
    {
        "out": "share-play-in-traffic.png",
        "icon": "play-in-traffic-banner-crop",  # special-cased below
        "name": "Play in Traffic",
        "tagline": "You pick the distance. We pick the streets.",
        "color": (196, 166, 122),  # warm accent
    },
    {
        "out": "share-random-run.png",
        "icon": "random-run.png",
        "name": "Random Run",
        "tagline": "New route, every time.",
        "color": (232, 89, 60),
    },
    {
        "out": "share-bikeright.png",
        "icon": "bikeright.png",
        "name": "BikeRight",
        "tagline": "Safer routes, scored and explained.",
        "color": (45, 184, 122),
    },
    {
        "out": "share-go-for-a-walk.png",
        "icon": "go-for-a-walk.png",
        "name": "Go for a Walk",
        "tagline": "Same block, new streets.",
        "color": (242, 166, 35),
    },
]


def fetch_fonts():
    FONT_CACHE.mkdir(parents=True, exist_ok=True)
    for fname, url in FONT_URLS.items():
        dest = FONT_CACHE / fname
        if not dest.exists():
            print("fetching", fname)
            urllib.request.urlretrieve(url, dest)


def load_font(fname, size, bold=False):
    font = ImageFont.truetype(str(FONT_CACHE / fname), size)
    try:
        font.set_variation_by_axes([700 if bold else 400])
    except Exception:
        pass
    return font


def site_icon():
    """Square crop of the traffic-light banner (same logic as optimize_images)."""
    from PIL import ImageChops

    img = Image.open(ROOT / "assets-src" / "icons" / "play-in-traffic-banner.png").convert("RGB")
    bg = img.getpixel((4, 4))
    solid = Image.new("RGB", img.size, bg)
    diff = ImageChops.difference(img, solid).convert("L").point(lambda v: 255 if v > 16 else 0)
    left, top, right, bottom = diff.getbbox()
    cx, cy = (left + right) // 2, (top + bottom) // 2
    half = min(round(max(right - left, bottom - top) * 0.58), cx, cy, img.width - cx, img.height - cy)
    return img.crop((cx - half, cy - half, cx + half, cy + half))


def rounded_icon(img, size, radius_ratio=0.22):
    icon = img.resize((size, size), Image.LANCZOS).convert("RGBA")
    mask = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle([0, 0, size, size], radius=int(size * radius_ratio), fill=255)
    icon.putalpha(mask)
    return icon


def route_line(draw, color):
    """Subtle city-block route polyline across the lower part of the card."""
    pts = [(-20, 520), (180, 520), (180, 440), (420, 440), (420, 500), (700, 500), (700, 430), (960, 430), (960, 480), (1220, 480)]
    draw.line(pts, fill=color + (60,), width=6, joint="curve")
    draw.ellipse([954 - 9, 480 - 9, 954 + 9, 480 + 9], fill=color + (160,))


def make_card(spec, fonts):
    img = Image.new("RGBA", (W, H), ASPHALT + (255,))
    draw = ImageDraw.Draw(img, "RGBA")

    route_line(draw, spec["color"])

    if spec["icon"] == "play-in-traffic-banner-crop":
        raw = site_icon()
    else:
        raw = Image.open(ROOT / "assets-src" / "icons" / spec["icon"]).convert("RGB")
    icon = rounded_icon(raw, 200)
    img.alpha_composite(icon, (96, 150))

    name_font, tag_font, small_font = fonts
    tx = 340
    draw.text((tx, 195), spec["name"], font=name_font, fill=WARM_WHITE)
    draw.text((tx, 295), spec["tagline"], font=tag_font, fill=WARM_MUTED)
    draw.text((tx, 365), "Free on iPhone & Apple Watch", font=small_font, fill=spec["color"] + (255,))

    out = OUT / spec["out"]
    img.convert("RGB").save(out, "PNG", optimize=True)
    print(f"  {out.relative_to(ROOT)}  {out.stat().st_size // 1024}K")


if __name__ == "__main__":
    fetch_fonts()
    fonts = (
        load_font("Sora-Bold.ttf", 76, bold=True),
        load_font("DMSans.ttf", 40),
        load_font("DMSans.ttf", 30, bold=True),
    )
    for spec in CARDS:
        make_card(spec, fonts)
