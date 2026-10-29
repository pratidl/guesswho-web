import { ref, set, get, update, remove, onValue, off } from 'firebase/database';
import { db, isFirebaseConfigured } from './firebaseService.js';
import { getGameQuestions } from '../data/people.js';
import { syncPeopleOverridesFromFirebase } from './peopleOverridesService.js';

const ROOMS_STORAGE_KEY = 'guesswho_local_rooms';
const BROADCAST_CHANNEL_NAME = 'guesswho_multiplayer_sync';

// Local event emitter & broadcast fallback for instant multi-tab testing
let broadcastChannel = null;
if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
  try {
    broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
  } catch (e) {
    console.warn('[BroadcastChannel] Not available, falling back to storage events', e);
  }
}

/**
 * Generates an uppercase 6-character room code (avoiding ambiguous characters 0, O, 1, I)
 */
export function generateRoomCode() {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Reads local storage room registry
 */
function getLocalRooms() {
  try {
    const raw = localStorage.getItem(ROOMS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Saves local storage room registry and notifies other tabs
 */
function saveLocalRooms(rooms) {
  try {
    localStorage.setItem(ROOMS_STORAGE_KEY, JSON.stringify(rooms));
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'ROOM_UPDATE', timestamp: Date.now() });
    }
  } catch (e) {
    console.error('Failed to save local rooms', e);
  }
}

/**
 * Creates a new multiplayer room
 */
export async function createRoom({ hostName, hostId, settings }) {
  const code = generateRoomCode();
  const initialSettings = {
    category: settings?.category || 'all',
    roundCount: settings?.roundCount || 5,
    roundDuration: settings?.roundDuration || 30
  };

  const initialRoom = {
    code,
    createdAt: Date.now(),
    hostId,
    status: 'lobby', // 'lobby' | 'playing' | 'round_reveal' | 'finished'
    settings: initialSettings,
    currentRoundIndex: 0,
    roundStartTime: null,
    roundEndTime: null,
    questions: [],
    players: {
      [hostId]: {
        id: hostId,
        name: hostName,
        score: 0,
        isHost: true,
        isConnected: true,
        avatarSeed: Math.floor(Math.random() * 100),
        roundAnswers: {}
      }
    }
  };

  if (isFirebaseConfigured && db) {
    const roomRef = ref(db, `rooms/${code}`);
    await set(roomRef, initialRoom);
  } else {
    const rooms = getLocalRooms();
    rooms[code] = initialRoom;
    saveLocalRooms(rooms);
  }

  return { code, room: initialRoom };
}

/**
 * Join an existing room
 */
export async function joinRoom(code, { playerId, playerName }) {
  const cleanCode = (code || '').trim().toUpperCase();

  if (isFirebaseConfigured && db) {
    const roomRef = ref(db, `rooms/${cleanCode}`);
    const snapshot = await get(roomRef);
    if (!snapshot.exists()) {
      throw new Error(`Room dengan kode ${cleanCode} tidak ditemukan!`);
    }

    const room = snapshot.val();
    if (room.status === 'finished') {
      throw new Error('Permainan pada room ini telah selesai.');
    }

    const playerList = Object.values(room.players || {});
    if (playerList.length >= 8 && !room.players?.[playerId]) {
      throw new Error('Room sudah penuh (maksimal 8 pemain).');
    }

    const updatedPlayerData = {
      id: playerId,
      name: playerName,
      score: room.players?.[playerId]?.score || 0,
      isHost: room.players?.[playerId]?.isHost || false,
      isConnected: true,
      avatarSeed: room.players?.[playerId]?.avatarSeed || Math.floor(Math.random() * 100),
      roundAnswers: room.players?.[playerId]?.roundAnswers || {}
    };

    await update(ref(db, `rooms/${cleanCode}/players/${playerId}`), updatedPlayerData);
    return { code: cleanCode };
  } else {
    // Local fallback
    const rooms = getLocalRooms();
    const room = rooms[cleanCode];

    if (!room) {
      throw new Error(`Room dengan kode ${cleanCode} tidak ditemukan!`);
    }

    if (room.status === 'finished') {
      throw new Error('Permainan pada room ini telah selesai.');
    }

    const playerList = Object.values(room.players || {});
    if (playerList.length >= 8 && !room.players?.[playerId]) {
      throw new Error('Room sudah penuh (maksimal 8 pemain).');
    }

    room.players = room.players || {};
    room.players[playerId] = {
      id: playerId,
      name: playerName,
      score: room.players[playerId]?.score || 0,
      isHost: room.players[playerId]?.isHost || false,
      isConnected: true,
      avatarSeed: room.players[playerId]?.avatarSeed || Math.floor(Math.random() * 100),
      roundAnswers: room.players[playerId]?.roundAnswers || {}
    };

    saveLocalRooms(rooms);
    return { code: cleanCode };
  }
}

/**
 * Subscribe to real-time updates for a room
 */
export function subscribeToRoom(code, onUpdate, onError) {
  const cleanCode = (code || '').trim().toUpperCase();

  if (isFirebaseConfigured && db) {
    const roomRef = ref(db, `rooms/${cleanCode}`);
    const listener = onValue(
      roomRef,
      (snapshot) => {
        if (snapshot.exists()) {
          onUpdate(snapshot.val());
        } else {
          onUpdate(null);
        }
      },
      (error) => {
        if (onError) onError(error);
      }
    );

    return () => off(roomRef, 'value', listener);
  } else {
    // Local storage & BroadcastChannel real-time subscription
    const notify = () => {
      const rooms = getLocalRooms();
      const room = rooms[cleanCode] || null;
      onUpdate(room);
    };

    // Initial load
    notify();

    const handleBroadcast = (e) => {
      if (e.data && e.data.type === 'ROOM_UPDATE') {
        notify();
      }
    };

    const handleStorageEvent = (e) => {
      if (e.key === ROOMS_STORAGE_KEY) {
        notify();
      }
    };

    if (broadcastChannel) {
      broadcastChannel.addEventListener('message', handleBroadcast);
    }
    window.addEventListener('storage', handleStorageEvent);

    return () => {
      if (broadcastChannel) {
        broadcastChannel.removeEventListener('message', handleBroadcast);
      }
      window.removeEventListener('storage', handleStorageEvent);
    };
  }
}

/**
 * Update room settings (Host only)
 */
export async function updateRoomSettings(code, newSettings) {
  const cleanCode = (code || '').trim().toUpperCase();

  if (isFirebaseConfigured && db) {
    await update(ref(db, `rooms/${cleanCode}/settings`), newSettings);
  } else {
    const rooms = getLocalRooms();
    if (rooms[cleanCode]) {
      rooms[cleanCode].settings = {
        ...rooms[cleanCode].settings,
        ...newSettings
      };
      saveLocalRooms(rooms);
    }
  }
}

/**
 * Start the multiplayer game (Host only)
 */
export async function startRoomGame(code, settings) {
  const cleanCode = (code || '').trim().toUpperCase();
  const count = settings?.roundCount || 5;
  const category = settings?.category || 'all';
  const duration = settings?.roundDuration || 30;

  // Pull admin-edited photos, answers and hints before generating the shared question set.
  try { await syncPeopleOverridesFromFirebase(); } catch (error) { console.warn('[GuessWho] Gagal menyinkronkan override tokoh sebelum multiplayer:', error); }
  const questions = getGameQuestions(category, count);
  const now = Date.now();

  const updates = {
    status: 'playing',
    currentRoundIndex: 0,
    roundStartTime: now,
    roundEndTime: now + duration * 1000,
    questions
  };

  if (isFirebaseConfigured && db) {
    await update(ref(db, `rooms/${cleanCode}`), updates);
  } else {
    const rooms = getLocalRooms();
    if (rooms[cleanCode]) {
      // Reset player scores & round answers for fresh game
      Object.keys(rooms[cleanCode].players || {}).forEach((pId) => {
        rooms[cleanCode].players[pId].score = 0;
        rooms[cleanCode].players[pId].roundAnswers = {};
      });

      rooms[cleanCode] = {
        ...rooms[cleanCode],
        ...updates
      };
      saveLocalRooms(rooms);
    }
  }
}

/**
 * Submit answer for the current round
 */
export async function submitRoomAnswer(code, playerId, roundIndex, answerData) {
  const cleanCode = (code || '').trim().toUpperCase();

  if (isFirebaseConfigured && db) {
    const playerAnswerRef = ref(db, `rooms/${cleanCode}/players/${playerId}/roundAnswers/${roundIndex}`);
    await set(playerAnswerRef, answerData);

    // If answer is correct, also increment total score atomically
    if (answerData.isCorrect && answerData.score > 0) {
      const playerRef = ref(db, `rooms/${cleanCode}/players/${playerId}`);
      const snap = await get(playerRef);
      if (snap.exists()) {
        const curScore = snap.val().score || 0;
        await update(playerRef, { score: curScore + answerData.score });
      }
    }
  } else {
    const rooms = getLocalRooms();
    const room = rooms[cleanCode];
    if (room && room.players?.[playerId]) {
      room.players[playerId].roundAnswers = room.players[playerId].roundAnswers || {};
      
      // Prevent double score addition if already answered this round
      if (!room.players[playerId].roundAnswers[roundIndex]) {
        room.players[playerId].roundAnswers[roundIndex] = answerData;
        if (answerData.isCorrect && answerData.score > 0) {
          room.players[playerId].score = (room.players[playerId].score || 0) + answerData.score;
        }
        saveLocalRooms(rooms);
      }
    }
  }
}

/**
 * Triggers round reveal screen (Host or auto upon timeout/all answered)
 */
export async function revealRoomRound(code) {
  const cleanCode = (code || '').trim().toUpperCase();

  if (isFirebaseConfigured && db) {
    await update(ref(db, `rooms/${cleanCode}`), { status: 'round_reveal' });
  } else {
    const rooms = getLocalRooms();
    if (rooms[cleanCode]) {
      rooms[cleanCode].status = 'round_reveal';
      saveLocalRooms(rooms);
    }
  }
}

/**
 * Move to next round or finish game if last round completed
 */
export async function nextRoomRound(code, nextIndex, duration = 30) {
  const cleanCode = (code || '').trim().toUpperCase();

  const handleNext = (room) => {
    const isFinished = nextIndex >= (room.questions?.length || 0);
    const now = Date.now();
    return {
      status: isFinished ? 'finished' : 'playing',
      currentRoundIndex: nextIndex,
      roundStartTime: isFinished ? null : now,
      roundEndTime: isFinished ? null : now + duration * 1000
    };
  };

  if (isFirebaseConfigured && db) {
    const snap = await get(ref(db, `rooms/${cleanCode}`));
    if (snap.exists()) {
      const room = snap.val();
      const updates = handleNext(room);
      await update(ref(db, `rooms/${cleanCode}`), updates);
    }
  } else {
    const rooms = getLocalRooms();
    if (rooms[cleanCode]) {
      const updates = handleNext(rooms[cleanCode]);
      rooms[cleanCode] = { ...rooms[cleanCode], ...updates };
      saveLocalRooms(rooms);
    }
  }
}

/**
 * Restart room to lobby for another game
 */
export async function resetRoomToLobby(code) {
  const cleanCode = (code || '').trim().toUpperCase();

  const resetData = {
    status: 'lobby',
    currentRoundIndex: 0,
    roundStartTime: null,
    roundEndTime: null,
    questions: []
  };

  if (isFirebaseConfigured && db) {
    await update(ref(db, `rooms/${cleanCode}`), resetData);
  } else {
    const rooms = getLocalRooms();
    if (rooms[cleanCode]) {
      // Reset scores and answers
      Object.keys(rooms[cleanCode].players || {}).forEach((pId) => {
        rooms[cleanCode].players[pId].score = 0;
        rooms[cleanCode].players[pId].roundAnswers = {};
      });
      rooms[cleanCode] = { ...rooms[cleanCode], ...resetData };
      saveLocalRooms(rooms);
    }
  }
}

/**
 * Player leaves the room
 */
export async function leaveRoom(code, playerId) {
  if (!code || !playerId) return;
  const cleanCode = code.trim().toUpperCase();

  if (isFirebaseConfigured && db) {
    const playerRef = ref(db, `rooms/${cleanCode}/players/${playerId}`);
    await remove(playerRef);

    // If host left, check if other players exist and promote the first one
    const roomSnap = await get(ref(db, `rooms/${cleanCode}`));
    if (roomSnap.exists()) {
      const room = roomSnap.val();
      const remainingPlayers = Object.values(room.players || {});
      if (remainingPlayers.length === 0) {
        await remove(ref(db, `rooms/${cleanCode}`));
      } else if (room.hostId === playerId) {
        const nextHost = remainingPlayers[0];
        await update(ref(db, `rooms/${cleanCode}`), { hostId: nextHost.id });
        await update(ref(db, `rooms/${cleanCode}/players/${nextHost.id}`), { isHost: true });
      }
    }
  } else {
    const rooms = getLocalRooms();
    const room = rooms[cleanCode];
    if (room && room.players?.[playerId]) {
      delete room.players[playerId];
      const remainingPlayers = Object.values(room.players || {});
      if (remainingPlayers.length === 0) {
        delete rooms[cleanCode];
      } else if (room.hostId === playerId) {
        const nextHost = remainingPlayers[0];
        room.hostId = nextHost.id;
        room.players[nextHost.id].isHost = true;
      }
      saveLocalRooms(rooms);
    }
  }
}
