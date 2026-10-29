/**
 * Normalizes input text by:
 * - Lowercasing
 * - Stripping diacritics / accents
 * - Removing special characters and punctuation
 * - Collapsing multiple spaces into single space
 * - Trimming
 */
export function normalizeString(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^a-z0-9\s]/g, '') // remove punctuation & special chars
    .replace(/\s+/g, ' ') // collapse multiple spaces
    .trim();
}

/**
 * Removes all spaces from normalized string for condensed comparison
 * e.g., "Cristiano Ronaldo" -> "cristianoronaldo"
 */
export function stripSpaces(str) {
  return normalizeString(str).replace(/\s+/g, '');
}

/**
 * Calculates Levenshtein Distance between two strings
 */
export function levenshteinDistance(a, b) {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const dp = Array.from({ length: m + 1 }, () => new Uint8Array(n + 1));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // deletion
        dp[i][j - 1] + 1, // insertion
        dp[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return dp[m][n];
}

/**
 * Computes similarity ratio between 0 and 1
 */
export function stringSimilarity(strA, strB) {
  const normA = normalizeString(strA);
  const normB = normalizeString(strB);
  if (normA === normB) return 1.0;
  if (!normA.length || !normB.length) return 0.0;

  const dist = levenshteinDistance(normA, normB);
  const maxLen = Math.max(normA.length, normB.length);
  return 1 - dist / maxLen;
}
