/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let tmap = new Map();
    for(let i = 0; i < t.length; i++) {
        tmap.set(t[i], (tmap.get(t[i]) || 0) + 1);
    }
    let hits = tmap.size;
    let counter = 0;
    let match = "";
    let max = Number.MAX_VALUE;
    let beg = 0;
    for(let end = 0; end < s.length; end++) {
        let char = s[end];
        if(tmap.has(char)) {
            let s = tmap.get(char) - 1;
            tmap.set(char, s);
            if (s === 0) {
                counter++;
            }
        }
        while(hits === counter) {
            if(end - beg + 1 < max) {
                max = end - beg + 1;
                match = s.slice(beg, end + 1);
            }
            let begChar = s[beg];
            if (tmap.has(begChar)) {
                tmap.set(begChar, tmap.get(begChar) + 1);
                if (tmap.get(begChar) > 0) {
                    counter--
                }
            }
            beg++
        }
    }
    return match;
};