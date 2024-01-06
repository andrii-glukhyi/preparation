/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0] && match(haystack, i, needle)) {
            return i;
        }
    }
    return -1;
};

var match = function (haystack, hp, needle) {
    let np = 0
    while(np < needle.length - 1 && haystack[hp] === needle[np]) {
        hp++;
        np++;
    }
    return haystack[hp] === needle[np]
}