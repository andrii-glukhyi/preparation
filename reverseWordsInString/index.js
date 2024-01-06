/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let charArr = removeSpaces(s);
    reverse(charArr, 0, charArr.length - 1);
    let pointer = 0;
    while(pointer < charArr.length) {
        console.log("ponuter", pointer);
        let start = pointer
        while(pointer < charArr.length && charArr[pointer] != " ") {
            pointer++
        }
        reverse(charArr, start, pointer-1);
        pointer++;
    }
    return charArr.join("");
};

var removeSpaces = function(s) {
    let left = 0;
    let right = s.length;
    while(left < right && s[left] === " ") {
        left++;
    }
    while(right > left && s[right] === " ") {
        right--;
    }
    let res = [];
    while(left < right) {
        if(s[left] != " ") {
            res.push(s[left]);
        } else if(res[res.length - 1] !== " ") {
            res.push(" ");
        }
        left++
    }
    if(res[res.length - 1] === " ") {
        res.pop();
    }
    return res;
}
var reverse = function(arr, beg, end) {
    while(beg < end) {
        [arr[beg],arr[end]]=[arr[end],arr[beg]]
        beg++;
        end--;
    }
}