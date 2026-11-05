---
name: Chorder site
description: Marketing page for Chorder, set in the app's own slate-and-brass identity.
colors:
  dark-bg: "#11161B"
  dark-surface: "#1A2128"
  dark-surface-2: "#222B34"
  dark-text: "#E6EBEF"
  dark-muted: "#A9B5C0"
  dark-border: "#2F3A45"
  slate-dark: "#8499AA"
  brass-dark: "#F2B544"
  on-brass-dark: "#1A1405"
  light-bg: "#EDF2F6"
  light-surface: "#FAFCFD"
  light-surface-2: "#E2E9EF"
  light-text: "#222B33"
  light-muted: "#46525D"
  light-border: "#C5D0DA"
  slate-light: "#4A6072"
  brass-light: "#8B4513"
  on-brass-light: "#FFFFFF"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4.6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 2vw, 2.75rem)"
    fontWeight: 750
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "8px"
  md: "10px"
  lg: "14px"
  device: "clamp(12px, 2vw, 24px)"
spacing:
  gutter-mobile: "20px"
  gutter-desktop: "32px"
  touch: "48px"
components:
  button-brass:
    backgroundColor: "{colors.brass-dark}"
    textColor: "{colors.on-brass-dark}"
    rounded: "{rounded.md}"
    height: "48px"
    padding: "8px 24px"
  key-tile:
    backgroundColor: "{colors.dark-surface-2}"
    textColor: "{colors.dark-text}"
    rounded: "8px"
  play-block:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.brass-dark}"
    rounded: "{rounded.lg}"
---

# Design System: Chorder site

## Overview

**Creative North Star: "A calm lead sheet on a music stand"**

The page is what a player wants before a gig: the key, the capo and the next song, readable at arm's length. Slate surfaces stay quiet so the real app screenshots and one brass accent carry the page. Sections are flat, separated by hairlines, with no card grids, gradients, glass or decorative icons. It shares the app's identity (slate, brass, Atkinson Hyperlegible) without copying its UI: this is a document, not a toolbar.

**Key Characteristics:**
- Brass marks the one thing that matters in a view: the primary action, the key, the selected item.
- Real screenshots in a tablet frame are the imagery. Theme-aware: they follow the site's light/dark switch.
- One typeface, hierarchy through weight and size only.
- Content-first rhythm: a ruled list or a two-column chapter, never a grid of identical cards.

## Colors

Restrained, slate-tinted neutrals with one saturated accent. Both themes are first-class and chosen by `data-theme` on `<html>` (stored in `localStorage` as `chorder-theme`, falling back to the system preference).

- **Slate neutrals** (`bg`, `surface`, `surface-2`, `border`) tint every neutral toward blue-grey. No pure black or white.
- **Brass** is `#F2B544` on dark and `#8B4513` on light, chosen for contrast on each background rather than being one hue. Use it for fills, tile text, focus rings and link underlines.
- **Slate** (`#8499AA` / `#4A6072`) is the secondary accent for small supporting marks.
- Variables hold space-separated RGB channels and are consumed as `rgb(var(--x) / alpha)`.

**The One Brass Rule.** If two things on a screen are brass, one of them is wrong.

## Typography

**Family:** Atkinson Hyperlegible Next Variable, self-hosted through `@fontsource-variable/atkinson-hyperlegible-next`. Same family as the app. No monospace and no second typeface.

Display is 800 weight with tight tracking; section headlines are 750; body is 17px at 1.65 with a 38rem measure. Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`.

## Layout

Container max 75rem with 20px/32px gutters. Chapters are two columns (copy and a framed screenshot) that stack on mobile and alternate sides by chapter. Grid tracks use `minmax(0, 1fr)` so large images cannot widen the page. Vertical rhythm is `clamp(3.5rem, 2rem + 4vw, 5.5rem)` between bands; bands are separated by a 1px border and alternate `bg` and `surface`.

## Elevation & Depth

Flat. The only shadow is the soft one under the tablet frame (`.device`). Depth elsewhere comes from tonal steps between `bg`, `surface` and `surface-2`.

## Shapes

Small, even radii: 8–10px for controls and tiles, 14px for the Play block, a fluid 12–24px on the tablet bezel. Hairline 1px borders; the bare (cropped) screenshot variant uses a 12px bordered frame.

## Components

- **Button (`.btn`)**: 48px minimum height, 700 weight. `btn-brass` is the single primary action ("Get it on Google Play"); `btn-quiet` is outlined; `btn-status` is the non-link fallback when `PLAY_LIVE` is false.
- **Header**: sticky and solid with a hairline bottom border. Mobile menu is a non-modal disclosure panel that closes on Escape.
- **Device (`.device`, `AppShot`)**: bezel, `srcset` of 800 and 1600 webp, light and dark variants swapped by CSS (`.shot-light`, `.shot-dark`), required `alt`. These classes live outside `@layer` so Tailwind does not purge them.
- **Key flow tiles (`.key-tile`)**: HTML, `aria-hidden`, illustrating per-song keys in a setlist.
- **Play block (`.playblock`)**: HTML recreation of the app's "Play G · Capo 3" hero, `aria-hidden`.
- **Spec list (`.spec`)**: two-column definition rows with hairlines, used for "Also in the app".
- **FAQ**: native `<details name="faq">` for exclusive accordion without JS.
- **Motion**: one entry animation (`rise`), only under `prefers-reduced-motion: no-preference`.

## Do's and Don'ts

**Do**
- Describe only what the app does, verified against the app repo.
- Keep touch targets at 48px and focus rings at 3px brass.
- Show real screenshots with specific alt text.

**Don't**
- Add gradient text, glass, side-stripe borders, identical card grids or hero metrics.
- Introduce a second typeface or a monospace "technical" accent.
- Put the brass accent on more than one thing per view.
- Add JS for something HTML or CSS can do.
