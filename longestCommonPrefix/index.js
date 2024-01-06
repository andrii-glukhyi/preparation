/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for (let i = 0; i < prefix.length; i ++) {
        let char = prefix[i];
        for(let j = 0; j < strs.length; j++) {
            if(i === strs[j].length || char !== strs[j][i]) {
                return prefix.slice(0, i);
            }
        }
    }
    return prefix
};