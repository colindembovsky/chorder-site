#!/usr/bin/env python3
"""Turn the app's ui-review captures into the site's webp screenshots.

Usage: python3 scripts/optimise-screenshots.py <path-to-ui-review>

Expects <ui-review>/consolidated/{light|dark}-<name>.png (2560x1600) and
<ui-review>/opus/final-{light|dark}-{detect,planning-center-connected}.png.
Writes public/images/app/<name>-<theme>-{1600,800}.webp. Requires Pillow.
"""
import os
import sys

from PIL import Image

if len(sys.argv) != 2:
    sys.exit(__doc__)

src_root = sys.argv[1]
out_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'images', 'app')
os.makedirs(out_dir, exist_ok=True)

jobs = {}
for name in ['library', 'setlist-detail', 'setlist-editor', 'chart-short', 'chart-long',
             'performance-single', 'performance-setlist']:
    for theme in ['light', 'dark']:
        jobs[f'{name}-{theme}'] = (f'consolidated/{theme}-{name}.png', None)
for theme in ['light', 'dark']:
    # The detect capture is mostly empty; keep only the panel at the top.
    jobs[f'detect-{theme}'] = (f'opus/final-{theme}-detect.png', (0, 0, 2560, 520))
    jobs[f'planning-center-{theme}'] = (f'opus/final-{theme}-planning-center-connected.png', None)

for name, (rel, crop) in jobs.items():
    im = Image.open(os.path.join(src_root, rel)).convert('RGB')
    if crop:
        im = im.crop(crop)
    for width in (1600, 800):
        height = round(im.height * width / im.width)
        im.resize((width, height), Image.LANCZOS).save(
            os.path.join(out_dir, f'{name}-{width}.webp'), 'WEBP', quality=80, method=6)
print(f'wrote {len(jobs) * 2} files to {out_dir}')
