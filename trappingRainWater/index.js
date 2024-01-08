/**
 * @param {number[]} height
 * @return {number}
 */
// SQ: O(n)
var trap = function(height) {
    let ans = 0;
    if(height.length === 0) {
        return ans;
    }
    let lmax = new Array(height.length);
    let rmax = new Array(height.length);
    lmax[0] = height[0];
    rmax[height.length - 1] = height[height.length - 1];
    for(let i = 1; i < height.length; i++) {
        lmax[i] = Math.max(height[i], lmax[i-1]);
    }
    for(let i = height.length - 2; i > 0; i--) {
        rmax[i] = Math.max(height[i], rmax[i+1]);
    }
    for(let i = 1; i < height.length; i++) {
        ans += Math.min(lmax[i], rmax[i]) - height[i];
    }
    return ans;
}

/**
 * @param {number[]} height
 * @return {number}
 */
//  SQ: O(1)
var trap = function(height) {
    let l = 0;
    let r = height.length - 1;
    let lmax = 0;
    let rmax = 0;
    let ans = 0;
    while( l < r ) {
        console.log(l, r)
        if(height[l] <  height[r]) {
            if(height[l] > lmax) {
                lmax = height[l];
            } else {
                ans += lmax - height[l];
            }
            l++;
        } else {
            if(height[r] > rmax) {
                rmax = height[r];
            } else {
                ans += rmax - height[r];
            }
            r--
        }
    }
    return ans;
};