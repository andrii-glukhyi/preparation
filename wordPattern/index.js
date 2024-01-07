/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ");
    if(words.length !== pattern.length) {
        return false;
    }
    let ctow = new Map()
    let wtoc = new Map();
    for(let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i]
        if(ctow.has(char) && ctow.get(char) !== word){
            return false;
        } else if(wtoc.has(word) && wtoc.get(word) !== char) {
            return false;
        }else {
            ctow.set(char, word);
            wtoc.set(word, char);
        }
    }
    return true;
};