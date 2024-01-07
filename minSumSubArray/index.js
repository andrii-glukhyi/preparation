/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let min = Number.MAX_VALUE;
    let sum = 0;
    for(let end = 0; end < nums.length; end++) {
        sum += nums[end];
        while(sum >= target) {
            min = Math.min(min, end - start + 1);
            sum-= nums[start];
            start++;
        }
    }
    return min === Number.MAX_VALUE ? 0 : min;
};