/**
 * Kink and Tell - Main Game Logic
 * Vanilla JS with ES modules. No framework.
 */

import { MultiplayerClient } from './multiplayer.js';

// ============================================================
// Data loading
// ============================================================
const DATA = {};

async function loadData() {
  const files = [
    'couple-questions', 'couple-forfeits',
    'friends-questions', 'friends-forfeits',
    'group-questions', 'group-forfeits',
  ];
  await Promise.all(files.map(async name => {
    const res = await fetch(`/data/${name}.json`);
    const items = await res.json();
    // Cards are tracked by stable id, not array index, so the decks can be
    // edited without disturbing anyone's in-progress game. Backfill any card
    // that shipped without one.
    items.forEach((item, i) => { if (!item.id) item.id = `${name}-${i}`; });
    DATA[name.replace(/-/g, '_')] = items;
  }));
}

// ============================================================
// Game State
// ============================================================
const state = {
  mode: null,             // 'couple' | 'friends' | 'group'
  players: [],            // [{ name, role }]
  intensity: 'spicy',     // 'tame' | 'spicy' | 'wild'
  currentPlayerIndex: 0,
  currentTargetIndex: null,
  usedQuestions: [],
  usedForfeits: [],
  isRemote: false,
  isHost: false,
  roomCode: null,
  currentCard: null,
  turnLabel: '',
};

// Escape user-supplied strings (player names etc.) before injecting into HTML
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

// Small inline icons for player chips (crown = host)
const ICON_CROWN = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><use href="#icon-crown" stroke="currentColor"/></svg>';
const ICON_PERSON = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><use href="#icon-person" stroke="currentColor"/></svg>';

// localStorage persistence keys
const LS = {
  SESSION: 'knt_session_v2',
  SEEN: 'knt_seen_v1',
};

// ============================================================
// Lifetime play history
// ============================================================
// A record of every card this device has ever drawn, per deck, kept across
// games. It exists to tell a first-time player from a regular: a newcomer
// should get the whole deck shuffled, because "new" means nothing to them and
// the newest cards are the ones that reach furthest. Only once someone has
// played enough to have seen a good slice of the deck does surfacing fresh
// content early become the point.
let seen = {};

function loadSeen() {
  try {
    const s = JSON.parse(localStorage.getItem(LS.SEEN));
    seen = (s && typeof s === 'object') ? s : {};
  } catch (_) {
    seen = {};
  }
}

function recordSeen(deck, id) {
  if (!deck || !id) return;
  const list = seen[deck] || (seen[deck] = []);
  if (list.includes(id)) return;
  list.push(id);
  if (list.length > 600) list.splice(0, list.length - 600);
  try { localStorage.setItem(LS.SEEN, JSON.stringify(seen)); } catch (_) {}
}

// Regular player: has drawn either 40% of this deck, or 75 cards from it,
// whichever comes first. 75 is roughly three or four proper sessions, and the
// percentage keeps the bar sensible on the smaller decks.
function isRegularPlayer(deck, deckSize) {
  const n = (seen[deck] || []).length;
  return n >= Math.min(75, Math.round(deckSize * 0.4));
}

function saveSession() {
  try {
    localStorage.setItem(LS.SESSION, JSON.stringify({
      mode: state.mode,
      players: state.players,
      intensity: state.intensity,
      currentPlayerIndex: state.currentPlayerIndex,
      currentTargetIndex: state.currentTargetIndex,
      usedQuestions: state.usedQuestions,
      usedForfeits: state.usedForfeits,
      currentCard: state.currentCard,
      turnLabel: state.turnLabel,
    }));
  } catch (_) {}
}

