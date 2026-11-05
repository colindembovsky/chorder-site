<!-- impeccable:product-schema 1 -->
# Product

> Written from the coordinator brief and the Chorder app's own PRODUCT.md / DESIGN.md. No stakeholder interview took place; items marked *(inferred)* are assumptions to confirm.

## Platform

Web. A static marketing site (Astro, GitHub Pages) for an Android tablet app. Desktop and phones both matter: musicians often arrive from a phone link and then read on a laptop.

## Users

- Worship leaders, band leaders and working musicians who read charts from a tablet on a music stand. *(inferred from the app's PRODUCT.md)*
- They arrive curious, often from a recommendation. They want to know in seconds what the app does, what it looks like, and whether they can try it.
- They may not be technical. They are practical, time-poor, and sceptical of "productivity" apps that add steps.

## Product Purpose

Chorder turns imported song charts into editable, key-aware charts and setlists, and plays them live with the key and capo to play shown first. The site's job is to get a visitor to join the beta (the Play listing is not live yet) by showing the real app and describing exactly what it does.

## Positioning

A calm, capable, stage-ready tool. Not a generic "songbook" app and not a card-heavy dashboard. It is distinguished by being key-first: the thing you need before the count-in is the biggest thing on screen.

## Operating Context

- Beta sign-up is an embedded Tally form; `PLAY_LIVE` is false until the Play listing exists.
- The app's v1.1.0 redesign (slate chrome, brass accent, Atkinson Hyperlegible) is the identity the site should echo without copying screens one for one.
- Hosted at chorder.thekingdomofcode.com via GitHub Pages.

## Capabilities and Constraints

- Only describe features present in the app repository. Live chord detection stays labelled experimental.
- Do not claim a TalkBack-verified experience; say "built with screen-reader semantics".
- Do not announce Play availability.
- Fast, static, no tracking. Fonts self-hosted. Light and dark themes both supported.

## Brand Commitments

- Slate chrome; brass is reserved for the one thing that matters (the key, the selected item, the primary action).
- Atkinson Hyperlegible Next for text; Atkinson Hyperlegible Mono only where chords sit over lyrics.
- Plain, specific language. No superlatives, no fluff.

## Evidence on Hand

- Fresh 2560x1600 screenshots of the shipped UI in light and dark.
- The app's README, PRODUCT.md and DESIGN.md.
- The previous site's content and links (privacy page, support email, beta form).

## Product Principles

1. Show the real app. Screenshots carry the page.
2. Key first. The key and capo to play are the most important facts, on screen and in copy.
3. Calm over clever. Flat surfaces, hairline dividers, restrained colour.
4. Say less, exactly. Every sentence names something the app does.

## Accessibility & Inclusion

- WCAG AA contrast in both themes; visible focus; reduced-motion respected; semantic landmarks and headings; meaningful alt text for every screenshot.
- Atkinson Hyperlegible chosen for legibility, matching the app.
