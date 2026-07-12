# Design

## Theme

"After-dark parlour". A deep wine-black room in which cream playing cards are dealt. Dark theme is forced by context (played at night, often in low light, screens dimmed); the physical scene is a card table in a lamp-lit room, not a neon arcade. The 2025 cyan-on-dark neon look is retired.

## Colour

OKLCH tokens on `:root`. Strategy: committed. The wine-black surface IS the brand's room; pink is spent on action and mischief only.

- `--bg` oklch(0.16 0.045 355): wine-black body
- `--surface` oklch(0.21 0.05 355) / `--surface-raised` oklch(0.26 0.05 355)
- `--ink` oklch(0.95 0.02 85): warm cream text
- `--muted` oklch(0.74 0.04 355): dusty rose secondary text
- `--pink` oklch(0.66 0.24 0): brand hot pink (actions, mischief)
- `--pink-deep` oklch(0.55 0.22 0): button fills (cream text passes AA on this, not on hot pink)
- `--gold` oklch(0.8 0.11 85): champagne details (timer ring, new-card sticker, tame accents)
- Question card face: `--card-face` oklch(0.94 0.02 85) cream paper with `--card-ink` oklch(0.25 0.05 350) plum ink. The card is a paper object in the dark room; this is not a cream page background.
- Forfeit card face: `--forfeit-face` oklch(0.45 0.19 0) deep raspberry with cream text.

## Typography

- Display: **Shrikhand** (Google Fonts). Matches the bubbly sticker wordmark. Spent ONLY on game moments: screen titles, turn indicator, "Pass to" interstitial, forfeit title, timer numeral. Never on buttons, labels, body or data.
- UI/body: **Karla** variable (Google Fonts, 300-800). Buttons 700, body 400/500, card text 500 at 1.2rem.
- Rejected: Yeseva One (reads vintage-editorial, not party), Bricolage Grotesque (indie-tool default by 2026), Satoshi (the new Inter), Inter (banned cliche, was the previous face).

## Iconography

Hand-rolled inline SVG line icons, 1.8px stroke, cream with one pink accent shape per icon. The suit mark is a heart with little devil horns (pulled from the logo's devil face); it appears as the card's corner pips and in mode icons. No emoji as icons, no icon libraries.

## Components

- **Card**: cream face, 20px radius, subtle paper grain, horned-heart pips top-left/bottom-right (rotated), dealt onto a visible two-card stack (card backs: wine, double pink border, logo watermark). Forfeit variant: raspberry face, Shrikhand title, same geometry.
- **Card back**: wine ground, double pink keyline inset, centred logo watermark. Used by the deck stack and the group-mode interstitial.
- **Buttons**: Karla 700, sentence case, 12px radius, 52px min height. Primary = pink-deep fill; forfeit = raspberry fill; ghost = cream keyline. No uppercase tracking.
- **New-card sticker**: small gold foil pill, rotated -6deg, top-right of the card. Marks latest-batch content.
- **Timer**: SVG ring countdown (gold, turns pink under 10s), Shrikhand numeral, vibration on finish where supported.

## Motion

One signature: the deal. Cards enter with a 420ms ease-out-expo drop-and-settle (slight rotation); forfeits slap down harder with a 500ms overshoot settle. Everything else is 150-200ms state feedback. Full `prefers-reduced-motion` alternative: crossfade only. No scroll reveals, no particle canvas.

## Atmosphere

CSS-only: radial lamp-light vignette on the body (warm centre-top, deeper wine at edges) plus a fixed 4% SVG-noise grain overlay. No JavaScript background effects.
