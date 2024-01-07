/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res = [];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    for(let i = 0; i < nums.length; i++) {
        while(nums[i] <= num) {
            num -= nums[i];
            res.push(roman[i]);
        }
    }
    return res.join("");
};