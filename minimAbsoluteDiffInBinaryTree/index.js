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
var getMinimumDifference = function(root) {
    let mnVal = Infinity;
    let prev = null;
    var dfs = function(node) {
        if(node.left) {
            dfs(node.left)
        }
        if (prev !== null) {
            mnVal = Math.min(Math.abs(node.val - prev), mnVal);
        }
        prev = node.val
        if(node.right) {
            dfs(node.right)
        }
    }
    dfs(root);
    return mnVal
};