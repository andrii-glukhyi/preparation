/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let stot = {};
    let ttos = {};
    for(let i = 0; i < s.length; i++) {
        if(stot[s[i]] && stot[s[i]] !== t[i] || ttos[t[i]] && ttos[t[i]] !== s[i]) {
            return false
        } else {
            stot[s[i]] = t[i];
            ttos[t[i]] = s[i];
        }
    }
    return true
};