function loadSession() {
  try {
    const s = localStorage.getItem(LS.SESSION);
    if (!s) return false;
    const saved = JSON.parse(s);
    // Only restore if there's meaningful progress
    if (!saved.mode || !saved.players?.length) return false;
    Object.assign(state, saved);
    // Sessions saved before cards had stable ids stored array indices. Those
    // numbers point at different cards once the decks change, so drop them and
    // keep the rest of the game. Worst case the player sees one repeat.
    if (state.usedQuestions.some(v => typeof v !== 'string')) state.usedQuestions = [];
    if (state.usedForfeits.some(v => typeof v !== 'string')) state.usedForfeits = [];
    return true;
  } catch (_) {
    return false;
  }
}

function clearSession() {
  try { localStorage.removeItem(LS.SESSION); } catch (_) {}
}

// ============================================================
// Question/Forfeit Picking Logic
// ============================================================
// Items may carry an optional `intensity` tag ('tame'|'spicy'|'wild').
// Untagged (legacy) items are eligible at every intensity. Tagged items
// only appear at their level or above (tame < spicy < wild).
const INTENSITY_RANK = { tame: 1, spicy: 2, wild: 3 };

function intensityAllows(item) {
  if (!item || typeof item !== 'object' || !item.intensity) return true;
  return (INTENSITY_RANK[item.intensity] || 2) <= (INTENSITY_RANK[state.intensity] || 3);
}

function pickRandom(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}

// Items may carry an optional `batch` number (legacy items = batch 1).
// For a regular player the newest batch is drawn from first, so returning
// players notice fresh content. For everyone else the whole deck is shuffled
// flat: see isRegularPlayer above for why.
function pickFrom(pool, deck, deckSize) {
  if (!pool.length) return undefined;
  if (!isRegularPlayer(deck, deckSize)) return pickRandom(pool);
  const maxBatch = Math.max(...pool.map(item => item.batch || 1));
  return pickRandom(pool.filter(item => (item.batch || 1) === maxBatch));
}

// The "New" sticker marks latest-batch content. It only means something to
// someone who has seen the older cards, so it rides on the same check.
function isNewItem(item, source, deck) {
  if (!item || typeof item !== 'object' || !item.batch) return false;
  if (!isRegularPlayer(deck, source.length)) return false;
  const maxBatch = Math.max(...source.map(i => i.batch || 1));
  return maxBatch > 1 && item.batch === maxBatch;
}

function questionSource() {
  return state.mode === 'couple' ? DATA.couple_questions :
         state.mode === 'group' ? DATA.group_questions : DATA.friends_questions;
}

function questionDeck() { return `${state.mode}_questions`; }
function forfeitDeck() { return `${state.mode}_forfeits`; }

function getNextQuestion() {
  const source = questionSource();
  let eligible = () => true;

  if (state.mode === 'couple') {
    const askerRole = state.players[state.currentPlayerIndex].role;
    const answererRole = state.players[(state.currentPlayerIndex + 1) % 2].role;
    const allowedTypes = ['neutral'];
    if (askerRole === 'Dom' && (answererRole === 'sub' || answererRole === 'switch')) allowedTypes.push('D_asks_S');
    else if ((askerRole === 'sub' || askerRole === 'switch') && answererRole === 'Dom') allowedTypes.push('S_asks_D');
    else if (askerRole === 'switch' && answererRole === 'sub') allowedTypes.push('D_asks_S');
    else if (askerRole === 'sub' && answererRole === 'switch') allowedTypes.push('S_asks_D');
    eligible = q => allowedTypes.includes(q.type);
  }

  const unused = q => !state.usedQuestions.includes(q.id);

  let pool = source.filter(q => unused(q) && eligible(q) && intensityAllows(q));
  // Fallback: relax the intensity filter rather than dead-ending
  if (!pool.length) {
    pool = source.filter(q => unused(q) && eligible(q));
  }
  // Fallback (couple): relax the role filter to neutrals
  if (!pool.length && state.mode === 'couple') {
    pool = source.filter(q => unused(q) && q.type === 'neutral');
  }
  // Fallback: reset the cycle
  if (!pool.length) {
    state.usedQuestions = [];
    pool = source.filter(q => eligible(q) && intensityAllows(q));
    if (!pool.length) pool = source.filter(q => eligible(q));
  }

  const picked = pickFrom(pool, questionDeck(), source.length);
  if (!picked) return { text: 'No questions available. Reset and try again!', type: 'neutral' };

  if (!state.usedQuestions.includes(picked.id)) state.usedQuestions.push(picked.id);
  recordSeen(questionDeck(), picked.id);

  return picked;
}

