/**
 * @param {number[][]} edges
 * @return {number[]}
 */

var findRedundantConnection = function (edges) {
  par = new Array(1000);
  rank = new Array(1000).fill(0);
  var find = function (x) {
    console.log("looking for parent: ", x);
    if (par[x] != x) {
      console.log(x, " has parent ", par[x]);
      par[x] = find(par[x]);
    }
    console.log("returning parent x", par[x]);
    return par[x];
  };

  var union = function (x, y) {
    let xr = find(x);
    let yr = find(y);
    if (xr === yr) {
      return false;
    } else if (rank[xr] < rank[yr]) {
      par[xr] = yr;
    } else if (rank[yr] < rank[xr]) {
      par[yr] = xr;
    } else {
      par[yr] = xr;
      rank[xr]++;
    }
    return true;
  };
  for (let i = 0; i < 1000; i++) {
    par[i] = i;
  }
  for (let edge of edges) {
    if (!union(edge[0], edge[1])) {
      return edge;
    }
  }
  return [];
};
