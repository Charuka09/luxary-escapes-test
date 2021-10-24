"use strict";
/**
2Sum
Given an array of integers nums and an integer target, return the indices of the two distinct numbers such that they add up to target. Return [-1, -1] if it does not exist.

Example:

nums = [1,2,3,4], target = 5
answer [0, 3]

nums = [1,2,3,4,5], target = -5
answer [-1, -1]

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
const twoSum = function (nums, target) {
    let cache = new Map();
    //recording all difference of the values with the target in to a Map
    nums.forEach((num, index) => {
        cache.set(target - num, index);
    });
    for (let i = 0; i < nums.length; i++) {
        //checking whether the diff is in the cache.
        if (cache.has(nums[i])) {
            //if the value is in the cache return the indices of them in the nums array
            return [i, cache.get(nums[i])];
        }
    }
    //if the values are not there, return [-1,-1]
    return [-1, -1];
};
console.log(twoSum([1, 2, 3, 4], 5));
