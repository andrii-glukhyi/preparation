/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(schedule) {
    let overlaping = schedule[0];
    for (let i = 1; i< schedule.length; i++) {
        for (let j = 0; j < schedule[i].length; j++) {
            overlaping = merge(overlaping, schedule[i][j]);
        }
    }
    let res = [];
    for (let i = 0; i < overlaping.length - 1; i++) {
        let curentInterval = overlaping[i];
        let nextInterval = overlaping[i+1];
        if(curentInterval.end != nextInterval.start) {
            res.push(new Interval(curentInterval.end, nextInterval.start));
        }
    }
    return res;
};

function merge(curentInts, newInt) {
    let res = [];
    let pointer = 0;
    while(pointer < curentInts.length && curentInts[pointer].start < newInt.start) {
        res.push(curentInts[pointer])
        pointer++
    }
    if(res.length === 0 || res[res.length - 1].end < newInt.start) {
        res.push(newInt);
    } else {
        res[res.length - 1].end = Math.max(res[res.length - 1].end, newInt.end);
    }

    while(pointer < curentInts.length) {
        let curentInt = curentInts[pointer];
        let start = curentInt.start;
        let end = curentInt.end;
        if(start < res[res.length - 1].end) {
            res[res.length - 1].end = Math.max(res[res.length - 1].end, end);
        } else {
            res.push(curentInt)
        }
        pointer++;
    }
    return res;
}