function getNextForfeit() {
  const bank = state.mode === 'couple' ? DATA.couple_forfeits :
               state.mode === 'group' ? DATA.group_forfeits : DATA.friends_forfeits;
  const unused = f => !state.usedForfeits.includes(f.id);

  let pool = bank.filter(f => unused(f) && intensityAllows(f));
  if (!pool.length) pool = bank.filter(unused);
  if (!pool.length) {
    state.usedForfeits = [];
    pool = bank.filter(f => intensityAllows(f));
    if (!pool.length) pool = [...bank];
  }

  const picked = pickFrom(pool, forfeitDeck(), bank.length);
  if (picked && !state.usedForfeits.includes(picked.id)) {
    state.usedForfeits.push(picked.id);
    recordSeen(forfeitDeck(), picked.id);
  }

  return picked;
}

function buildTurnLabel(overrideTargetIdx) {
  const asker = state.players[state.currentPlayerIndex];
  if (state.mode === 'group') {
    const tIdx = overrideTargetIdx ?? state.currentTargetIndex;
    if (tIdx !== null && tIdx !== undefined) {
      return `${asker.name} asks ${state.players[tIdx].name}:`;
    }
    return `${asker.name} asks the group:`;
  }
  const answerer = state.players[(state.currentPlayerIndex + 1) % 2];
  return `${asker.name} asks ${answerer.name}:`;
}

// ============================================================
// DOM references
// ============================================================
const $ = id => document.getElementById(id);
const screens = {
  welcome: $('screen-welcome'),
  join: $('screen-join'),
  setupTwo: $('screen-setup-two'),
  setupGroup: $('screen-setup-group'),
  roomLobby: $('screen-room-lobby'),
  guestLobby: $('screen-guest-lobby'),
  interstitial: $('screen-interstitial'),
  game: $('screen-game'),
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  screens[name].scrollTop = 0;
}

// ============================================================
// Multiplayer
// ============================================================
let mp = null;

// ============================================================
// Timer (ring countdown)
// ============================================================
const TIMER_TOTAL = 60;
const RING_CIRCUMFERENCE = 169.65; // 2 * PI * r27, matches the SVG
let timerInterval = null;
let timerSeconds = TIMER_TOTAL;

function updateTimerRing() {
  const ring = $('timer-ring-progress');
  ring.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - timerSeconds / TIMER_TOTAL);
  ring.classList.toggle('warning', timerSeconds <= 10);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = TIMER_TOTAL;
  $('timer-display').textContent = String(TIMER_TOTAL);
  $('timer-display').classList.remove('warning');
  updateTimerRing();
  $('btn-timer').textContent = 'Start timer';
}

function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    $('btn-timer').textContent = 'Start timer';
    return;
  }
  timerSeconds = TIMER_TOTAL;
  $('timer-display').textContent = String(TIMER_TOTAL);
  $('timer-display').classList.remove('warning');
  updateTimerRing();
  $('btn-timer').textContent = 'Stop';

  timerInterval = setInterval(() => {
    timerSeconds--;
    $('timer-display').textContent = String(Math.max(timerSeconds, 0));
    updateTimerRing();
    if (timerSeconds <= 10) $('timer-display').classList.add('warning');
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      $('timer-display').textContent = 'Up!';
      $('btn-timer').textContent = 'Start timer';
      if (navigator.vibrate) navigator.vibrate([160, 90, 160]);
    }
  }, 1000);
}

