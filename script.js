Of course. Here is the complete code for the game, provided in separate blocks for each file as you requested.

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Kink and Tell Game by Rysta</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-EMK8Q5QN8S"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EMK8Q5QN8S');
    </script>
</head>
<body>
    <!-- Background particle effect -->
    <div id="background-particles"></div>

    <!-- Welcome Screen: Choose Game Mode -->
    <div id="welcomeContainer" class="container">
        <img src="https://raw.githubusercontent.com/reyewon/cards/refs/heads/main/KNT2.png" alt="Kink and Tell Logo" id="logo">
        <p class="instruction-text">Choose your adventure...</p>
        <div class="mode-selection">
            <button id="groupModeBtn" class="mode-btn">
                <h3>Group</h3>
                <p>Kinky secrets and devious tasks for friends.</p>
            </button>
            <button id="coupleModeBtn" class="mode-btn">
                <h3>Couple</h3>
                <p>The original game for ENM / Kink couples.</p>
            </button>
            <button id="friendsModeBtn" class="mode-btn">
                <h3>Friends</h3>
                <p>Honest revelations for two friends.</p>
            </button>
        </div>
        <div class="resume-game-prompt" id="resumeGamePrompt" style="display: none;">
            <p>It looks like you have a game in progress.</p>
            <button id="resumeGameBtn" class="btn btn-secondary">Resume Game</button>
        </div>
    </div>

    <!-- Setup Screens -->
    <div id="coupleSetupContainer" class="container setup-container">
        <img src="https://raw.githubusercontent.com/reyewon/cards/refs/heads/main/KNT2.png" alt="Kink and Tell Logo" class="logo-small">
        <p id="instructionTextCouple" class="instruction-text">Enter names and select roles!</p>
        <div class="input-group">
            <div class="form-row"><label for="player1">Player 1:</label><input type="text" id="player1" placeholder="Name"></div>
            <div class="form-row" id="player1RoleRow"><label for="player1Role">Role:</label><select id="player1Role"><option value="switch">Switch</option><option value="Dom">Dom</option><option value="sub">sub</option></select></div>
            <div class="form-row"><label for="player2">Player 2:</label><input type="text" id="player2" placeholder="Name"></div>
            <div class="form-row" id="player2RoleRow"><label for="player2Role">Role:</label><select id="player2Role"><option value="switch">Switch</option><option value="Dom">Dom</option><option value="sub">sub</option></select></div>
        </div>
        <button id="startCoupleGameButton" class="btn btn-primary">Start Game</button>
    </div>

    <div id="groupSetupContainer" class="container setup-container">
        <img src="https://raw.githubusercontent.com/reyewon/cards/refs/heads/main/KNT2.png" alt="Kink and Tell Logo" class="logo-small">
        <p id="instructionTextGroup" class="instruction-text">Add players to the group!</p>
        <div class="input-group">
            <div class="add-player-form"><input type="text" id="newPlayerName" placeholder="Enter player name..."><button id="addPlayerBtn" class="btn">+</button></div>
            <ul id="playerList"></ul>
        </div>
        <button id="startGroupGameButton" class="btn btn-primary">Start Game</button>
    </div>

    <!-- Spiciness Selection Screen -->
    <div id="spicinessContainer" class="container">
        <h2 class="spiciness-title">Set the Spiciness</h2>
        <div class="spiciness-pills">
            <button class="spiciness-btn" data-level="tame">Tame</button>
            <button class="spiciness-btn active" data-level="spicy">Spicy</button>
            <button class="spiciness-btn" data-level="filthy">Filthy</button>
        </div>
        <p class="spiciness-description">Choose the intensity for questions and forfeits.</p>
        <button id="confirmSpicinessBtn" class="btn btn-primary">Let's Play</button>
    </div>

    <!-- Main Game Screen -->
    <div id="gameContainer" class="container">
        <div class="game-header">
            <div id="gameInfo">
                <span id="modeBadge" class="badge"></span>
                <span id="turnIndicator"></span>
            </div>
            <button id="menuButton" class="menu-btn">☰</button>
        </div>

        <div id="card-area">
            <div id="card-container">
                <div id="questionCard" class="card">
                    <div class="card-header">
                        <span id="questionTypeLabel" class="card-type-label"></span>
                        <div id="questionProgress" class="progress-container">
                            <div class="progress-bar"></div>
                            <span class="progress-text"></span>
                        </div>
                    </div>
                    <p class="card-content">Click 'Next' to begin!</p>
                </div>
                <div id="forfeitCard" class="card forfeit">
                     <div class="card-header">
                        <span id="forfeitTypeLabel" class="card-type-label"></span>
                        <div id="forfeitProgress" class="progress-container">
                            <div class="progress-bar"></div>
                            <span class="progress-text"></span>
                        </div>
                    </div>
                    <div id="timerDisplay" style="display: none;">
                        <span id="timerText">00:00</span>
                        <div class="timer-controls">
                            <button id="timerStartPause">Start</button>
                            <button id="timerReset">Reset</button>
                        </div>
                    </div>
                    <p class="card-content"></p>
                </div>
            </div>
        </div>

        <div class="game-controls">
            <div class="main-actions">
                <button id="nextButton" class="btn btn-primary btn-large">Next <span class="swipe-hint">(Swipe Right)</span></button>
                <button id="forfeitButton" class="btn btn-secondary btn-large">Forfeit <span class="swipe-hint">(Swipe Up)</span></button>
            </div>
            <div class="sub-actions">
                <button id="undoButton" class="btn btn-link">Undo</button>
                <button id="skipButton" class="btn btn-link">Skip</button>
            </div>
        </div>
    </div>

    <!-- Interstitial "Pass Device" Screen -->
    <div id="interstitialContainer" class="container">
        <h3 id="interstitialMessage"></h3>
        <p>You're asking the next question!</p>
        <button id="readyButton" class="btn btn-primary">Ready!</button>
    </div>

    <!-- In-Game Menu Modal -->
    <div id="menuModal" class="modal-overlay" style="display: none;">
        <div class="modal-content">
            <button class="close-modal-btn" id="closeMenuModal">&times;</button>
            <h2>Menu</h2>
            <button id="saveAndExitBtn" class="btn btn-secondary">Save & Exit</button>
            <button id="newGameHardResetBtn" class="btn btn-danger">Start New Game (Reset)</button>
        </div>
    </div>

    <footer>
        Created by <a href="https://www.instagram.com/rystadom" target="_blank">Rysta</a>
    </footer>

    <audio id="clickSound" src="https://assets.mixkit.co/sfx/preview/mixkit-modern-click-box-check-1120.mp3" preload="auto"></audio>
    <script src="script.js" defer></script>
