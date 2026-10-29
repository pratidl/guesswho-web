import { normalizeString, stripSpaces, levenshteinDistance, stringSimilarity } from '../utils/normalizeAnswer.js';

/**
 * Validates a user's typed answer against a person's accepted answers, aliases, and canonical name.
 * 
 * @param {string} userAnswer - The text submitted by player
 * @param {object} person - The target person object
 * @returns {{ isCorrect: boolean, matchedAnswer: string | null, similarity: number, feedback?: string }}
 */
export function validateAnswer(userAnswer, person) {
  if (!userAnswer || !person) {
    return { isCorrect: false, matchedAnswer: null, similarity: 0, feedback: 'Jawaban kosong' };
  }

  const cleanUser = normalizeString(userAnswer);
  const strippedUser = stripSpaces(userAnswer);

  if (cleanUser.length === 0) {
    return { isCorrect: false, matchedAnswer: null, similarity: 0, feedback: 'Jawaban tidak valid' };
  }

  // Aggregate all possible accepted answer variations
  const candidates = new Set();

  if (person.name) candidates.add(person.name);
  if (Array.isArray(person.acceptedAnswers)) {
    person.acceptedAnswers.forEach((ans) => candidates.add(ans));
  }
  if (Array.isArray(person.aliases)) {
    person.aliases.forEach((alias) => candidates.add(alias));
  }

  let bestMatch = null;
  let highestSimilarity = 0;

  for (const candidate of candidates) {
    const cleanCand = normalizeString(candidate);
    const strippedCand = stripSpaces(candidate);

    // 1. Exact match after standard normalization
    if (cleanUser === cleanCand) {
      return {
        isCorrect: true,
        matchedAnswer: candidate,
        similarity: 1.0,
        feedback: 'Jawaban tepat!'
      };
    }

    // 2. Exact match when spaces are completely stripped (e.g. "CristianoRonaldo")
    if (strippedUser === strippedCand && strippedUser.length >= 4) {
      return {
        isCorrect: true,
        matchedAnswer: candidate,
        similarity: 0.98,
        feedback: 'Jawaban tepat!'
      };
    }

    // 3. Levenshtein fuzzy matching
    const dist = levenshteinDistance(cleanUser, cleanCand);
    const maxLen = Math.max(cleanUser.length, cleanCand.length);
    const sim = 1 - dist / maxLen;

    if (sim > highestSimilarity) {
      highestSimilarity = sim;
      bestMatch = candidate;
    }

    // Determine acceptable distance threshold based on target length
    let allowedDistance = 0;
    if (cleanCand.length <= 4) {
      allowedDistance = 0; // Short names like "Ali", "Ed" require exact match
    } else if (cleanCand.length <= 7) {
      allowedDistance = 1; // "Ronaldo" -> "Ronaldd" (1 typo allowed)
    } else if (cleanCand.length <= 13) {
      allowedDistance = 2; // "Steve Jobs" -> "Stev Jobss" (2 typos allowed)
    } else {
      allowedDistance = 3; // "Cristiano Ronaldo" (up to 3 typos allowed)
    }

    if (dist <= allowedDistance && sim >= 0.78) {
      return {
        isCorrect: true,
        matchedAnswer: candidate,
        similarity: sim,
        feedback: sim === 1.0 ? 'Jawaban tepat!' : 'Hampir sempurna (sedikit typo dimaafkan)!'
      };
    }

    // Check stripped space distance as well
    const strippedDist = levenshteinDistance(strippedUser, strippedCand);
    const strippedMaxLen = Math.max(strippedUser.length, strippedCand.length);
    const strippedSim = 1 - strippedDist / strippedMaxLen;

    if (strippedDist <= allowedDistance && strippedSim >= 0.8 && strippedCand.length >= 5) {
      return {
        isCorrect: true,
        matchedAnswer: candidate,
        similarity: strippedSim,
        feedback: 'Jawaban tepat!'
      };
    }
  }

  // Not matched
  return {
    isCorrect: false,
    matchedAnswer: bestMatch,
    similarity: highestSimilarity,
    feedback: highestSimilarity > 0.65 ? 'Hampir tepat! Coba periksa ejaannya lagi.' : 'Belum tepat, coba tebak lagi!'
  };
}
