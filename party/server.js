/**
 * Kink and Tell - PartyKit Server
 * Handles real-time game state sync for remote multiplayer.
 * Each room = one active game session, identified by a 6-char room code.
 */

export default class KinkAndTellServer {
  constructor(party) {
    this.party = party;
    // Room state - shared across all connected clients
    this.state = {
      phase: 'lobby',         // lobby | game
      mode: null,             // couple | friends | group
      players: [],            // [{ name, role, isHost }] — set when game starts
      pendingPlayers: [],     // [{ name, role, isHost, connId }] — players in lobby
      currentPlayerIndex: 0,
      currentTargetIndex: null,
      currentCard: null,      // { type: 'question'|'forfeit', text, turnLabel }
      intensity: 'spicy',     // tame | spicy | wild
      usedQuestions: [],
      usedForfeits: [],
      hostId: null,
      connectedIds: [],
    };
  }

  onConnect(conn) {
    this.state.connectedIds.push(conn.id);
    // Send current state to the newly connected client
    conn.send(JSON.stringify({ type: 'STATE_SYNC', state: this.state }));
    // Also broadcast to all OTHER clients so they know someone connected
    this.party.broadcast(JSON.stringify({ type: 'STATE_SYNC', state: this.state }), [conn.id]);
  }

  onClose(conn) {
    this.state.connectedIds = this.state.connectedIds.filter(id => id !== conn.id);
    // Remove from pending players
    this.state.pendingPlayers = this.state.pendingPlayers.filter(p => p.connId !== conn.id);
    // If host disconnects, promote next connected client
    if (this.state.hostId === conn.id && this.state.connectedIds.length > 0) {
      this.state.hostId = this.state.connectedIds[0];
      // Promote in pendingPlayers too
      const newHost = this.state.pendingPlayers.find(p => p.connId === this.state.hostId);
      if (newHost) newHost.isHost = true;
      this.broadcast({ type: 'HOST_CHANGED', newHostId: this.state.hostId });
    }
    this.broadcastState();
  }

  onMessage(message, sender) {
    let msg;
    try {
      msg = JSON.parse(message);
    } catch {
      return;
    }

    switch (msg.type) {
      case 'HOST_INIT': {
        // First player sets themselves as host
        if (!this.state.hostId) {
          this.state.hostId = sender.id;
        }
        // Register host in pending players with their name
        if (!this.state.pendingPlayers.find(p => p.connId === sender.id)) {
          this.state.pendingPlayers.push({
            name: msg.name || 'Host',
            role: msg.role || null,
            isHost: true,
            connId: sender.id,
          });
        }
        this.broadcastState();
        break;
      }

      case 'PLAYER_JOIN': {
        // Guest registers their name in the lobby
        if (!this.state.pendingPlayers.find(p => p.connId === sender.id)) {
          this.state.pendingPlayers.push({
            name: msg.name || 'Guest',
            role: msg.role || null,
            isHost: false,
            connId: sender.id,
          });
        }
        this.broadcastState();
        break;
      }

      case 'GAME_CONFIG': {
        // Host sends game config (mode, players, intensity) to start the game
        if (sender.id !== this.state.hostId) return;
        this.state.mode = msg.mode;
        this.state.players = msg.players;
        this.state.intensity = msg.intensity || 'spicy';
        this.state.phase = 'game';
        this.state.currentPlayerIndex = 0;
        this.state.usedQuestions = [];
        this.state.usedForfeits = [];
        this.state.currentCard = null;
        this.broadcastState();
        break;
      }

      case 'NEXT_QUESTION': {
        if (sender.id !== this.state.hostId) return;
        this.state.currentPlayerIndex = (this.state.currentPlayerIndex + 1) % this.state.players.length;
        this.state.currentCard = msg.card;
        if (msg.targetIndex !== undefined) this.state.currentTargetIndex = msg.targetIndex;
        this.broadcastState();
        break;
      }

      case 'TAKE_FORFEIT': {
        if (sender.id !== this.state.hostId) return;
        this.state.currentCard = msg.card;
        this.broadcastState();
        break;
      }

      case 'SKIP_QUESTION': {
        if (sender.id !== this.state.hostId) return;
        this.state.currentPlayerIndex = (this.state.currentPlayerIndex + 1) % this.state.players.length;
        this.state.currentCard = msg.card;
        this.broadcastState();
        break;
      }

      case 'RESET_GAME': {
        if (sender.id !== this.state.hostId) return;
        this.state.phase = 'lobby';
        this.state.mode = null;
        this.state.players = [];
        this.state.pendingPlayers = [];
        this.state.currentCard = null;
        this.state.usedQuestions = [];
        this.state.usedForfeits = [];
        this.broadcastState();
        break;
      }

      case 'USED_INDICES_UPDATE': {
        // Host keeps server in sync on used questions/forfeits
        if (sender.id !== this.state.hostId) return;
        if (msg.usedQuestions !== undefined) this.state.usedQuestions = msg.usedQuestions;
        if (msg.usedForfeits !== undefined) this.state.usedForfeits = msg.usedForfeits;
        break;
      }
    }
  }

  broadcast(msg) {
    this.party.broadcast(JSON.stringify(msg));
  }

  broadcastState() {
    this.broadcast({ type: 'STATE_SYNC', state: this.state });
  }
}
