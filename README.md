# Kink and Tell

The interactive card game by Rysta, live at [game.rysta.co.uk](https://game.rysta.co.uk).

## How it deploys

Push to `main` and GitHub Actions does the rest ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):

1. `npm ci && npm run build` (Vite, output in `dist/`)
2. Publishes `dist/` to the `gh-pages` branch (GitHub Pages serves it on the custom domain `game.rysta.co.uk`)
3. Deploys the PartyKit multiplayer server (`party/server.js`) to `kink-and-tell.reyewon.partykit.dev` using the `PARTYKIT_CONFIG` repo secret

## Where the content lives

All questions and forfeits are JSON files in `public/data/` (fetched at runtime, so
content updates do not need a JS rebuild logic change):

- `couple-questions.json` / `couple-forfeits.json`
- `friends-questions.json` / `friends-forfeits.json`
- `group-questions.json` / `group-forfeits.json`

Question `type` values: `neutral`, `D_asks_S`, `S_asks_D` (couple role filtering),
`target`, `group` (group mode behaviour).

## Content rules (IMPORTANT when adding new cards)

Every item supports two optional fields on top of `text`/`type`:

- **`batch`** (integer): the content drop it arrived in. Legacy items have no
  `batch` field and count as batch 1. The current newest batch is **2**.
  **The rule: whenever you add new content, give every new item the next batch
  number (3, then 4, and so on).** The picker always draws randomly from the
  newest unused batch first, so returning players see fresh cards straight away.
  Cards from the newest batch get a "✨ New" pill in the UI automatically.
- **`intensity`** (`"tame"` | `"spicy"` | `"wild"`): the heat level of the card.
  Tagged cards only appear at that level or above (tame < spicy < wild).
  Untagged legacy items appear at every intensity. Tag all new content.

Append new items to the END of each JSON array. Never reorder or delete existing
entries mid-array: used-card tracking stores array indices in players' saved
sessions.

House style for card text: British English, no em or en dashes, straight
apostrophes, cheeky but consent-forward.
