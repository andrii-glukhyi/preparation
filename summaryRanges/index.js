/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    let i = 0;

    while(i < nums.length) {
        let start = nums[i];
        while(i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
            i++;
        }
        if(start != nums[i]) {
            res.push(`${start}->${nums[i]}`)
        } else {
            res.push(`${nums[i]}`);
        }
        i++;
    }
    return res;
};