/*
Given an array of integers nums and and integer target, return the indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log("Found index", [i, j]);
        return [i, j];
      }
    }
  }
};

twoSum([2, 4, 2, 12], 16);
twoSum([3, 4, 7, 12], 10);
twoSum([3, 4, 7, 3], 6);
twoSum([7, 4, 7, 3], 14);
