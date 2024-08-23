/*
 * Dado un método que recibe una String, comprobar si todos los caracteres son únicos o no.
 *
 * isUnique("abcde") => true;
 * isUnique("abcded") => false;
 */

const NUMBER_OF_CHARS = 128;

export function isUnique(str: string): boolean {
  if (str.length > NUMBER_OF_CHARS) return false;

  const characters = new Set();
  for (const char of str) {
    if (characters.has(char)) return false;
    characters.add(char);
  }

  return true;
}
