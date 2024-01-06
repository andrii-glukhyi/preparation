/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let counter = 0;
    let curFar = 0;
    let curEnd = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        curFar = Math.max(curFar, i + nums[i]);
        if(i === curEnd) {
            counter += 1;
            curEnd = curFar
        }
    }
    return counter
};