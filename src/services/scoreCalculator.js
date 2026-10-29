/**
 * Score Calculator Service
 * Implements speed-based scoring:
 * score = Math.round(maxScore * (remainingTime / totalTime))
 */

export const SCORE_CONFIG = {
  DEFAULT_MAX_SCORE: 1000,
  DEFAULT_ROUND_DURATION: 30, // seconds
  MIN_CORRECT_SCORE: 100, // minimum reward points for answering correctly before timeout
};

/**
 * Calculates score for a round based on remaining time.
 * 
 * @param {number} remainingTime - Time left in seconds (or fractional seconds)
 * @param {number} totalTime - Total duration of the round in seconds
 * @param {number} maxScore - Maximum score possible for the round
 * @returns {number} Score earned (rounded, never negative)
 */
export function calculateScore(
  remainingTime,
  totalTime = SCORE_CONFIG.DEFAULT_ROUND_DURATION,
  maxScore = SCORE_CONFIG.DEFAULT_MAX_SCORE
) {
  if (remainingTime <= 0 || totalTime <= 0) {
    return 0;
  }

  const ratio = Math.min(1, Math.max(0, remainingTime / totalTime));
  const rawScore = Math.round(maxScore * ratio);

  // Guarantee minimum bonus for correctly guessing before buzzer
  return Math.max(SCORE_CONFIG.MIN_CORRECT_SCORE, rawScore);
}

/**
 * Calculates average response time in seconds
 * 
 * @param {Array<{ timeTaken: number }>} roundResults
 * @returns {number} Average time in seconds (rounded to 1 decimal place)
 */
export function calculateAverageTime(roundResults) {
  if (!roundResults || roundResults.length === 0) return 0;
  const total = roundResults.reduce((acc, curr) => acc + (curr.timeTaken || 0), 0);
  return Number((total / roundResults.length).toFixed(1));
}

/**
 * Ranks players in descending order of score, with ties broken by fastest answer time
 * 
 * @param {Array<object>} players
 * @returns {Array<object>} Sorted players with rank property
 */
export function rankPlayers(players) {
  if (!players || !Array.isArray(players)) return [];
  const sorted = [...players].sort((a, b) => {
    if ((b.score || 0) !== (a.score || 0)) {
      return (b.score || 0) - (a.score || 0);
    }
    return (a.totalTimeTaken || 0) - (b.totalTimeTaken || 0);
  });

  return sorted.map((p, idx) => ({
    ...p,
    rank: idx + 1
  }));
}
