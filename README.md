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

Every item carries `text`, an `id`, and optionally `type`:

- **`id`** (string, required): a stable identifier. The picker tracks which cards
  a player has seen **by id, not by array position**, so cards can be added,
  edited or deleted freely without disturbing anyone's in-progress game. Generate
  it as `<deck-initials><q|f>-<first 8 chars of the sha1 of the text>`, e.g.
  `coq-1a2b3c4d`. Change the text, change the id.
- **`batch`** (integer): the content drop it arrived in. Legacy items have no
  `batch` field and count as batch 1. The current newest batch is **3**.
  **The rule: whenever you add new content, give every new item the next batch
  number (4, then 5, and so on).**

  **Who gets newest-first.** Batch priority is not on for everybody. A player who
  has barely played gets the whole deck shuffled flat, because the newest cards
  are usually the ones that reach furthest, so leading with them makes the game's
  opening hand its vaguest. Once someone has drawn either 40% of a deck or 75
  cards from it, whichever comes first, the picker switches to drawing from the
  newest batch first. That threshold is roughly three or four proper sessions.
  Nothing in the UI labels a card as new; it just comes up sooner.

  Lifetime draws are recorded per deck in `localStorage` under `knt_seen_v1`,
  separately from the in-progress game, so it survives finishing a game and
  starting another. See `isRegularPlayer` in `src/js/main.js`.
- **`intensity`** (`"tame"` | `"spicy"` | `"wild"`): the heat level of the card.
  Tagged cards only appear at that level or above (tame < spicy < wild).
  Untagged legacy items appear at every intensity. Tag all new content.

## The bar for new cards

This game is deliberately filthier than anything sold on a high street. That is
the product. The failure mode to avoid is a card that lets a player be witty,
romantic or embarrassed while staying erotically unexposed.

**The compulsory erotic payload test.** It must be impossible to complete a card
honestly without naming or performing at least one of: a sexual act, a kink, a
turn-on, a fantasy, a boundary, a role, a body preference, sexual history,
explicit desire involving someone present, or erotic physical interaction. If the
card could be played unchanged at a work social, it does not belong here.

The tiers are all adult. **tame** means no contact and no undressing, but the
answer still has to disclose something explicitly sexual; it never means "generic
party game". **spicy** adds contact, undressing, positioning or a concrete
proposition aimed at another player. **wild** means surrender, performance,
sustained control, public selection, or a card that changes how the night ends.
A talk-only card is at most spicy however filthy its subject: contact,
performance or surrender is what lifts a tier.

Good cards are specific (they name the act, the kit, the body part, the count),
implicate someone present, hand an important variable to another player, and
leave residue that persists past the turn. A twenty-second performance that ends
cleanly and resets the room is a weak card.

## Safety line for forfeits

These make the game better rather than tamer, and are not negotiable:

- Everything stays between the consenting adults actually playing. Never involve
  someone who is not in the game.
- Kinks with real injury risk (anything restricting airway or breathing) may be
  discussed in a question but never instructed as a forfeit.
- A forfeit acting on another player's body needs an explicit willingness clause,
  and the binding instruction falls on the person whose body it is, never on the
  person being asked to touch.
- Physical counts are capped at a fixed number, never scaled by how many people
  are in the room.
- No blank cheques: every transfer of control needs a stated ceiling and a stated
  end point.
- Never gate a player's movement, toilet access or drink, and never make
  declining a card cost the person who declined.

## House style

British English, no em or en dashes, straight apostrophes. Cheeky, direct and
confident; never coy or clinical. Forfeits are imperatives. A question card may
be phrased as an imperative ending in a full stop ("Name the order you'd obey
instantly.") where that reads better than forcing a question mark; both forms are
correct.

Append new items to the END of each JSON array.
