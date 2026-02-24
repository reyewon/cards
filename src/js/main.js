/**
 * Kink and Tell - Main Game Logic
 * Vanilla JS with ES modules. No framework.
 */

import { initParticles } from './particles.js';
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
    DATA[name.replace(/-/g, '_')] = await res.json();
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
};

// localStorage persistence keys
const LS = {
  SESSION: 'knt_session_v2',
};

function saveSession() {
  try {
    localStorage.setItem(LS.SESSION, JSON.stringify({
      mode: state.mode,
      players: state.players,
      intensity: state.intensity,
      currentPlayerIndex: state.currentPlayerIndex,
      usedQuestions: state.usedQuestions,
      usedForfeits: state.usedForfeits,
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
function getIntensityFilter(questionObj) {
  const { intensity } = state;
  if (!questionObj || typeof questionObj !== 'object') return true;
  const type = questionObj.type || 'neutral';
  if (intensity === 'tame') return type === 'neutral';
  if (intensity === 'spicy') return type === 'neutral' || type === 'D_asks_S' || type === 'S_asks_D' || type === 'target';
  return true; // wild = all
}

function pickRandom(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}

function getNextQuestion() {
  let pool;

  if (state.mode === 'couple') {
    const askerRole = state.players[state.currentPlayerIndex].role;
    const answererRole = state.players[(state.currentPlayerIndex + 1) % 2].role;
    let allowedTypes = ['neutral'];
    if (askerRole === 'Dom' && (answererRole === 'sub' || answererRole === 'switch')) allowedTypes.push('D_asks_S');
    else if ((askerRole === 'sub' || askerRole === 'switch') && answererRole === 'Dom') allowedTypes.push('S_asks_D');
    else if (askerRole === 'switch' && answererRole === 'sub') allowedTypes.push('D_asks_S');
    else if (askerRole === 'sub' && answererRole === 'switch') allowedTypes.push('S_asks_D');

    pool = DATA.couple_questions.filter((q, i) =>
      !state.usedQuestions.includes(i) && allowedTypes.includes(q.type)
    );
    // Fallback: relax role filter
    if (!pool.length) {
      pool = DATA.couple_questions.filter((q, i) =>
        !state.usedQuestions.includes(i) && q.type === 'neutral'
      );
    }
    // Fallback: reset cycle
    if (!pool.length) {
      state.usedQuestions = [];
      pool = DATA.couple_questions.filter(q => allowedTypes.includes(q.type));
    }

  } else if (state.mode === 'group') {
    const allGroupQ = DATA.group_questions;
    pool = allGroupQ.filter((q, i) =>
      !state.usedQuestions.includes(i) && getIntensityFilter(q)
    );
    if (!pool.length) {
      state.usedQuestions = [];
      pool = allGroupQ.filter(q => getIntensityFilter(q));
    }

  } else {
    // friends
    const allFriendsQ = DATA.friends_questions;
    pool = allFriendsQ.filter((q, i) => !state.usedQuestions.includes(i));
    if (!pool.length) {
      state.usedQuestions = [];
      pool = [...allFriendsQ];
    }
  }

  const picked = pickRandom(pool);
  if (!picked) return { text: 'No questions available. Reset and try again!', type: 'neutral' };

  const source = state.mode === 'couple' ? DATA.couple_questions :
                 state.mode === 'group' ? DATA.group_questions : DATA.friends_questions;
  const idx = source.indexOf(picked);
  if (idx >= 0 && !state.usedQuestions.includes(idx)) state.usedQuestions.push(idx);

  return picked;
}

function getNextForfeit() {
  const bank = state.mode === 'couple' ? DATA.couple_forfeits :
               state.mode === 'group' ? DATA.group_forfeits : DATA.friends_forfeits;

  let pool = bank.filter((_, i) => !state.usedForfeits.includes(i));
  if (!pool.length) { state.usedForfeits = []; pool = [...bank]; }

  const picked = pickRandom(pool);
  const idx = bank.indexOf(picked);
  if (idx >= 0) state.usedForfeits.push(idx);

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
  interstitial: $('screen-interstitial'),
  game: $('screen-game'),
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  screens[name].scrollTop = 0;
}

// ============================================================
// Canvas particles
// ============================================================
initParticles($('bgCanvas'));

// ============================================================
// Multiplayer
// ============================================================
let mp = null;

// ============================================================
// Timer
// ============================================================
let timerInterval = null;
let timerSeconds = 60;

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 60;
  $('timer-display').textContent = '60';
  $('timer-display').classList.remove('warning');
  $('btn-timer').textContent = 'Start Timer ⏱';
}

function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    $('btn-timer').textContent = 'Start Timer ⏱';
    return;
  }
  timerSeconds = 60;
  $('timer-display').textContent = '60';
  $('timer-display').classList.remove('warning');
  $('btn-timer').textContent = 'Stop ⏹';

  timerInterval = setInterval(() => {
    timerSeconds--;
    $('timer-display').textContent = timerSeconds;
    if (timerSeconds <= 10) $('timer-display').classList.add('warning');
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      $('timer-display').textContent = '⏰';
      $('btn-timer').textContent = 'Start Timer ⏱';
    }
  }, 1000);
}

// ============================================================
// Game UI rendering
// ============================================================
function renderCard(card) {
  const qEl = $('question-card');
  const fEl = $('forfeit-card');
  const timerZone = $('timer-zone');
  resetTimer();

  if (card.type === 'forfeit') {
    qEl.classList.add('hidden');
    fEl.classList.remove('hidden');
    fEl.innerHTML = `<span class="forfeit-title">${card.performer}'s Forfeit</span><span class="forfeit-text">${card.text}</span>`;
    timerZone.classList.remove('hidden');
  } else {
    fEl.classList.add('hidden');
    timerZone.classList.add('hidden');
    qEl.classList.remove('hidden');
    qEl.textContent = card.text;
  }
}

function renderTurnIndicator(label) {
  $('turn-indicator').textContent = label;
}

function setHostView(isHost) {
  const hostControls = $('host-controls');
  const guestControls = $('guest-controls');
  if (isHost) {
    hostControls.classList.remove('hidden');
    guestControls.classList.add('hidden');
  } else {
    hostControls.classList.add('hidden');
    guestControls.classList.remove('hidden');
  }
}

function showGameScreen(isHost = true) {
  showScreen('game');
  setHostView(isHost);

  if (state.isRemote && state.roomCode) {
    $('remote-badge').classList.remove('hidden');
    $('remote-room-label').textContent = state.roomCode;
  } else {
    $('remote-badge').classList.add('hidden');
  }
}

// ============================================================
// Core game actions
// ============================================================
function doNextQuestion() {
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;

  if (state.mode === 'group') {
    // Interstitial for group mode
    $('interstitial-message').textContent = `Pass to ${state.players[state.currentPlayerIndex].name}`;
    showScreen('interstitial');
    return;
  }

  const q = getNextQuestion();
  const label = buildTurnLabel();

  if (state.mode === 'group') {
    state.currentTargetIndex = pickGroupTarget();
  }

  saveSession();

  if (state.isRemote && mp && state.isHost) {
    mp.send({ type: 'NEXT_QUESTION', card: { type: 'question', text: q.text ?? q }, targetIndex: state.currentTargetIndex });
  }

  renderCard({ type: 'question', text: q.text ?? q });
  renderTurnIndicator(label);
}

function doGroupReveal() {
  const q = getNextQuestion();
  let targetIdx = null;

  if (q.type === 'target' || q.type === 'group') {
    if (q.type === 'target') {
      let t;
      do { t = Math.floor(Math.random() * state.players.length); }
      while (t === state.currentPlayerIndex && state.players.length > 1);
      targetIdx = t;
      state.currentTargetIndex = t;
    }
  }

  const label = buildTurnLabel(targetIdx);
  saveSession();

  renderCard({ type: 'question', text: q.text });
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

  const card = { type: 'forfeit', text: f.text ?? f, performer };
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

  const q = getNextQuestion();
  const label = buildTurnLabel();
  saveSession();

  if (state.isRemote && mp && state.isHost) {
    mp.send({ type: 'SKIP_QUESTION', card: { type: 'question', text: q.text ?? q } });
  }

  renderCard({ type: 'question', text: q.text ?? q });
  renderTurnIndicator(label);
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
    // Guest: just render whatever the host sends
    if (remoteState.currentCard) {
      renderCard(remoteState.currentCard);
    }
    if (remoteState.players?.length) {
      const turnLabel = buildTurnLabelFromRemote(remoteState);
      renderTurnIndicator(turnLabel);
    }
    if (remoteState.phase === 'game') {
      showGameScreen(false);
      $('host-name-label').textContent = remoteState.players.find(p => p.isHost)?.name || 'Host';
    }
  });

  mp.on('HOST_CHANGED', () => {
    // If we become the new host, enable controls
    if (mp.isHost) {
      state.isHost = true;
      setHostView(true);
    }
  });

  await mp.connect();
  mp.send({ type: 'HOST_INIT' });

  $('join-code-input').value = '';
  showGameScreen(false);
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
      <span>${p.name}</span>
      <button class="remove-player-btn" data-idx="${i}" aria-label="Remove ${p.name}">×</button>
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
    if (remoteState.connectedIds) {
      renderRoomPlayers(remoteState.players || [{ name: state.players[0].name, isHost: true }]);
      const otherCount = remoteState.connectedIds.length;
      $('btn-start-remote').disabled = otherCount < 2;
      $('btn-start-remote').textContent = otherCount >= 2
        ? `Start Game (${otherCount} players) 🎮`
        : `Waiting for players... (${otherCount} connected)`;
    }
  });

  await mp.connect();
  mp.send({ type: 'HOST_INIT' });
}

