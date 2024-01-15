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

var maxPathSum = function(root) {
    let mx = -Infinity;
    let dfs = function (node) {
        if(!node) {
            return 0;
        }
        let left = Math.max(dfs(node.left), 0);
        let right = Math.max(dfs(node.right), 0);
        mx = Math.max(mx, node.val + right + left);
        return node.val + Math.max(right, left);
    }
    dfs(root);
    return mx;
};