// ============================================================
// Game UI rendering
// ============================================================
function dealAnimation(el, className) {
  el.classList.remove('deal', 'slap');
  void el.offsetWidth; // restart the animation
  el.classList.add(className);
}

function updateRoundChip() {
  const chip = $('round-chip');
  const n = state.usedQuestions.length;
  if (n > 0) {
    chip.textContent = `Card ${n}`;
    chip.classList.remove('hidden');
  } else {
    chip.classList.add('hidden');
  }
}

function renderCard(card) {
  const qEl = $('question-card');
  const fEl = $('forfeit-card');
  const timerZone = $('timer-zone');
  resetTimer();

  const badge = card.isNew ? '<span class="new-badge">New</span>' : '';

  if (card.type === 'forfeit') {
    qEl.classList.add('hidden');
    fEl.classList.remove('hidden');
    fEl.innerHTML = `${badge}<span class="forfeit-title">${esc(card.performer)}'s forfeit</span><span class="forfeit-text">${esc(card.text)}</span>`;
    timerZone.classList.remove('hidden');
    dealAnimation(fEl, 'slap');
  } else {
    fEl.classList.add('hidden');
    timerZone.classList.add('hidden');
    qEl.classList.remove('hidden');
    qEl.innerHTML = `${badge}${esc(card.text)}`;
    dealAnimation(qEl, 'deal');
  }
  updateRoundChip();
}

function renderTurnIndicator(label) {
  $('turn-indicator').textContent = label;
}

function setHostView(isHost) {
  // Controls are always shown initially; updateTurnView handles remote-mode switching
  $('host-controls').classList.toggle('hidden', !isHost);
}

// ============================================================
// Remote turn view — show asker their question; answerer waits
// ============================================================
function updateTurnView(currentPlayerIndex, players) {
  if (!state.isRemote) return; // Local mode: always show everything

  // Host = players[0], guest = players[1] (2-player couple/friends)
  const myIndex = state.isHost ? 0 : 1;
  const isMyTurn = currentPlayerIndex === myIndex;
  const askerName = players?.[currentPlayerIndex]?.name || 'Partner';

  const awaitingDiv = $('awaiting-turn');
  const cardContainer = document.querySelector('.card-container');
  const timerZone = $('timer-zone');
  const hostControls = $('host-controls');

  if (isMyTurn) {
    // My turn: I'm asking — show card and controls
    awaitingDiv.classList.add('hidden');
    cardContainer.classList.remove('hidden');
    hostControls.classList.remove('hidden');
  } else {
    // Their turn: I'm answering — hide card/controls, show waiting message
    awaitingDiv.classList.remove('hidden');
    cardContainer.classList.add('hidden');
    timerZone.classList.add('hidden');
    hostControls.classList.add('hidden');
    $('awaiting-message').textContent = `It's ${askerName}'s turn`;
  }
}

function showGameScreen(isHost = true) {
  showScreen('game');
  setHostView(isHost);

  if (state.isRemote && state.roomCode) {
    $('remote-badge').classList.remove('hidden');
    $('remote-room-label').textContent = `Room ${state.roomCode}`;
  } else {
    $('remote-badge').classList.add('hidden');
  }
}

// ============================================================
// Core game actions
// ============================================================
function drawQuestionCard() {
  const q = getNextQuestion();
  return { type: 'question', text: q.text ?? q, isNew: isNewItem(q, questionSource(), questionDeck()) };
}

function doNextQuestion() {
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;

  if (state.mode === 'group') {
    // Interstitial for group mode
    $('interstitial-message').textContent = `Pass to ${state.players[state.currentPlayerIndex].name}`;
    showScreen('interstitial');
    return;
  }

  const card = drawQuestionCard();
  const label = buildTurnLabel();
  state.currentCard = card;
  state.turnLabel = label;
  saveSession();

  if (state.isRemote && mp && state.isHost) {
    mp.send({ type: 'NEXT_QUESTION', card, targetIndex: state.currentTargetIndex });
  }

  renderCard(card);
  renderTurnIndicator(label);
  updateTurnView(state.currentPlayerIndex, state.players);
}

