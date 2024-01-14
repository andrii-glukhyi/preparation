/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root, total=0, grandTotal=0) {
    if(!root) {
        return 0;
    }
    let gt = [];
    dfs(root, 0, gt);
    let sum = 0;
    for(let n of gt) {
        sum += n
    }
    return sum;
};

var dfs = function(root, total, grandTotal) {
    total = total * 10 + root.val;
    if(!root.left && !root.right) {
        grandTotal.push(total)
        return
    }
    if(root.left) {
        dfs(root.left, total, grandTotal);
    }
    if(root.right) {
        dfs(root.right, total, grandTotal);
    }
}