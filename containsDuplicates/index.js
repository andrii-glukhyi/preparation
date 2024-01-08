/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let remain = k - nums[i];
        if(map.has(remain) && Math.abs(map.get(remain) - i) <= k) {
            return true;
        }
        map.set(remain, i);
    }
    return false;
};