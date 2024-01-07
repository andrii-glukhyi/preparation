/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pleft = 0;
    let prigth = 0;
    while(pleft < s.length && prigth < t.length ) {
        if(s[pleft] === t[prigth]) {
            pleft++
        }
        prigth++;
    }
    return pleft === s.length;
};