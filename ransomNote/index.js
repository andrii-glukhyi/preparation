/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map1 = {};
    for(let char of ransomNote) {
        map1[char] = (map1[char] || 0) + 1
    }
    let map2 = {};
    for(let char of magazine) {
        map2[char] = (map2[char] || 0) + 1
    }
    let res = Object.entries(map1);
    for(let i = 0; i < res.length; i++) {
        let [letter, count] = res[i];
        if(!map2[letter] || count > map2[letter]) {
            return false;
        }
    }
    return true;
};