import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

/**
 * Firebase Configuration
 * Read from environment variables (see .env.example)
 */
const env = (typeof import.meta !== 'undefined' && import.meta.env) 
  ? import.meta.env 
  : (typeof process !== 'undefined' && process.env ? process.env : {});

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || '',
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || '',
  databaseURL: env.VITE_FIREBASE_DATABASE_URL || '',
  projectId: env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: env.VITE_FIREBASE_APP_ID || ''
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.databaseURL &&
  firebaseConfig.projectId
);

let app = null;
let db = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getDatabase(app);
    console.log('[Firebase] Realtime Database initialized successfully.');
  } catch (err) {
    console.warn('[Firebase] Initialization error, fallback active:', err);
  }
} else {
  console.info('[GuessWho] Running in local high-speed multiplayer mode (Broadcast/Storage adapter). To use Firebase cloud, configure .env.local');
}

export { app, db };
