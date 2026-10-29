import { get, ref } from 'firebase/database';
import { db, isFirebaseConfigured } from './firebaseService.js';

/**
 * Load admin-edited people data from Firebase before creating a game.
 * The existing synchronous dataset functions read localStorage, so cache the
 * cloud overrides there before getGameQuestions() is called.
 */
export async function syncPeopleOverridesFromFirebase() {
  if (!isFirebaseConfigured || !db || typeof window === 'undefined') return false;
  const snapshot = await get(ref(db, 'adminOverrides/people'));
  if (!snapshot.exists()) return false;

  const overrides = snapshot.val() || {};
  const imageOverrides = Object.fromEntries(
    Object.entries(overrides)
      .filter(([, value]) => value && typeof value.imageUrl === 'string' && value.imageUrl.trim())
      .map(([id, value]) => [id, value.imageUrl.trim()])
  );
  localStorage.setItem('guesswho_people_overrides', JSON.stringify(overrides));
  localStorage.setItem('guesswho_image_overrides', JSON.stringify(imageOverrides));
  return true;
}
