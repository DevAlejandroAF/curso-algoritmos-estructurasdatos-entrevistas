import { isUnique } from "../../src/03-Arrays-Strings-HashTables/01_isUnique";

describe("Test in algoritmos-03", () => {
  test("isUnique should return true", () => {
    expect(true).toBe(isUnique("abcde"));
  });

  test("isUnique should return true", () => {
    expect(true).toBe(isUnique("AaBbCcDdEe"));
  });

  test("isUnique should return false", () => {
    expect(false).toBe(isUnique("abcded"));
  });
});
