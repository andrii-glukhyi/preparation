/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let wins = 0;
    if (k === 1) {
        return arr[0] > arr[1] ? arr[0] : arr[1]
    }
    if (k >= arr.length) {
        return Math.max(...arr);
    }
    let current_winner = arr[0];
    let consecutive_wins = 0;
    for(let i = 1; i < arr.length; i++) {
        if (current_winner > arr[i]) {
            consecutive_wins++;
        } else {
            current_winner = arr[i];
            consecutive_wins = 1;
        }
        if (consecutive_wins === k) {
            return current_winner
        }
    }
    return current_winner;
};