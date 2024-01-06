/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGain = 0;
    let curentGain = 0;
    let res = 0;
    for(let i = 0; i < gas.length; i++) {
        totalGain += gas[i] - cost[i];
        curentGain += gas[i] - cost[i];
        if(curentGain < 0) {
            curentGain = 0;
            res = i + 1;
        }
    }
    return totalGain >= 0 ? res : -1
};