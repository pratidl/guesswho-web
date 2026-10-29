import { normalizeString, stripSpaces, levenshteinDistance, stringSimilarity } from './src/utils/normalizeAnswer.js';
import { validateAnswer } from './src/services/answerValidator.js';
import { calculateScore, calculateAverageTime, rankPlayers } from './src/services/scoreCalculator.js';
import { FAMOUS_PEOPLE, CATEGORIES, getGameQuestions } from './src/data/people.js';
import { generateRoomCode } from './src/services/roomService.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('=== TEST 1: Normalization & Levenshtein ===');
assert(normalizeString('Cristiano  Ronaldo! ') === 'cristiano ronaldo', 'Normalizes casing, excessive spaces, punctuation');
assert(stripSpaces('Cristiano Ronaldo') === 'cristianoronaldo', 'Strips spaces properly');
assert(levenshteinDistance('kitten', 'sitting') === 3, 'Levenshtein distance calculation is accurate');
assert(stringSimilarity('Ronaldo', 'Ronaldo') === 1.0, 'Identical strings have similarity 1.0');

console.log('\n=== TEST 2: Answer Validator & Typo Tolerance ===');
const sampleRonaldo = FAMOUS_PEOPLE.find(p => p.id === 'person_019');
assert(Boolean(sampleRonaldo), 'Cristiano Ronaldo exists in dataset');

// Exact
const val1 = validateAnswer('Cristiano Ronaldo', sampleRonaldo);
assert(val1.isCorrect, 'Exact full name matches');

// Case insensitive
const val2 = validateAnswer('cristiano ronaldo', sampleRonaldo);
assert(val2.isCorrect, 'Lower case full name matches');

// No spaces
const val3 = validateAnswer('CristianoRonaldo', sampleRonaldo);
assert(val3.isCorrect, 'No-spaces name matches');

// Alias
const val4 = validateAnswer('CR7', sampleRonaldo);
assert(val4.isCorrect, 'Alias CR7 matches');

const val5 = validateAnswer('Ronaldo', sampleRonaldo);
assert(val5.isCorrect, 'Alias Ronaldo matches');

// Small typo in long name (e.g. "Cristiano Ronald" or "Christiano Ronaldo")
const val6 = validateAnswer('Christiano Ronaldo', sampleRonaldo);
assert(val6.isCorrect, 'Minor typo (Christiano Ronaldo) tolerated');

// Completely different person
const val7 = validateAnswer('Lionel Messi', sampleRonaldo);
assert(!val7.isCorrect, 'Wrong person (Lionel Messi) rejected');

const val8 = validateAnswer('Albert Einstein', sampleRonaldo);
assert(!val8.isCorrect, 'Wrong person (Albert Einstein) rejected');

console.log('\n=== TEST 3: Score Calculator ===');
// score = round(maxScore * (remainingTime / totalTime))
assert(calculateScore(30, 30, 1000) === 1000, 'Score at remaining 30/30 is 1000');
assert(calculateScore(27, 30, 1000) === 900, 'Score at 27s remaining is 900');
assert(calculateScore(15, 30, 1000) === 500, 'Score at 15s remaining is 500');
assert(calculateScore(3, 30, 1000) === 100, 'Score at 3s remaining is 100');
assert(calculateScore(0, 30, 1000) === 0, 'Score at 0s is 0');
assert(calculateAverageTime([{ timeTaken: 5 }, { timeTaken: 15 }]) === 10.0, 'Average time calculated correctly');

const ranked = rankPlayers([
  { id: '1', name: 'Alice', score: 1200 },
  { id: '2', name: 'Bob', score: 1800 },
  { id: '3', name: 'Charlie', score: 1500 }
]);
assert(ranked[0].name === 'Bob' && ranked[0].rank === 1, 'Player ranking correctly orders by score desc');

console.log('\n=== TEST 4: Dataset Integrity ===');
assert(FAMOUS_PEOPLE.length >= 30, `Dataset has ${FAMOUS_PEOPLE.length} figures (minimum 30 required)`);
assert(CATEGORIES.length >= 10, `Has all required categories (${CATEGORIES.length})`);

const ids = new Set();
let duplicates = 0;
let missingFields = 0;

for (const person of FAMOUS_PEOPLE) {
  if (ids.has(person.id)) duplicates++;
  ids.add(person.id);

  if (!person.id || !person.name || !person.category || !person.nationality || !person.profession || !person.hints || person.hints.length < 3 || !person.imageUrl) {
    missingFields++;
  }
}
assert(duplicates === 0, 'All person IDs are unique');
assert(missingFields === 0, 'All persons have complete structured fields & at least 3 hints');

const randomized5 = getGameQuestions('all', 5);
assert(randomized5.length === 5, 'Can fetch 5 randomized questions');

console.log('\n=== TEST 5: Room Code Generator ===');
const code1 = generateRoomCode();
const code2 = generateRoomCode();
assert(code1.length === 6, 'Generated room code has 6 characters');
assert(code1 !== code2, 'Room codes are randomly generated');
assert(/^[23456789ABCDEFGHJKLMNPQRSTUVWXYZ]{6}$/.test(code1), 'Room code contains only valid uppercase non-ambiguous chars');

console.log(`\n========================================`);
console.log(`TOTAL PASSED: ${passed} | FAILED: ${failed}`);
console.log(`========================================`);

if (failed > 0) {
  process.exit(1);
}