</body>
</html>
```

### `styles.css`

```css
/* --- Global Styles & Variables --- */
:root {
    --bg-color: #121212;
    --text-color: #e0e0e0;
    --text-muted-color: #a0a0a0;
    --accent1-color: #FF1493; /* Hot Pink */
    --accent2-color: #00FFFF; /* Electric Blue / Cyan */
    --container-bg-color: #1e1e1e;
    --input-bg-color: #2a2a2a;
    --input-border-color: #444;
    --input-focus-border: var(--accent2-color);
    --btn-primary-bg: var(--accent2-color);
    --btn-primary-text: #121212;
    --btn-primary-hover-bg: #7fffd4;
    --btn-secondary-bg: var(--accent1-color);
    --btn-secondary-text: #ffffff;
    --btn-secondary-hover-bg: #ff69b4;
    --btn-danger-bg: #b71c1c;
    --btn-danger-hover-bg: #d32f2f;
    --btn-link-color: var(--accent2-color);
    --forfeit-card-bg: rgba(255, 20, 147, 0.1);
    --forfeit-card-border: var(--accent1-color);
    --question-card-border: var(--accent2-color);
    --font-primary: 'Inter', sans-serif;
    --border-radius-main: 12px;
    --border-radius-small: 8px;
    --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.2);
    --shadow-heavy: 0 8px 25px rgba(0, 0, 0, 0.5);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: var(--font-primary);
    background-color: var(--bg-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 1rem;
    font-weight: 400;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
}

/* --- Containers --- */
.container {
    width: 100%;
    max-width: 40rem;
    padding: 1.5rem;
    background-color: var(--container-bg-color);
    border-radius: var(--border-radius-main);
    box-shadow: var(--shadow-heavy);
    text-align: center;
    position: relative;
    z-index: 1;
    display: none; /* Hide all containers by default */
    border: 1px solid var(--input-border-color);
}
#welcomeContainer { display: flex; flex-direction: column; }
#gameContainer { display: flex; flex-direction: column; height: 90vh; max-height: 800px; }

/* Show active container */
.container.active { display: flex; }
#gameContainer.active { display: flex; }


/* --- Logo & Text --- */
#logo { width: 12rem; margin: 0 auto 1.5rem auto; }
.logo-small { width: 8rem; margin: 0 auto 1rem auto; }
.instruction-text { font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 1.5rem; color: var(--text-muted-color); font-weight: 400; }

/* --- Mode Selection --- */
.mode-selection { display: flex; flex-direction: column; gap: 1rem; width: 100%; }
.mode-btn {
    background-color: var(--input-bg-color);
    border: 1px solid var(--input-border-color);
    border-radius: var(--border-radius-main);
    padding: 1.5rem;
    text-align: left;
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
}
.mode-btn:hover { border-color: var(--accent1-color); transform: translateY(-3px); box-shadow: 0 4px 8px rgba(255, 20, 147, 0.2); }
.mode-btn h3 { color: var(--accent1-color); font-size: 1.25rem; margin-bottom: 0.5rem; }
.mode-btn p { color: var(--text-muted-color); font-size: 0.9rem; line-height: 1.4; }

/* Resume Prompt */
.resume-game-prompt { margin-top: 2rem; border-top: 1px solid var(--input-border-color); padding-top: 1.5rem; }

