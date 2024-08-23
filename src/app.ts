import { isUnique } from "./03-Arrays-Strings-HashTables/01_isUnique";
import { twoSum } from "./03-Arrays-Strings-HashTables/02_two_sum";

// 01_isUnique
console.log(isUnique("abcde"));

// 02_two_sum
const nums: number[] = [9, 2, 5, 6];
const target: number = 7;
console.log(twoSum(nums, target)!.sort());
