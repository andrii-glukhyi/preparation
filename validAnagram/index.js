/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();
    for(char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for(char of t) {
        if(!map.has(char)) {
            return false;
        }
        let s = map.get(char);
        if(s === 1) {
            map.delete(char);
        } else {
            map.set(char, s-1);
        }
    }
    return map.size === 0;
};