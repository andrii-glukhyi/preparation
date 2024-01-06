/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let last = s.length - 1;
    while(last >= 0 && s[last] === " ") {
        last--;
    }
    let first = last;
    while(first >= 0 && s[first] !== " ") {
        first--;
    }
    return last-first;
};