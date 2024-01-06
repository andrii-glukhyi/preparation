/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < lowest) {
            lowest = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - lowest);
        }
    }
    return maxProfit;
};