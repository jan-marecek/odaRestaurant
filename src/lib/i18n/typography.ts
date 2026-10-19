const NON_BREAKING_SPACE = ' ';

/** A single letter: the Czech prepositions k, o, s, u, v, z and conjunctions a, i. */
const SINGLE_LETTER = /^\p{L}$/u;

/**
 * Czech typography does not leave a one-letter word at the end of a line.
 * Bind each to the word that follows with a non-breaking space.
 *
 * This runs where the markup is produced. The site is prerendered, so for
 * every page that means build time and the result is baked into the static
 * HTML -- it does not depend on the reader having JavaScript. Keeping it out
 * of content.ts means the strings there stay readable and nobody has to type
 * an invisible character to keep the rule when they edit the copy.
 *
 * Any single-letter word is bound, not just the Czech set, so "a" in the
 * English copy and the "a" of "a la carte" are covered too. Numbers are left
 * alone: "2,5 hodiny" is a separate rule and was deliberately not taken on.
 */
export function bindSingleLetters(text: string): string {
  return text.replace(/(\S+)( +)/g, (match, word: string, spaces: string) =>
    spaces.length === 1 && SINGLE_LETTER.test(word) ? word + NON_BREAKING_SPACE : match
  );
}
