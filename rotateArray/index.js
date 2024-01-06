/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let i = 0;
    let j = nums.length - 1;
    while(i < j) {
        [nums[i],nums[j]] = [nums[j],nums[i]];
        i++;
        j--;
    }
    i = 0;
    j = k -1;
    while(i < j) {
        [nums[i],nums[j]] = [nums[j],nums[i]];
        i++;
        j--;
    }
    i = k;
    j = nums.length - 1;
    while(i < j) {
        [nums[i],nums[j]] = [nums[j],nums[i]];
        i++;
        j--;
    }
};