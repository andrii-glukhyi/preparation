/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = [];
    let i = 0;
    while(i < intervals.length && intervals[i][0] < newInterval[0]) {
        res.push(intervals[i]);
        i++
    }
    if(res.length === 0 || res[res.length - 1][1] < newInterval[0]) {
        res.push(newInterval);
    } else {
        res[res.length - 1][1] = Math.max(res[res.length - 1][1], newInterval[1]);
    }
    while(i < intervals.length) {
        let interval = intervals[i];
        let start = interval[0];
        let end = interval[1];
        if(start > res[res.length - 1][1]) {
            res.push(interval)
        } else {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], end);
        }
        i++;
    }
    return res
};