function doGroupReveal() {
  const q = getNextQuestion();

  // Clear any target from the previous round, then pick one if needed
  state.currentTargetIndex = null;
  if (q.type === 'target') {
    let t;
    do { t = Math.floor(Math.random() * state.players.length); }
    while (t === state.currentPlayerIndex && state.players.length > 1);
    state.currentTargetIndex = t;
  }

  const card = { type: 'question', text: q.text, isNew: isNewItem(q, DATA.group_questions, questionDeck()) };
  const label = buildTurnLabel();
  state.currentCard = card;
  state.turnLabel = label;
  saveSession();

  renderCard(card);
  renderTurnIndicator(label);
}

function doForfeit() {
  const f = getNextForfeit();
  let performer;
  if (state.mode === 'group') {
    performer = state.currentTargetIndex !== null
      ? state.players[state.currentTargetIndex].name
      : state.players[state.currentPlayerIndex].name;
  } else {
    performer = state.players[(state.currentPlayerIndex + 1) % 2].name;
  }

  const bank = state.mode === 'couple' ? DATA.couple_forfeits :
               state.mode === 'group' ? DATA.group_forfeits : DATA.friends_forfeits;
  const card = { type: 'forfeit', text: f.text ?? f, performer, isNew: isNewItem(f, bank, forfeitDeck()) };
  state.currentCard = card;
  saveSession();

  if (state.isRemote && mp && state.isHost) {
    mp.send({ type: 'TAKE_FORFEIT', card });
  }

  renderCard(card);
}

function doSkip() {
  // Skip without forfeit - just advance the turn silently
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;

  if (state.mode === 'group') {
    $('interstitial-message').textContent = `Pass to ${state.players[state.currentPlayerIndex].name}`;
    showScreen('interstitial');
    return;
  }

  const card = drawQuestionCard();
  const label = buildTurnLabel();
  state.currentCard = card;
  state.turnLabel = label;
  saveSession();

  if (state.isRemote && mp && state.isHost) {
    mp.send({ type: 'SKIP_QUESTION', card });
  }

  renderCard(card);
  renderTurnIndicator(label);
  updateTurnView(state.currentPlayerIndex, state.players);
}

// ============================================================
// Room code helpers
// ============================================================
function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// ============================================================
// Welcome screen
// ============================================================
$('btn-mode-couple').addEventListener('click', () => {
  state.mode = 'couple';
  $('setup-two-title').textContent = 'Enter names and select roles!';
  $('p1-role-row').style.display = '';
  $('p2-role-row').style.display = '';
  document.getElementById('enable-remote').checked = false;
  showScreen('setupTwo');
});

$('btn-mode-friends').addEventListener('click', () => {
  state.mode = 'friends';
  $('setup-two-title').textContent = 'Enter player names!';
  $('p1-role-row').style.display = 'none';
  $('p2-role-row').style.display = 'none';
  document.getElementById('enable-remote').checked = false;
  showScreen('setupTwo');
});

$('btn-mode-group').addEventListener('click', () => {
  state.mode = 'group';
  state.players = [];
  renderPlayerList([]);
  showScreen('setupGroup');
});

$('btn-join-room').addEventListener('click', () => {
  showScreen('join');
});

// ============================================================
// Join screen
// ============================================================
$('btn-join-back').addEventListener('click', () => showScreen('welcome'));

$('join-code-input').addEventListener('input', e => {
  e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
});

