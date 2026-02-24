/**
 * Kink and Tell — Multiplayer Client
 * Uses PartySocket to connect to the PartyKit server.
 * Falls back gracefully if PartyKit is unreachable.
 */
import PartySocket from 'partysocket';

const PARTYKIT_HOST = 'kink-and-tell.reyewon.partykit.dev';

export class MultiplayerClient {
  constructor(roomCode, playerName) {
    this.roomCode = roomCode;
    this.playerName = playerName;
    this.socket = null;
    this.handlers = {};
    this.isConnected = false;
    this.isHost = false;
  }

  on(event, fn) {
    this.handlers[event] = fn;
    return this;
  }

  emit(event, data) {
    const fn = this.handlers[event];
    if (fn) fn(data);
  }

  async connect() {
    return new Promise((resolve, reject) => {
      try {
        this.socket = new PartySocket({
          host: PARTYKIT_HOST,
          room: this.roomCode.toLowerCase(),
          query: { name: this.playerName },
        });

        this.socket.addEventListener('open', () => {
          this.isConnected = true;
          resolve();
        });

        this.socket.addEventListener('message', (event) => {
          try {
            const msg = JSON.parse(event.data);
            this.emit(msg.type, msg.state || msg);
          } catch (_) {}
        });

        this.socket.addEventListener('error', (err) => {
          console.warn('PartyKit connection error:', err);
          reject(err);
        });

        this.socket.addEventListener('close', () => {
          this.isConnected = false;
        });

        // Timeout after 8 seconds
        setTimeout(() => {
          if (!this.isConnected) reject(new Error('Connection timeout'));
        }, 8000);

      } catch (err) {
        reject(err);
      }
    });
  }

  send(msg) {
    if (!this.socket || !this.isConnected) return;
    try {
      this.socket.send(JSON.stringify(msg));
    } catch (_) {}
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
    this.isConnected = false;
  }
}
