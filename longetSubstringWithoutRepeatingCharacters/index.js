/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let max = 0;
    let beg = 0;
    for(let end = 0; end < s.length; end++) {
        let char = s[end];
        map[char] = (map[char] || 0) + 1;
        while(map[char] > 1) {
            let fchar = s[beg];
            map[fchar] = map[fchar] - 1;
            beg++;
        }
        max = Math.max(max, end - beg + 1);
    }
    return max;
};