import { onValue, ref, set } from 'firebase/database';
import { db } from './firebaseService.js';

const STORAGE_KEY = 'guesswho_image_overrides';

export function readLocalImageOverrides() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}

export function subscribeToImageOverrides(callback, onError) {
  if (!db) {
    callback(readLocalImageOverrides());
    return () => {};
  }
  return onValue(
    ref(db, 'imageOverrides'),
    (snapshot) => {
      const value = snapshot.val() || {};
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); } catch {}
      callback(value);
    },
    (error) => {
      console.error('[GuessWho] Gagal membaca override gambar dari Firebase:', error);
      if (onError) onError(error);
      callback(readLocalImageOverrides());
    }
  );
}

export async function saveImageOverrides(overrides) {
  // Simpan lokal agar perubahan langsung terlihat di perangkat admin.
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  if (!db) throw new Error('Firebase Realtime Database belum dikonfigurasi.');
  await set(ref(db, 'imageOverrides'), overrides);
}

export async function saveSingleImageOverride(personId, imageUrl) {
  if (!db) throw new Error('Firebase Realtime Database belum dikonfigurasi.');
  const current = readLocalImageOverrides();
  const next = { ...current };
  if (imageUrl) next[personId] = imageUrl;
  else delete next[personId];
  await saveImageOverrides(next);
  return next;
}