/* --- Input Group & Form Elements --- */
.input-group { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; width: 100%; }
.form-row { display: grid; grid-template-columns: 1fr; gap: 0.5rem; align-items: center; }
.form-row label { color: var(--text-muted-color); text-align: left; font-weight: 700; }
input[type="text"], select {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: var(--input-bg-color);
    border: 1px solid var(--input-border-color);
    border-radius: var(--border-radius-small);
    color: var(--text-color);
    font-size: 1rem;
    font-family: var(--font-primary);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
input[type="text"]:focus, select:focus { border-color: var(--input-focus-border); outline: none; box-shadow: 0 0 0 3px rgba(0, 255, 255, 0.3); }
select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23a0a0a0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7rem center;
    background-size: 1.5em 1.5em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
select option { background: var(--input-bg-color); color: var(--text-color); }

/* Group Player Setup */
.add-player-form { display: flex; gap: 0.5rem; }
#newPlayerName { flex-grow: 1; }
#playerList { list-style: none; padding: 0; max-height: 150px; overflow-y: auto; background-color: var(--input-bg-color); border-radius: var(--border-radius-small); border: 1px solid var(--input-border-color); }
#playerList li { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; border-bottom: 1px solid var(--input-border-color); }
#playerList li:last-child { border-bottom: none; }
.remove-player-btn { background: none; border: none; color: var(--accent1-color); cursor: pointer; font-size: 1.2rem; font-weight: bold; }

/* --- Spiciness Screen --- */
.spiciness-title { font-size: 1.75rem; color: var(--accent1-color); margin-bottom: 1.5rem; font-weight: 900; }
.spiciness-pills { display: flex; justify-content: center; gap: 0.75rem; margin-bottom: 1rem; }
.spiciness-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 700;
    border: 2px solid var(--input-border-color);
    background-color: transparent;
    color: var(--text-muted-color);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.spiciness-btn.active {
    background-color: var(--accent1-color);
    border-color: var(--accent1-color);
    color: var(--btn-secondary-text);
    box-shadow: 0 0 15px rgba(255, 20, 147, 0.5);
}
.spiciness-btn:not(.active):hover { border-color: var(--accent1-color); color: var(--text-color); }
.spiciness-description { margin-bottom: 2rem; }

/* --- Buttons --- */
.btn {
    padding: 0.85rem 1.5rem;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    border-radius: var(--border-radius-small);
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.1s ease;
    letter-spacing: 0.5px;
}
.btn-primary { background-color: var(--btn-primary-bg); color: var(--btn-primary-text); }
.btn-primary:hover { background-color: var(--btn-primary-hover-bg); }
.btn-secondary { background-color: var(--btn-secondary-bg); color: var(--btn-secondary-text); }
.btn-secondary:hover { background-color: var(--btn-secondary-hover-bg); }
.btn-danger { background-color: var(--btn-danger-bg); color: #fff; }
.btn-danger:hover { background-color: var(--btn-danger-hover-bg); }
.btn:active { transform: scale(0.97); }
.btn-large { padding: 1rem 2rem; font-size: 1.25rem; width: 100%; }
.btn-link { background: none; color: var(--btn-link-color); text-transform: none; font-size: 0.9rem; padding: 0.5rem; }

/* --- Game Screen --- */
.game-header { display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 1rem; }
#gameInfo { text-align: left; }
.badge {
    display: inline-block;
    padding: 0.25rem 0.6rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: var(--border-radius-small);
    margin-right: 0.5rem;
    color: #121212;
}
#modeBadge.couple { background-color: #ff80ab; }
#modeBadge.group { background-color: #82b1ff; }
#modeBadge.friends { background-color: #b9f6ca; }
#turnIndicator { font-size: 1.1rem; font-weight: 700; color: var(--text-color); }
.menu-btn { background: none; border: none; color: var(--text-muted-color); font-size: 1.5rem; cursor: pointer; }

#card-area { flex-grow: 1; width: 100%; display: flex; align-items: center; justify-content: center; perspective: 1000px; }
#card-container { width: 100%; height: 100%; position: relative; }
.card {
    background-color: var(--input-bg-color);
    border: 1px solid var(--input-border-color);
    border-radius: var(--border-radius-main);
    padding: 1.5rem;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--text-color);
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: transform 0.6s, opacity 0.6s;
    overflow-y: auto;
}
#questionCard { border-left: 5px solid var(--question-card-border); }
#forfeitCard { border-left: 5px solid var(--forfeit-card-border); background-color: var(--forfeit-card-bg); display: none; }
.card-content { font-size: 1.25rem; line-height: 1.6; font-weight: 400; margin-top: auto; margin-bottom: auto; }

.card-header { width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.card-type-label { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted-color); }
.progress-container { font-size: 0.8rem; color: var(--text-muted-color); display: flex; align-items: center; gap: 0.5rem; }
.progress-bar { width: 50px; height: 6px; background-color: #444; border-radius: 3px; overflow: hidden; }
.progress-bar::after { content: ''; display: block; height: 100%; width: 0%; background-color: var(--accent2-color); border-radius: 3px; transition: width 0.3s ease; }
#forfeitCard .progress-bar::after { background-color: var(--accent1-color); }

/* Timer */
#timerDisplay { margin-bottom: 1rem; text-align: center; }
#timerText { font-size: 2.5rem; font-weight: 900; color: var(--accent1-color); display: block; margin-bottom: 0.5rem; }
.timer-controls button { background: none; border: 1px solid var(--text-muted-color); color: var(--text-muted-color); border-radius: var(--border-radius-small); padding: 0.25rem 0.75rem; cursor: pointer; margin: 0 0.25rem; }

/* Game Controls */
.game-controls { width: 100%; margin-top: 1rem; }
.main-actions { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem; }
.swipe-hint { font-size: 0.7rem; font-weight: 400; text-transform: none; opacity: 0.7; }
.sub-actions { display: flex; justify-content: space-between; }

/* --- Interstitial Screen --- */
#interstitialContainer { flex-direction: column; justify-content: center; }
#interstitialContainer h3 { font-size: 1.75rem; line-height: 1.3; color: var(--accent2-color); margin-bottom: 0.5rem; font-weight: 700; }
#interstitialContainer p { font-size: 1.1rem; color: var(--text-muted-color); margin-bottom: 2rem; }

/* --- Modal --- */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.modal-content {
    background-color: var(--container-bg-color);
    padding: 2rem;
    border-radius: var(--border-radius-main);
    width: 90%;
    max-width: 30rem;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.close-modal-btn {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--text-muted-color);
    font-size: 2rem;
    cursor: pointer;
}

/* --- Footer --- */
footer { margin-top: auto; padding-top: 2rem; text-align: center; width: 100%; font-size: 0.875rem; color: var(--text-muted-color); z-index: 1; }
footer a { color: var(--link-color); text-decoration: none; font-weight: 700; transition: color 0.3s ease; }
footer a:hover { color: var(--text-color); }

/* --- Background Particle Animation --- */
#background-particles { position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 0; pointer-events: none; }
.particle { position: absolute; border-radius: 50%; opacity: 0; animation: float 20s infinite linear; }
/* Dynamically created in JS */

/* --- Responsiveness --- */
@media (min-width: 768px) {
    .container { padding: 2rem; }
    #gameContainer { padding: 2rem; }
    .logo-small { width: 10rem; }
    #logo { width: 14rem; }
    .instruction-text { font-size: 1.25rem; }
    .form-row { grid-template-columns: 120px 1fr; gap: 1rem; }
    .form-row label { text-align: right; }
    .card-content { font-size: 1.5rem; }
    .main-actions { flex-direction: row; }
}

/* Card Animation */
.card.flipped { transform: rotateY(180deg); }
.card.hidden { opacity: 0; transform: scale(0.95); pointer-events: none; }
```

### `script.js`

```javascript
// --- Kink and Tell Game - Rysta.co.uk ---
// --- Enhanced Features Version ---

// --- CONTENT LIBRARIES ---
// Spiciness Levels: 1=Tame, 2=Spicy, 3=Filthy
const coupleQuestions = [
    // --- Spiciness 1 (Tame) ---
    { text: "How do you feel when I get closer to someone else in our ENM dynamic?", type: "neutral", spiciness: 1 },
    { text: "What’s one thing you wish people outside of our relationship understood about us?", type: "neutral", spiciness: 1 },
    { text: "What’s your favourite type of roleplay?", type: "neutral", spiciness: 1 },
    { text: "What’s a non-sexual activity that you find surprisingly intimate?", type: "neutral", spiciness: 1 },
    { text: "What completely non-sexual skill do you have that's weirdly attractive?", type: "neutral", spiciness: 1 },
    { text: "If our relationship had a theme song for playtime, what would it be?", type: "neutral", spiciness: 1 },
    { text: "What’s a boundary you're proud of setting in a past relationship?", type: "neutral", spiciness: 1 },
    { text: "How has our sexual dynamic helped you grow as a person?", type: "neutral", spiciness: 1 },
    { text: "What’s your favourite part of my body to tease, and why?", type: "neutral", spiciness: 1 },
    { text: "What does aftercare usually look like for you? How can I best provide it?", type: "D_asks_S", spiciness: 1 },
    { text: "What does aftercare usually look like for you? How can I best provide it?", type: "S_asks_D", spiciness: 1 },

    // --- Spiciness 2 (Spicy) ---
    { text: "Have you ever wanted to explore a kink or fetish with me but haven't yet?", type: "neutral", spiciness: 2 },
    { text: "When was the last time you felt jealous in our ENM dynamic, and how did you handle it?", type: "neutral", spiciness: 2 },
    { text: "Have you ever fantasised about me with one of my other partners?", type: "neutral", spiciness: 2 },
    { text: "Have you ever kept something from me in ENM to keep the peace?", type: "neutral", spiciness: 2 },
    { text: "If you could play with anyone outside of our relationship, who would it be and why?", type: "neutral", spiciness: 2 },
    { text: "What’s your biggest turn-on if you watch me with someone else?", type: "neutral", spiciness: 2 },
    { text: "What’s a kink you thought you’d never try with me but ended up loving?", type: "neutral", spiciness: 2 },
    { text: "What’s your favourite way for us to explore anal play, and why?", type: "neutral", spiciness: 2 },
    { text: "What's a specific insecurity that ENM brings up for you, and how can I support you with it?", type: "S_asks_D", spiciness: 2 },
    { text: "What’s the most vulnerable you’ve felt during a scene with me, and why?", type: "D_asks_S", spiciness: 2 },
    { text: "Do you prefer when I am rough with you or when I’m gentle?", type: "S_asks_D", spiciness: 2 },
    { text: "Would you prefer for me to punish you for bad behavior or reward you for being good?", type: "D_asks_S", spiciness: 2 },
    { text: "Have you ever experienced compersion when watching me with someone else? What was it like?", type: "neutral", spiciness: 2 },
    { text: "How do you feel about breath play with me, and have we tried it?", type: "neutral", spiciness: 2 },
    { text: "What’s the naughtiest fantasy we’ve yet to act out?", type: "neutral", spiciness: 2 },
    { text: "If you had to be restrained, what would be your weapon of choice: ropes, cuffs, or something more creative?", type: "neutral", spiciness: 2 },
    { text: "Do you prefer when I restrain you with ropes, cuffs, or something else?", type: "D_asks_S", spiciness: 2 },
    { text: "What’s your favorite part of a power exchange dynamic with me?", type: "S_asks_D", spiciness: 2 },

    // --- Spiciness 3 (Filthy) ---
    { text: "What's your ultimate free-use fantasy scenario involving me and someone else?", type: "neutral", spiciness: 3 },
    { text: "What's the most intense CNC (consensual non-consent) scenario you've fantasised about?", type: "neutral", spiciness: 3 },
    { text: "How would you feel about us livestreaming our play session?", type: "neutral", spiciness: 3 },
    { text: "What's the most extreme public play you'd consent to if guaranteed privacy?", type: "neutral", spiciness: 3 },
    { text: "Describe in detail how you'd want me to pimp you out or big you up to others for an evening.", type: "D_asks_S", spiciness: 3 },
    { text: "How should I punish you if you cum without permission while with someone else?", type: "D_asks_S", spiciness: 3 },
    { text: "Describe a scenario where you'd enjoy being objectified (consensually).", type: "D_asks_S", spiciness: 3 },
    { text: "Would it excite you to watch me being dominated by someone in a public or group setting?", type: "S_asks_D", spiciness: 3 },
    { text: "Describe in detail how you'd want me to watch you service another partner", type: "D_asks_S", spiciness: 3 },
    { text: "Which previous partner had the most memorable oral technique and what made it special?", type: "neutral", spiciness: 3 },
    { text: "Who gave you your most intense orgasm before me, and what were they doing?", type: "neutral", spiciness: 3 },
    { text: "Describe a fantasy involving watersports (urophilia).", type: "neutral", spiciness: 3 },
    { text: "What's your stance on knife play or edge play involving sharp objects?", type: "neutral", spiciness: 3 },
    { text: "What's the most extreme form of humiliation you've experienced and enjoyed?", type: "D_asks_S", spiciness: 3 },
    { text: "What's your ultimate orgasm torture scenario? Edging duration? Overstim methods?", type: "neutral", spiciness: 3 },
];
const coupleForfeits = [
    // --- Spiciness 1 (Tame) ---
    { text: "You must kiss the other player's neck for 10 seconds.", spiciness: 1, timed: true, duration: 10 },
    { text: "Give the other player a 60-second foot massage.", spiciness: 1, timed: true, duration: 60 },
    { text: "Massage the other player's shoulders for two minutes.", spiciness: 1, timed: true, duration: 120 },
    { text: "Hold eye contact with the other player for 60 seconds without laughing.", spiciness: 1, timed: true, duration: 60 },
    { text: "Blindfold yourself for the next two questions.", spiciness: 1, timed: false },
    { text: "Whisper three nice things you want to do to the other player.", spiciness: 1, timed: false },

    // --- Spiciness 2 (Spicy) ---
    { text: "You must remove one item of clothing.", spiciness: 2, timed: false },
    { text: "You must let the other player restrain you in some way for 5 minutes.", spiciness: 2, timed: true, duration: 300 },
    { text: "You must slide a hand into the other person's pants, and have a good feel for 10 seconds.", spiciness: 2, timed: true, duration: 10 },
    { text: "Wear a vibrating toy for the next 3 questions.", spiciness: 2, timed: false },
    { text: "Let your partner attach clothespins or similar to 5 body parts for 2 minutes.", spiciness: 2, timed: true, duration: 120 },
    { text: "Let the other player write a temporary 'property of' mark on you (visible only to them).", spiciness: 2, timed: false },
    { text: "Let the other player choose a song for you to strip tease (partially or fully) to.", spiciness: 2, timed: false },
    { text: "Wear an ice cube somewhere sensitive until it melts.", spiciness: 2, timed: false },
    { text: "Kneel at the other player's feet until your next turn.", spiciness: 2, timed: false },

    // --- Spiciness 3 (Filthy) ---
    { text: "{performer} must head to the bathroom, take a naughty photo and send it to the other player.", spiciness: 3, timed: false },
    { text: "{performer} must choose someone else to message, telling them you just masturbated thinking of them.", spiciness: 3, timed: false },
    { text: "Let your partner choose a sex toy to use on you for at least 20 seconds.", spiciness: 3, timed: true, duration: 20 },
    { text: "Send a flirty voice note to the 4th person in your Insta DMs.", spiciness: 3, timed: false },
    { text: "Confess the last time you masturbated and what you thought about.", spiciness: 3, timed: false },
    { text: "Lick whipped cream (or similar) off a chosen part of the other player's body.", spiciness: 3, timed: false },
    { text: "Show the other player your 'O face'.", spiciness: 3, timed: false },
    { text: "Confess the kinkiest thing you've ever searched for online.", spiciness: 3, timed: false },
    { text: "EASTER EGG: Message Rysta, the game creator, on Fetlife (RYSTA) or Instagram (@rystadom). Your message must be a confession of the naughtiest thing you've thought about doing with your partner. Be creative.", spiciness: 3, timed: false },
];
const friendsQuestions = [
    // --- Spiciness 1 (Tame) ---
    { text: "What's a misconception you think I might have about your sex life?", spiciness: 1 },
    { text: "What's the best or worst piece of sex advice you've ever received?", spiciness: 1 },
    { text: "What's a green flag you look for in people?", spiciness: 1 },
    { text: "What's a boundary you're proud of setting in a past relationship (romantic or sexual)?", spiciness: 1 },

    // --- Spiciness 2 (Spicy) ---
    { text: "Have you ever faked an orgasm? If you're comfortable sharing, why?", spiciness: 2 },
    { text: "What's your honest, unfiltered opinion on anal sex, giving or receiving?", spiciness: 2 },
    { text: "Have you ever had a fantasy about being with more than one person at once? Describe it.", spiciness: 2 },
    { text: "What's a fetish you find fascinating, even if you're not sure you'd try it?", spiciness: 2 },

    // --- Spiciness 3 (Filthy) ---
    { text: "Have you ever had a sexual dream about me? You don't have to share details unless you want to.", spiciness: 3 },
    { text: "What's a secret turn-on you've never told anyone before?", spiciness: 3 },
    { text: "If we were to experiment sexually, what's the first thing you'd want to try?", spiciness: 3 },
    { text: "What's the kinkiest thing you've ever done in a public or semi-public place?", spiciness: 3 },
];
const friendsForfeits = [
    // --- Spiciness 1 (Tame) ---
    { text: "Give the other player a genuine, flirty compliment about a physical feature.", spiciness: 1, timed: false },
    { text: "Enthusiastically mime your favourite (non-sexual) hobby.", spiciness: 1, timed: false },

    // --- Spiciness 2 (Spicy) ---
    { text: "Remove one item of clothing.", spiciness: 2, timed: false },
    { text: "Show the other player the kinkiest thing you have saved on your phone (meme, photo, video).", spiciness: 2, timed: false },
    { text: "Let the other player choose a song for you to do a 30-second seductive dance to.", spiciness: 2, timed: true, duration: 30 },

    // --- Spiciness 3 (Filthy) ---
    { text: "Describe, in detail, what you would do to the other player if you were going to hook up right now.", spiciness: 3, timed: false },
    { text: "Whisper your darkest sexual secret in the other player's ear.", spiciness: 3, timed: false },
    { text: "Confess the last thing you masturbated to.", spiciness: 3, timed: false },
];
const groupQuestions = [
    // --- Spiciness 1 (Tame) ---
    { text: "Who in this group do you think has the wildest, unspoken fantasy?", type: 'target', spiciness: 1 },
    { text: "If you could trade lives with someone in this group for a day, who would it be?", type: 'target', spiciness: 1 },
    { text: "Who here would be the most likely to get away with a crime? What would the crime be?", type: 'target', spiciness: 1 },

    // --- Spiciness 2 (Spicy) ---
    { text: "Who in this room do you think has the most experience with anal play?", type: 'target', spiciness: 2 },
    { text: "If you had to make out with one person in this room right now, who would it be?", type: 'target', spiciness: 2 },
    { text: "Everyone goes around the circle and says who in the group they'd most like to kiss.", type: 'group', spiciness: 2 },
    { text: "Who here do you think has the most sex toys?", type: 'target', spiciness: 2 },

    // --- Spiciness 3 (Filthy) ---
    { text: "If you could watch any two people in this room hook up, who would you pick?", type: 'target', spiciness: 3 },
    { text: "If you had a 'free pass' to sleep with someone in this room, who would you pick?", type: 'target', spiciness: 3 },
    { text: "Everyone writes down a secret fantasy on a piece of paper. Shuffle them, and read them aloud. The group has to guess who wrote which fantasy.", type: 'group', spiciness: 3 },
    { text: "If you had to go down on one person in this room, who would it be?", type: 'target', spiciness: 3 },
];
const groupForfeits = [
    // --- Spiciness 1 (Tame) ---
    { text: "Whisper a secret into the ear of the person on your left.", spiciness: 1, timed: false },
    { text: "The group must invent a secret handshake.", spiciness: 1, timed: false },

    // --- Spiciness 2 (Spicy) ---
    { text: "{performer} must remove one item of clothing.", spiciness: 2, timed: false },
    { text: "{performer} must give a 30-second lap dance to the person of your choice.", spiciness: 2, timed: true, duration: 30 },
    { text: "Choose someone in the group. You must kiss them on the neck for 10 seconds.", spiciness: 2, timed: true, duration: 10 },

    // --- Spiciness 3 (Filthy) ---
    { text: "{performer} must describe your last orgasm in detail to the group.", spiciness: 3, timed: false },
    { text: "The group votes on who {performer} has to spank. You must give them 3 firm spanks.", spiciness: 3, timed: false },
    { text: "You must take a body shot off a person of your choice (if applicable and consensual).", spiciness: 3, timed: false },
];


document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const containers = document.querySelectorAll('.container');
    const welcomeContainer = document.getElementById('welcomeContainer');
    const gameContainer = document.getElementById('gameContainer');
    const spicinessContainer = document.getElementById('spicinessContainer');
    const coupleSetupContainer = document.getElementById('coupleSetupContainer');
    const groupSetupContainer = document.getElementById('groupSetupContainer');
    const interstitialContainer = document.getElementById('interstitialContainer');
    const menuModal = document.getElementById('menuModal');

    const clickSound = document.getElementById('clickSound');

    // --- Game State (loaded from localStorage or default) ---
    let gameState = {};
    const defaultState = {
        gameMode: null,
        players: [],
        currentPlayerIndex: 0,
        currentTargetIndex: null,
        spiciness: 'spicy',
        history: [],
        usedQuestionIndices: { couple: [], group: [], friends: [] },
        usedForfeitIndices: { couple: [], group: [], friends: [] },
    };

    // --- Timer Variables ---
    let timerInterval;
    let timerSeconds = 0;
    let isTimerRunning = false;

    // --- Swipe Detection Variables ---
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    // --- Element Selectors (used frequently) ---
    const qs = (selector) => document.querySelector(selector);
    const qsa = (selector) => document.querySelectorAll(selector);

    // --- Utility Functions ---
    const playSound = () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => console.log("Sound play failed:", e));
    };

    const showContainer = (id) => {
        containers.forEach(c => c.classList.remove('active'));
        qs(`#${id}`).classList.add('active');
    };

    const saveState = () => {
        try {
            localStorage.setItem('kinkAndTellGameState', JSON.stringify(gameState));
        } catch (e) {
            console.error("Failed to save game state:", e);
        }
    };

    const loadState = () => {
        try {
            const savedState = localStorage.getItem('kinkAndTellGameState');
            if (savedState) {
                gameState = JSON.parse(savedState);
                // Ensure new properties exist on loaded state
                if (!gameState.usedQuestionIndices) gameState.usedQuestionIndices = defaultState.usedQuestionIndices;
                if (!gameState.usedForfeitIndices) gameState.usedForfeitIndices = defaultState.usedForfeitIndices;
                return true;
            }
        } catch (e) {
            console.error("Failed to load game state:", e);
        }
        gameState = JSON.parse(JSON.stringify(defaultState)); // Deep copy
        return false;
    };

    const clearState = () => {
        gameState = JSON.parse(JSON.stringify(defaultState));
        localStorage.removeItem('kinkAndTellGameState');
    };

    // --- Particle Background ---
    function createParticles() {
        const container = qs('#background-particles');
        if (!container) return;
        container.innerHTML = '';
        const particleCount = 20;
        const colors = ['var(--accent1-color)', 'var(--accent2-color)'];
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            container.appendChild(particle);
        }
    }

    // --- Game Setup ---
    const setupMode = (mode) => {
        playSound();
        clearState(); // Start fresh when a mode is selected
        gameState.gameMode = mode;
        if (mode === 'group') {
            showContainer('groupSetupContainer');
        } else {
            qs('#player1RoleRow').style.display = mode === 'couple' ? 'grid' : 'none';
            qs('#player2RoleRow').style.display = mode === 'couple' ? 'grid' : 'none';
            qs('#instructionTextCouple').textContent = mode === 'couple' ? 'Enter names and select roles!' : 'Enter player names!';
            showContainer('coupleSetupContainer');
        }
    };

    const renderPlayerList = () => {
        const playerList = qs('#playerList');
        playerList.innerHTML = '';
        gameState.players.forEach((player, index) => {
            const li = document.createElement('li');
            li.textContent = player.name;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '×';
            removeBtn.className = 'remove-player-btn';
            removeBtn.onclick = () => {
                playSound();
                gameState.players.splice(index, 1);
                renderPlayerList();
            };
            li.appendChild(removeBtn);
            playerList.appendChild(li);
        });
    };

    const startGame = () => {
        playSound();
        gameState.currentPlayerIndex = 0;
        gameState.history = [];
        showContainer('spicinessContainer');
    };

    const resumeGame = () => {
        playSound();
        updateUI();
        showContainer('gameContainer');
    };

    // --- Spiciness Logic ---
    const setSpiciness = (level) => {
        playSound();
        gameState.spiciness = level;
        qsa('.spiciness-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.level === level);
        });
    };

    // --- Core Game Logic ---
    const getFilteredContent = (contentArray, type) => {
        const spicinessMap = { tame: 1, spicy: 2, filthy: 3 };
        const maxSpiciness = spicinessMap[gameState.spiciness];
        const usedKey = type === 'question' ? 'usedQuestionIndices' : 'usedForfeitIndices';
        const usedIndices = gameState[usedKey][gameState.gameMode];

        let filtered = contentArray.filter(item => item.spiciness <= maxSpiciness);

        // Role-based filtering for couple mode questions
        if (gameState.gameMode === 'couple' && type === 'question') {
            const asker = gameState.players[gameState.currentPlayerIndex];
            const answerer = gameState.players[(gameState.currentPlayerIndex + 1) % 2];
            filtered = filtered.filter(q => {
                if (q.type === 'neutral') return true;
                if (q.type === 'D_asks_S' && (asker.role === 'Dom' || asker.role === 'switch') && (answerer.role === 'sub' || answerer.role === 'switch')) return true;
                if (q.type === 'S_asks_D' && (asker.role === 'sub' || asker.role === 'switch') && (answerer.role === 'Dom' || answerer.role === 'switch')) return true;
                return false;
            });
        }
        
        let available = filtered.filter(item => !usedIndices.includes(contentArray.indexOf(item)));
        
        if (available.length === 0 && filtered.length > 0) {
            // Reset used indices for this category if all are used
            console.log(`Resetting ${type} for ${gameState.gameMode} at spiciness ${gameState.spiciness}`);
            usedIndices.length = 0;
            available = filtered;
        }

        return available;
    };

    const getNextUniqueItem = (contentArray, type) => {
        const availableContent = getFilteredContent(contentArray, type);
        if (availableContent.length === 0) {
            return { text: "No more content for this level! Try changing spiciness or restarting.", type: 'system' };
        }
        const selectedItem = availableContent[Math.floor(Math.random() * availableContent.length)];
        const originalIndex = contentArray.indexOf(selectedItem);
        const usedKey = type === 'question' ? 'usedQuestionIndices' : 'usedForfeitIndices';
        gameState[usedKey][gameState.gameMode].push(originalIndex);
        return selectedItem;
    };

    const displayNextQuestion = () => {
        const questionBanks = { couple: coupleQuestions, group: groupQuestions, friends: friendsQuestions };
        const question = getNextUniqueItem(questionBanks[gameState.gameMode], 'question');
        
        updateTurnIndicator(question.type);
        updateCard('question', question);
        saveState();
    };

    const displayNextForfeit = () => {
        const forfeitBanks = { couple: coupleForfeits, group: groupForfeits, friends: friendsForfeits };
        const forfeit = getNextUniqueItem(forfeitBanks[gameState.gameMode], 'forfeit');
        
        updateCard('forfeit', forfeit);
        handleTimer(forfeit);
        saveState();
    };

    const updateCard = (cardType, content) => {
        const isQuestion = cardType === 'question';
        const card = isQuestion ? qs('#questionCard') : qs('#forfeitCard');
        const otherCard = isQuestion ? qs('#forfeitCard') : qs('#questionCard');
        
        const contentEl = card.querySelector('.card-content');
        const typeLabel = card.querySelector('.card-type-label');
        
        let performerName = '';
        if (gameState.gameMode === 'group') {
            // Forfeits can be for the 'target' or the 'asker' if no target
            const performerIndex = gameState.currentTargetIndex !== null ? gameState.currentTargetIndex : gameState.currentPlayerIndex;
            performerName = gameState.players[performerIndex].name;
        } else if (gameState.players.length > 1) {
            // In 2-player modes, the forfeit is for the other player
            const performerIndex = (gameState.currentPlayerIndex + 1) % 2;
            performerName = gameState.players[performerIndex].name;
        }

        contentEl.innerHTML = content.text ? content.text.replace('{performer}', `<strong>${performerName}</strong>`) : 'Error loading content.';
        typeLabel.textContent = isQuestion ? 'Question' : 'Forfeit';

        // Show/hide cards
        card.style.display = 'flex';
        otherCard.style.display = 'none';
        
        // Progress bar
        updateProgress(cardType);

        // Add to history
        gameState.history.push({
            type: cardType,
            content: content,
            state: JSON.parse(JSON.stringify(gameState)) // Deep copy of state before this turn
        });
    };

    const updateProgress = (cardType) => {
        const isQuestion = cardType === 'question';
        const contentArray = (isQuestion ? { couple: coupleQuestions, group: groupQuestions, friends: friendsQuestions } : { couple: coupleForfeits, group: groupForfeits, friends: friendsForfeits })[gameState.gameMode];
        const usedKey = isQuestion ? 'usedQuestionIndices' : 'usedForfeitIndices';
        const usedIndices = gameState[usedKey][gameState.gameMode];
        
        const spicinessMap = { tame: 1, spicy: 2, filthy: 3 };
        const maxSpiciness = spicinessMap[gameState.spiciness];
        const totalInLevel = contentArray.filter(item => item.spiciness <= maxSpiciness).length;
        
        const progress = totalInLevel > 0 ? (usedIndices.length / totalInLevel) * 100 : 0;
        
        const progressBar = qs(`#${cardType}Progress .progress-bar`);
        const progressText = qs(`#${cardType}Progress .progress-text`);
        
        if(progressBar && progressText){
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${usedIndices.length} / ${totalInLevel}`;
        }
    };

    const switchPlayer = () => {
        gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    };

    const updateTurnIndicator = (questionType = 'target') => {
        if (gameState.players.length === 0) return;
        const asker = gameState.players[gameState.currentPlayerIndex];
        let indicatorText = '';
        
        if (gameState.gameMode === 'group') {
            if (questionType === 'group') {
                indicatorText = `${asker.name} asks the group:`;
                gameState.currentTargetIndex = null;
            } else {
                let targetIdx;
                if (gameState.players.length > 1) {
                    do {
                        targetIdx = Math.floor(Math.random() * gameState.players.length);
                    } while (targetIdx === gameState.currentPlayerIndex);
                } else {
                    targetIdx = 0;
                }
                gameState.currentTargetIndex = targetIdx;
                const target = gameState.players[gameState.currentTargetIndex];
                indicatorText = `${asker.name} asks ${target.name}:`;
            }
        } else if (gameState.players.length > 1) {
            const answerer = gameState.players[(gameState.currentPlayerIndex + 1) % 2];
            indicatorText = `${asker.name} asks ${answerer.name}:`;
        } else {
            indicatorText = `${asker.name}'s turn:`;
        }
        qs('#turnIndicator').textContent = indicatorText;
    };

    const updateUI = () => {
        // Update mode badge
        const modeBadge = qs('#modeBadge');
        modeBadge.textContent = gameState.gameMode;
        modeBadge.className = `badge ${gameState.gameMode}`;

        // Update spiciness pills
        setSpiciness(gameState.spiciness);
        
        // Restore last card
        const lastAction = gameState.history[gameState.history.length - 1];
        if (lastAction) {
            // Restore state from before the last action to get correct player indexes
            const lastState = lastAction.state;
            updateTurnIndicator(lastAction.content.type);
            updateCard(lastAction.type, lastAction.content);
            if (lastAction.type === 'forfeit') {
                 handleTimer(lastAction.content);
            }
        } else {
            // New game state
            qs('#questionCard .card-content').textContent = "Click 'Next' to begin!";
            qs('#questionCard').style.display = 'flex';
            qs('#forfeitCard').style.display = 'none';
            updateTurnIndicator();
        }
    };
    
    const undoLastAction = () => {
        playSound();
        if (gameState.history.length <= 1) {
            alert("No more actions to undo.");
            return;
        }
        
        // The state to restore is the one saved with the *second to last* history item
        const stateToRestore = gameState.history[gameState.history.length - 2].state;
        gameState = JSON.parse(JSON.stringify(stateToRestore));
        
        // Now that state is restored, we can pop the last item from its history array
        gameState.history.pop(); 
        
        updateUI();
        saveState();
    };

    // --- Timer Logic ---
    const handleTimer = (forfeit) => {
        const timerDisplay = qs('#timerDisplay');
        stopTimer();
        if (forfeit.timed) {
            timerSeconds = forfeit.duration;
            qs('#timerText').textContent = formatTime(timerSeconds);
            timerDisplay.style.display = 'block';
        } else {
            timerDisplay.style.display = 'none';
        }
    };

    const startPauseTimer = () => {
        playSound();
        const btn = qs('#timerStartPause');
        if (isTimerRunning) {
            clearInterval(timerInterval);
            btn.textContent = 'Resume';
        } else {
            if (timerSeconds <= 0) return; // Don't start a finished timer
            timerInterval = setInterval(() => {
                timerSeconds--;
                qs('#timerText').textContent = formatTime(timerSeconds);
                if (timerSeconds <= 0) {
                    stopTimer();
                    playSound(); // Completion sound
                    qs('#timerText').textContent = "Time's Up!";
                }
            }, 1000);
            btn.textContent = 'Pause';
        }
        isTimerRunning = !isTimerRunning;
    };

    const resetTimer = () => {
        playSound();
        stopTimer();
        const lastForfeit = gameState.history[gameState.history.length - 1].content;
        if(lastForfeit && lastForfeit.timed){
            timerSeconds = lastForfeit.duration;
            qs('#timerText').textContent = formatTime(timerSeconds);
        }
    };

    const stopTimer = () => {
        clearInterval(timerInterval);
        isTimerRunning = false;
        qs('#timerStartPause').textContent = 'Start';
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    // --- Swipe Logic ---
    const handleTouchStart = (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    };

    const handleSwipe = () => {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const swipeThreshold = 50; // Min pixels for a swipe

        // Ignore swipe if it's mostly vertical when we want horizontal, and vice-versa
        if (Math.abs(deltaX) < swipeThreshold && Math.abs(deltaY) < swipeThreshold) {
            return;
        }

        if (Math.abs(deltaX) > Math.abs(deltaY)) { // Horizontal swipe
            if (deltaX > swipeThreshold) {
                // Swipe Right
                qs('#nextButton').click();
            }
        } else { // Vertical swipe
            if (deltaY < -swipeThreshold) {
                // Swipe Up
                qs('#forfeitButton').click();
            }
        }
    };

    // --- Event Listeners ---
    const addEventListeners = () => {
        // Mode Selection
        qs('#groupModeBtn').addEventListener('click', () => setupMode('group'));
        qs('#coupleModeBtn').addEventListener('click', () => setupMode('couple'));
        qs('#friendsModeBtn').addEventListener('click', () => setupMode('friends'));
        qs('#resumeGameBtn').addEventListener('click', resumeGame);

        // Couple/Friends Setup
        qs('#startCoupleGameButton').addEventListener('click', () => {
            const p1Name = qs('#player1').value.trim() || 'Player 1';
            const p2Name = qs('#player2').value.trim() || 'Player 2';
            if (gameState.gameMode === 'couple') {
                gameState.players = [{ name: p1Name, role: qs('#player1Role').value }, { name: p2Name, role: qs('#player2Role').value }];
            } else {
                gameState.players = [{ name: p1Name }, { name: p2Name }];
            }
            startGame();
        });

        // Group Setup
        qs('#addPlayerBtn').addEventListener('click', () => {
            playSound();
            const nameInput = qs('#newPlayerName');
            const name = nameInput.value.trim();
            if (name && !gameState.players.some(p => p.name.toLowerCase() === name.toLowerCase())) {
                gameState.players.push({ name });
                renderPlayerList();
                nameInput.value = '';
                nameInput.focus();
            } else if (!name) {
                alert("Please enter a name.");
            } else {
                alert("That player name already exists.");
            }
        });
        qs('#newPlayerName').addEventListener('keypress', (e) => { if (e.key === 'Enter') qs('#addPlayerBtn').click(); });
        qs('#startGroupGameButton').addEventListener('click', () => {
            if (gameState.players.length < 2) {
                alert("You need at least 2 players to start.");
                return;
            }
            startGame();
        });

        // Spiciness
        qsa('.spiciness-btn').forEach(btn => btn.addEventListener('click', () => setSpiciness(btn.dataset.level)));
        qs('#confirmSpicinessBtn').addEventListener('click', () => {
            playSound();
            showContainer('gameContainer');
            updateUI();
            displayNextQuestion();
        });

        // Main Game Controls
        qs('#nextButton').addEventListener('click', () => {
            playSound();
            switchPlayer();
            if (gameState.gameMode === 'group' && gameState.players.length > 1) {
                qs('#interstitialMessage').textContent = `Pass the device to ${gameState.players[gameState.currentPlayerIndex].name}`;
                showContainer('interstitialContainer');
            } else {
                displayNextQuestion();
            }
        });
        qs('#forfeitButton').addEventListener('click', () => {
            playSound();
            displayNextForfeit();
        });
        qs('#skipButton').addEventListener('click', () => {
            playSound();
            // Just get a new question without switching player
            displayNextQuestion();
        });
        qs('#undoButton').addEventListener('click', undoLastAction);
        qs('#readyButton').addEventListener('click', () => {
            playSound();
            showContainer('gameContainer');
            displayNextQuestion();
        });

        // Menu
        qs('#menuButton').addEventListener('click', () => { playSound(); menuModal.style.display = 'flex'; });
        qs('#closeMenuModal').addEventListener('click', () => { playSound(); menuModal.style.display = 'none'; });
        qs('#saveAndExitBtn').addEventListener('click', () => {
            playSound();
            saveState();
            location.reload();
        });
        qs('#newGameHardResetBtn').addEventListener('click', () => {
            playSound();
            if (confirm("Are you sure? This will erase your current game progress.")) {
                clearState();
                location.reload();
            }
        });
        
        // Timer Controls
        qs('#timerStartPause').addEventListener('click', startPauseTimer);
        qs('#timerReset').addEventListener('click', resetTimer);

        // Swipe Controls
        const cardArea = qs('#card-area');
        cardArea.addEventListener('touchstart', handleTouchStart, false);
        cardArea.addEventListener('touchend', handleTouchEnd, false);
    };

    // --- Initialization ---
    const init = () => {
        createParticles();
        addEventListeners();
        if (loadState() && gameState.gameMode) {
            qs('#resumeGamePrompt').style.display = 'block';
        } else {
            // No saved game, ensure we start with a clean slate
            clearState();
        }
        showContainer('welcomeContainer');
    };

    init();
});
```
