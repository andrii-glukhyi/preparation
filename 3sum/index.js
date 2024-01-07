/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    let res = new Set();
    for(let i = 0; i < nums.length - 2; i ++) {
        twoSum(nums, 0, i, i+1, nums.length -1, res);
    }
    return [...res].map(n => n.split(","));
};

var twoSum = function(arr, target, a, b, c, res) {
    while(b < c) {
        let sum = arr[a] + arr[b] + arr[c];
        if(sum === target) {
            res.add(`${arr[a]},${arr[b]},${arr[c]}`)
            b++;
            c--;
        } else if(sum < target) {
            b++
        } else {
            c--
        }
    }
}