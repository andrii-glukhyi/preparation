/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for(let i = 0; i < strs.length; i++) {
        let arr = new Array(26).fill(0);
        let word = strs[i];
        for(let j = 0; j < word.length; j++) {
            let n = word.charCodeAt(j) % 97;
            arr[n] += 1
        }
        console.log(arr, "arr")
        let key = arr.join("-");
        let data = map.get(key) || [];
        data.push(word);
        map.set(key, data);
    }
    return Array.from(map.values())
};