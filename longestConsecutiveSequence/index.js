/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let len = 0
    let set = new Set()
    for(let n of nums) {
        set.add(n);
    }
    for (let n of set) {
        if(!set.has(n - 1)) {
            let curentNum = n
            let curentLen = 0;
            while(set.has(curentNum)) {
                curentNum = curentNum + 1
                curentLen++;
            }
            len = Math.max(len, curentLen)
        }
    }
    return len
};