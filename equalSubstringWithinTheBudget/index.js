// You are given two strings s and t of the same length and an integer maxCost.
//
//     You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).
//
// Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0.
//

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let curentCost = 0;
    let beg = 0;
    let maxLength = 0;
    for(let end = 0; end < s.length; end++) {
        let chars = s.charCodeAt(end);
        let chart = t.charCodeAt(end);
        curentCost += Math.abs(chars - chart);
        while(curentCost > maxCost) {
            console.log(curentCost, s[beg]);
            chars = s.charCodeAt(beg);
            chart = t.charCodeAt(beg);
            curentCost -= Math.abs(chars - chart);
            beg++;
        }
        maxLength = Math.max(maxLength, end - beg + 1);
    }
    return maxLength;
};