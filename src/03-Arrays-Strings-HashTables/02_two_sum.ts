/*
 * Dado un array de números enteros y un target, retorna los índices de dos
 * números para los que la suma de ambos sea igual al target.
 *
 * Puedes asumir que hay solamente una solución.
 *
 * Ejemplo 1:
 *  Input: nums = [9,2,5,6], target = 7
 *  Output: [1,2]
 *  Explicación: nums[1] + nums[2] == 7, devolvemos [1, 2].
 *
 * Ejemplo 2:
 *  Input: nums = [9,2,5,6], target = 100
 *  Output: null
 */

export const twoSum = (nums: number[], target: number): number[] | null => {
  if (nums == null || nums.length < 2) return null;
  const compMap: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (compMap.has(nums[i])) return new Array(i, compMap.get(nums[i])!);
    const complement = target - nums[i];
    compMap.set(complement, i);
  }
  return null;
};
