# Chorder Site

Marketing site for the **Chorder** Android app — [`com.ezekielapps.chorder`](https://play.google.com/store/apps/details?id=com.ezekielapps.chorder).

Built with **Astro 5 + Tailwind 3 + Svelte islands**, deployed to **GitHub Pages** via Actions.

Live: `https://colindembovsky.github.io/chorder-site/`

## Stack

- **Astro** for static rendering (zero JS by default).
- **Tailwind CSS** with the in-app *Midnight Neon* palette (default) + *Frosted Slate* light theme via `[data-theme="light"]`.
- **Svelte 5** islands only where reactivity is needed:
  - `MobileNav` — hamburger drawer
  - `ThemeToggle` — light/dark toggle (persisted to `localStorage`, no FOUC)
  - `ScreenshotCarousel` — scroll-snap carousel of the 8 app screens
  - `FAQ` — accordion
- **Inter** from Google Fonts (Roboto fallback to match the app's Material 3 default).

## Local development

```bash
yarn install
yarn dev          # http://localhost:4321/chorder-site/
yarn build        # produces ./dist
yarn preview      # serves ./dist locally
```

> The site is served under the `/chorder-site` base path. Navigate to `http://localhost:4321/chorder-site/` when previewing locally.

## Project layout

```
public/
  images/
    cover.png                # hero photo
    logo.png                 # treble-clef logo
    favicon-source.png       # launcher foreground
    google-play-badge.svg    # Google Play badge
    screenshots/             # 8 in-app captures
src/
  layouts/Base.astro         # html shell, fonts, meta/OG, no-FOUC theme script
  pages/
    index.astro              # landing page
    privacy.astro            # privacy policy
  components/                # zero-JS .astro
  islands/                   # Svelte
  content/                   # typed data (features, faqs, screenshots)
  lib/constants.ts           # APP_ID, PLAY_URL, SUPPORT_EMAIL, etc.
  styles/global.css          # Tailwind + theme tokens
.github/workflows/deploy.yml # GitHub Pages deploy
astro.config.mjs             # site + base + integrations
tailwind.config.mjs
```

## Updating content

| Change | Edit |
|---|---|
| Feature cards | `src/content/features.ts` |
| FAQ Q&A | `src/content/faqs.ts` |
| Screenshot order / captions | `src/content/screenshots.ts` |
| Play Store URL or "live" flag | `src/lib/constants.ts` (`PLAY_LIVE`, `PLAY_URL`) |
| Support email | `src/lib/constants.ts` (`SUPPORT_EMAIL`) |
| Privacy policy text | `src/pages/privacy.astro` |
| Theme colors | CSS variables in `src/styles/global.css` |

To add screenshots: drop PNGs into `public/images/screenshots/` and append entries to `src/content/screenshots.ts`.

## Going live on Google Play

Flip `PLAY_LIVE` to `true` in `src/lib/constants.ts` when the Play listing is published. The hero and final CTA will switch from the "Coming soon" pill to the official Google Play badge.

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

**One-time setup:** In repo Settings → Pages, set **Source: GitHub Actions**.

The workflow uses `actions/configure-pages` to inject `--site` and `--base` into the Astro build automatically, so it keeps working unchanged if you later switch to a user page or custom domain.

### Custom domain (optional)

1. Drop a `CNAME` file in `public/` with your domain.
2. Remove `base: '/chorder-site'` from `astro.config.mjs`.
3. Configure the domain in repo Settings → Pages.

## Licenses & trademarks

- Google Play and the Google Play logo are trademarks of Google LLC. Use the official badge from [Google Play's brand guidelines](https://play.google.com/intl/en_us/badges/).
- App assets (logo, cover photo, screenshots) © Ezekiel Apps.