function renderRoomPlayers(players) {
  $('room-players-list').innerHTML = players.map(p =>
    `<span class="room-player-chip ${p.isHost ? 'is-host' : ''}">
      ${p.isHost ? '👑' : '👤'} ${p.name}
    </span>`
  ).join('');
}

$('btn-copy-link').addEventListener('click', () => {
  const link = $('share-link').value;
  navigator.clipboard.writeText(link).then(() => {
    $('btn-copy-link').textContent = '✅';
    setTimeout(() => { $('btn-copy-link').textContent = '📋'; }, 2000);
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
  showGameScreen(true);
  // Show the first question immediately
  const q = getNextQuestion();

  let targetIdx = null;
  if (state.mode === 'group') {
    let t;
    do { t = Math.floor(Math.random() * state.players.length); }
    while (t === state.currentPlayerIndex && state.players.length > 1);
    targetIdx = t;
    state.currentTargetIndex = t;
  }

  const label = buildTurnLabel(targetIdx);
  renderCard({ type: 'question', text: q.text ?? q });
  renderTurnIndicator(label);
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
  $('question-card').textContent = "Tap 'Next Question' to begin!";
  $('question-card').classList.remove('hidden');
  $('forfeit-card').classList.add('hidden');
  $('timer-zone').classList.add('hidden');
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
  await loadData();
  checkUrlParams();

  // Resume session if one exists and no URL room param
  const params = new URLSearchParams(location.search);
  if (!params.get('room') && loadSession()) {
    showScreen('game');
    setHostView(true);

    const q = getNextQuestion();
    let targetIdx = null;
    if (state.mode === 'group') {
      let t;
      do { t = Math.floor(Math.random() * state.players.length); }
      while (t === state.currentPlayerIndex && state.players.length > 1);
      targetIdx = t;
      state.currentTargetIndex = t;
    }
    renderCard({ type: 'question', text: q.text ?? q });
    renderTurnIndicator(buildTurnLabel(targetIdx));
  } else if (!params.get('room')) {
    showScreen('welcome');
  }
})();
