# Chorder Site

Marketing site for **Chorder**, the Android tablet app for chord charts and setlists ([`com.ezekielapps.chorder`](https://play.google.com/store/apps/details?id=com.ezekielapps.chorder)).

Built with **Astro 6 + Tailwind 3 + Svelte 5 islands**, deployed to GitHub Pages via Actions.

## Design

The page follows the app's v1.1.0 identity: slate chrome, one brass accent for the thing that matters, and Atkinson Hyperlegible Next for all text. Light and dark themes are both first-class. Screenshots swap with the theme. See [`PRODUCT.md`](PRODUCT.md) for the audience and tone and [`DESIGN.md`](DESIGN.md) for tokens, type and components.

## Local development

```bash
yarn install
yarn dev          # http://localhost:4321/
yarn build        # produces ./dist
yarn preview      # serves ./dist locally
```

## Project layout

```
public/images/
  app/                       # app screenshots, {name}-{light|dark}-{1600|800}.webp
  og.jpg                     # social preview (1200x630)
  logo.png, favicon-source.png, google-play-badge.svg
scripts/optimise-screenshots.py   # regenerates public/images/app from the app repo captures
src/
  layouts/Base.astro         # html shell, font import, meta/OG, no-FOUC theme script
  pages/index.astro          # landing page
  pages/privacy.astro        # privacy policy
  components/                # zero-JS .astro (Hero, Features, AppShot, PrivacyBand, FAQSection, ...)
  islands/                   # Svelte: MobileNav, ThemeToggle
  content/                   # typed copy (features, faqs, screenshots/alt text)
  lib/constants.ts           # APP_ID, PLAY_URL, PLAY_LIVE, SUPPORT_EMAIL, taglines
  styles/global.css          # theme tokens and component styles
```

## Updating content

| Change | Edit |
|---|---|
| Feature list | `src/content/features.ts` and the chapters in `src/components/Features.astro` |
| FAQ | `src/content/faqs.ts` |
| Screenshot alt text and sizes | `src/content/screenshots.ts` |
| Play Store URL or "live" flag | `src/lib/constants.ts` (`PLAY_LIVE`, `PLAY_URL`) |
| Support email | `src/lib/constants.ts` (`SUPPORT_EMAIL`) |
| Privacy policy text | `src/pages/privacy.astro` |
| Theme colours | CSS variables in `src/styles/global.css` |

### Refreshing screenshots

Capture new 2560x1600 PNGs in the app repo's `ui-review/` folder, then:

```bash
pip install pillow
python3 scripts/optimise-screenshots.py /path/to/chorder/ui-review
```

## Going live on Google Play

`PLAY_LIVE` in `src/lib/constants.ts` is `true` now that the listing is published. The Get it on Google Play calls to action (header, hero, download band) are shown when it is `true`; otherwise a "Coming soon" state is shown.

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. In repo Settings → Pages, set **Source: GitHub Actions**. The site is served from the custom domain in `public/CNAME`.

## Licenses & trademarks

- Google Play and the Google Play logo are trademarks of Google LLC. Use the official badge from [Google Play's brand guidelines](https://play.google.com/intl/en_us/badges/).
- App assets (logo, screenshots) © Ezekiel Apps.
