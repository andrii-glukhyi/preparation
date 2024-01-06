/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 1;
    let counter = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            counter++;
        } else {
            counter = 1;
        }
        if(counter <= 2) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};