$('btn-join-submit').addEventListener('click', async () => {
  const code = $('join-code-input').value.trim();
  const name = $('join-name-input').value.trim() || 'Guest';
  if (code.length < 4) { alert('Please enter a valid room code.'); return; }

  state.roomCode = code;
  state.isRemote = true;
  state.isHost = false;

  mp = new MultiplayerClient(code, name);

  mp.on('STATE_SYNC', (remoteState) => {
    if (remoteState.phase === 'lobby') {
      // Still waiting — update the player list in the guest lobby
      const pending = remoteState.pendingPlayers || [];
      $('guest-players-list').innerHTML = pending.map(p =>
        `<span class="room-player-chip ${p.isHost ? 'is-host' : ''}">
          ${p.isHost ? ICON_CROWN : ICON_PERSON} ${esc(p.name)}
        </span>`
      ).join('');
      $('guest-lobby-status').textContent = pending.length
        ? `${pending.length} player${pending.length !== 1 ? 's' : ''} in the room — waiting for host to start...`
        : 'Connecting...';
    } else if (remoteState.phase === 'game') {
      // Sync local state from server
      state.mode = remoteState.mode;
      state.players = remoteState.players;
      state.intensity = remoteState.intensity;
      // Only transition to game screen if we're not already on it
      if (!screens.game.classList.contains('active')) {
        showGameScreen(false);
      }
      // Update turn view: show card+controls if it's my turn, waiting message if not
      updateTurnView(remoteState.currentPlayerIndex, remoteState.players);
      // Only render card/indicator when it's my turn (asker sees the question)
      if (remoteState.currentCard) {
        const myIndex = state.isHost ? 0 : 1;
        if (remoteState.currentPlayerIndex === myIndex) {
          renderCard(remoteState.currentCard);
          renderTurnIndicator(buildTurnLabelFromRemote(remoteState));
        }
      }
    }
  });

  mp.on('HOST_CHANGED', () => {
    // If we become the new host, enable controls
    state.isHost = true;
    setHostView(true);
  });

  await mp.connect();
  // Register as a guest player in the lobby (NOT host init)
  mp.send({ type: 'PLAYER_JOIN', name });

  $('join-code-input').value = '';
  // Show guest lobby (waiting screen) — NOT the game screen
  showScreen('guestLobby');
});

function buildTurnLabelFromRemote(remoteState) {
  if (!remoteState.players?.length) return '';
  const asker = remoteState.players[remoteState.currentPlayerIndex];
  if (!asker) return '';
  if (remoteState.mode === 'group') {
    const tIdx = remoteState.currentTargetIndex;
    if (tIdx !== null && tIdx !== undefined) {
      return `${asker.name} asks ${remoteState.players[tIdx]?.name}:`;
    }
    return `${asker.name} asks the group:`;
  }
  const answerer = remoteState.players[(remoteState.currentPlayerIndex + 1) % 2];
  return answerer ? `${asker.name} asks ${answerer.name}:` : '';
}

// ============================================================
// Setup — Couple / Friends
// ============================================================
$('btn-back-two').addEventListener('click', () => showScreen('welcome'));

$('btn-start-two').addEventListener('click', () => {
  const p1 = $('p1-name').value.trim() || 'Player 1';
  const p2 = $('p2-name').value.trim() || 'Player 2';
  const intensity = document.querySelector('input[name="intensity"]:checked')?.value || 'spicy';
  const remote = document.getElementById('enable-remote').checked;

  if (state.mode === 'couple') {
    state.players = [
      { name: p1, role: $('p1-role').value, isHost: true },
      { name: p2, role: $('p2-role').value },
    ];
  } else {
    state.players = [{ name: p1, isHost: true }, { name: p2 }];
  }

  state.intensity = intensity;
  state.currentPlayerIndex = 0;
  state.usedQuestions = [];
  state.usedForfeits = [];
  state.currentTargetIndex = null;

  if (remote) {
    startRemoteSession();
  } else {
    state.isRemote = false;
    state.isHost = true;
    saveSession();
    startLocalGame();
  }
});

// ============================================================
// Setup — Group
// ============================================================
let groupPlayers = [];

