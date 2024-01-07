/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let res = [];
    for(let i = 0; i < s.length; i++) {
        if(s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123) {
            res.push(s[i]);
        }
        if(s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            res.push(s[i].toLowerCase());
        }
        if(s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) {
            res.push(s[i].toLowerCase());
        }
    }
    let first = 0;
    let last = res.length - 1;
    console.log(res, "res")
    while(first < last) {
        if(res[first] !== res[last]) {
            return false;
        }
        first++;
        last--;
    }
    return true;

};