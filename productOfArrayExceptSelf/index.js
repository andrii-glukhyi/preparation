/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let sufficsArr = new Array(nums.length);
    let prefixArr = new Array(nums.length);
    prefixArr[0] = 1;
    let index = 1;
    while(index < nums.length) {
        prefixArr[index] = nums[index-1] * prefixArr[index-1];
        index++;
    }
    sufficsArr[nums.length-1] = 1;
    index = nums.length-2;
    while(index >= 0) {
        sufficsArr[index] = nums[index+1] * sufficsArr[index+1];
        index--;
    }
    console.log(sufficsArr, prefixArr)
    for(let i = 0; i < nums.length; i++) {
        nums[i] = prefixArr[i] * sufficsArr[i];
    }
    return nums
};