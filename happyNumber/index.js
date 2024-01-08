/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let first = next(n);
    let second = next(next(n));
    while(first !== second && second !== 1) {
        first = next(first);
        second = next(next(second));
    }
    return second === 1
};

var next = function(n) {
    let total = 0;
    while(n > 0) {
        const d = n % 10
        n = Math.floor(n / 10);
        total += d * d
    }
    return total;
}