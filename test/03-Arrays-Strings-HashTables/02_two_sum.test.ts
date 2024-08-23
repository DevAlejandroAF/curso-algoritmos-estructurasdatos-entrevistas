import { twoSum } from "../../src/03-Arrays-Strings-HashTables/02_two_sum";

describe(" Test in 02_two_sum.ts", () => {
  test("should return [1,2]", () => {
    const nums: number[] = [9, 2, 5, 6];
    expect([1, 2]).toEqual(twoSum(nums, 7)!.sort());
  });
});
