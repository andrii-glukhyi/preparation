// Given two strings str1 and str2 of the same length, determine whether you can transform str1 into str2 by doing zero or more conversions.
//
//     In one conversion you can convert all occurrences of one character in str1 to any other lowercase English character.
//
//     Return true if and only if you can transform str1 into str2.
//
//
//
//     Example 1:
//
// Input: str1 = "aabcc", str2 = "ccdee"
// Output: true
// Explanation: Convert 'c' to 'e' then 'b' to 'd' then 'a' to 'c'. Note that the order of conversions matter.
//     Example 2:
//
// Input: str1 = "leetcode", str2 = "codeleet"
// Output: false
// Explanation: There is no way to transform str1 to str2.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canConvert = function(str1, str2) {
    if(str1 === str2) {
        return true;
    }
    let conversionMapping = new Map();
    let uniqChars = new Set();
    for(let index = 0; index < str1.length; index++) {
        let charOne = str1[index];
        let charTwo = str2[index];
        if(conversionMapping.get(charOne)) {
            if(conversionMapping.get(charOne) !== charTwo) {
                return false;
            }
        } else {
            conversionMapping.set(charOne, charTwo)
        }
        uniqChars.add(charTwo);
    }
    if(uniqChars.size >= 26) {
        return false;
    }
    return true;
};