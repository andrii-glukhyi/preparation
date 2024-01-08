/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0]- b[0])
    let merged = [];
    let start = intervals[0][0];
    let end = intervals[0][1]
    for(let i = 1; i < intervals.length; i++) {
        let curInt = intervals[i];
        if(curInt[0] > end) {
            merged.push([start, end]);
            start = curInt[0];
            end = curInt[1];
        } else {
            end = Math.max(end, curInt[1])
        }
    }
    merged.push([start, end]);
    return merged;
};