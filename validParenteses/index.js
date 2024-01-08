/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i ++) {
        let char = s[i];
        if(char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            let opening = stack.pop();
            if(char === ")" && opening !== "(" || char === "]" && opening !== "[" || char === "}" && opening !== "{") {
                return false;
            }
        }
    }
    return stack.length === 0;
};