function renderPlayerList(players) {
  groupPlayers = players;
  const ul = $('player-list');
  ul.innerHTML = players.map((p, i) => `
    <li>
      <span>${esc(p.name)}</span>
      <button class="remove-player-btn" data-idx="${i}" aria-label="Remove ${esc(p.name)}">×</button>
    </li>
  `).join('');
  ul.querySelectorAll('.remove-player-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      groupPlayers.splice(Number(btn.dataset.idx), 1);
      renderPlayerList(groupPlayers);
    });
  });
}

function addGroupPlayer() {
  const input = $('new-player-name');
  const name = input.value.trim();
  if (!name) return;
  if (groupPlayers.some(p => p.name === name)) { alert('Name already in the list.'); return; }
  groupPlayers.push({ name, isHost: groupPlayers.length === 0 });
  renderPlayerList(groupPlayers);
  input.value = '';
  input.focus();
}

$('btn-add-player').addEventListener('click', addGroupPlayer);
$('new-player-name').addEventListener('keypress', e => { if (e.key === 'Enter') addGroupPlayer(); });

$('btn-back-group').addEventListener('click', () => showScreen('welcome'));

$('btn-start-group').addEventListener('click', () => {
  if (groupPlayers.length < 2) { alert('You need at least 2 players to start.'); return; }
  const intensity = document.querySelector('input[name="group-intensity"]:checked')?.value || 'spicy';
  state.players = [...groupPlayers];
  state.intensity = intensity;
  state.currentPlayerIndex = 0;
  state.usedQuestions = [];
  state.usedForfeits = [];
  state.currentTargetIndex = null;
  state.isRemote = false;
  state.isHost = true;
  saveSession();

  // Group mode: interstitial first
  $('interstitial-message').textContent = `Pass to ${state.players[0].name}`;
  $('interstitial-sub') && ($('interstitial-sub').textContent = "You're asking the first question!");
  showScreen('interstitial');
});

// ============================================================
// Interstitial
// ============================================================
$('btn-ready').addEventListener('click', () => {
  showGameScreen(true);
  doGroupReveal();
});

// ============================================================
// Remote session — host creates room
// ============================================================
async function startRemoteSession() {
  state.roomCode = generateRoomCode();
  state.isRemote = true;
  state.isHost = true;

  const shareUrl = `${location.origin}?room=${state.roomCode}`;
  $('room-code-display').textContent = state.roomCode;
  $('share-link').value = shareUrl;

  showScreen('roomLobby');
  renderRoomPlayers([{ name: state.players[0].name, isHost: true }]);

  // Init multiplayer as host
  mp = new MultiplayerClient(state.roomCode, state.players[0].name);
  mp.on('STATE_SYNC', (remoteState) => {
    if (remoteState.phase === 'game') {
      // Game is live — update turn view based on who's currently asking
      updateTurnView(remoteState.currentPlayerIndex, state.players);
      return;
    }
    // Lobby phase: update player list and start button
    const pending = remoteState.pendingPlayers || [];
    if (pending.length) {
      renderRoomPlayers(pending);
    } else {
      renderRoomPlayers([{ name: state.players[0].name, isHost: true }]);
    }
    const count = pending.length;
    $('btn-start-remote').disabled = count < 2;
    $('btn-start-remote').textContent = count >= 2
      ? `Start Game (${count} players) 🎮`
      : `Waiting for players... (${count} in room)`;
  });

  await mp.connect();
  // Register host in server lobby with their name and role
  mp.send({ type: 'HOST_INIT', name: state.players[0].name, role: state.players[0].role || null });
}

function renderRoomPlayers(players) {
  $('room-players-list').innerHTML = players.map(p =>
    `<span class="room-player-chip ${p.isHost ? 'is-host' : ''}">
      ${p.isHost ? ICON_CROWN : ICON_PERSON} ${esc(p.name)}
    </span>`
  ).join('');
}

