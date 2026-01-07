/** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?**/

/* Brute force solution */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum1 = function(nums, target) {
    for (let indexX = 0; indexX < nums.length; indexX++) {
            for (let indexY = indexX+1; indexY < nums.length; indexY++) {
                const isCorrect = nums[indexX] + nums[indexY] === target
                if(isCorrect) return [indexX, indexY]
         }
    }

};

/* Time complexity is quadratic O(n2) since for every element in the array I have to search accross the remaining elements every single time */

console.log(twoSum1([1,2,3,4], 4))

/* Optimized solution */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum2 = function(nums, target) {
    const seen = {}
    for (let indexX = 0; indexX < nums.length; indexX++) {
        const current = nums[indexX]
        const counterPart = target - current
        if(seen[counterPart] !== undefined){
            return [seen[counterPart], indexX]
        }
        seen[current] = indexX
    }
};
/*Time complexity is Linear O(n) since for each element of the array we will have to check it only once*/
console.log(twoSum2([1,4,3,7,3,6], 8))
