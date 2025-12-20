/*
 * Dado un método que recibe una String, comprobar si todos los caracteres son únicos o no.
 *
 * isUnique("abcde") => true;
 * isUnique("abcded") => false;
 */

const NUMBER_OF_CHARS = 128;

export function isUnique(w: string): boolean {
  if (w.length > NUMBER_OF_CHARS) return false;

  const set = new Set();
  for (const c of w) {
    if (set.has(c)) return false;
    set.add(c)
  }

  return true;
}