$('btn-copy-link').addEventListener('click', () => {
  const link = $('share-link').value;
  navigator.clipboard.writeText(link).then(() => {
    $('btn-copy-link').textContent = 'Copied';
    setTimeout(() => { $('btn-copy-link').textContent = 'Copy'; }, 2000);
  });
});

$('btn-cancel-room').addEventListener('click', () => {
  if (mp) { mp.disconnect(); mp = null; }
  state.isRemote = false;
  state.roomCode = null;
  showScreen('setupTwo');
});

$('btn-start-remote').addEventListener('click', () => {
  if (!mp) return;
  mp.send({
    type: 'GAME_CONFIG',
    mode: state.mode,
    players: state.players,
    intensity: state.intensity,
  });
  startLocalGame();
});

// ============================================================
// Start local game
// ============================================================
function startLocalGame() {
  // Couple/friends only — group mode starts via the interstitial + doGroupReveal
  showGameScreen(true);
  // Show the first question immediately
  const card = drawQuestionCard();
  const label = buildTurnLabel();
  state.currentCard = card;
  state.turnLabel = label;
  renderCard(card);
  renderTurnIndicator(label);
  updateTurnView(state.currentPlayerIndex, state.players);
  saveSession();
}

// ============================================================
// Game screen controls
// ============================================================
$('btn-next').addEventListener('click', () => {
  if (state.mode === 'group') {
    // Group mode: switch player first, then show interstitial
    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    $('interstitial-message').textContent = `Pass to ${state.players[state.currentPlayerIndex].name}`;
    showScreen('interstitial');
  } else {
    doNextQuestion();
  }
});

$('btn-forfeit').addEventListener('click', doForfeit);
$('btn-skip').addEventListener('click', doSkip);
$('btn-timer').addEventListener('click', startTimer);

$('btn-home').addEventListener('click', () => {
  if (window.confirm('End this game and return to the main menu?')) {
    resetGame();
  }
});

function resetGame() {
  clearSession();
  if (mp) { mp.disconnect(); mp = null; }
  Object.assign(state, {
    mode: null, players: [], currentPlayerIndex: 0, currentTargetIndex: null,
    usedQuestions: [], usedForfeits: [], isRemote: false, isHost: false, roomCode: null,
  });
  resetTimer();
  $('question-card').textContent = 'Tap "Next question" to begin!';
  $('question-card').classList.remove('hidden');
  $('forfeit-card').classList.add('hidden');
  $('timer-zone').classList.add('hidden');
  $('round-chip').classList.add('hidden');
  showScreen('welcome');
}

// ============================================================
// Handle ?room=XXXX URL param (direct join via shared link)
// ============================================================
function checkUrlParams() {
  const params = new URLSearchParams(location.search);
  const room = params.get('room');
  if (room) {
    $('join-code-input').value = room.toUpperCase();
    showScreen('join');
  }
}

// ============================================================
// Service Worker registration
// ============================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// ============================================================
// Boot
// ============================================================
(async () => {
  try {
    await loadData();
    loadSeen();
  } catch (err) {
    console.error('Failed to load game data:', err);
    alert('Could not load the question decks. Check your connection and refresh.');
    return;
  }
  checkUrlParams();

  // Resume session if one exists and no URL room param
  const params = new URLSearchParams(location.search);
  if (!params.get('room') && loadSession()) {
    showScreen('game');
    setHostView(true);

    // Restore the card that was on screen; only draw fresh if none was saved
    if (state.currentCard) {
      renderCard(state.currentCard);
      renderTurnIndicator(state.turnLabel || buildTurnLabel());
    } else if (state.mode === 'group') {
      doGroupReveal();
    } else {
      const card = drawQuestionCard();
      const label = buildTurnLabel();
      state.currentCard = card;
      state.turnLabel = label;
      saveSession();
      renderCard(card);
      renderTurnIndicator(label);
    }
  } else if (!params.get('room')) {
    showScreen('welcome');
  }
})();
