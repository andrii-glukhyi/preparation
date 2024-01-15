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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let counter = 0;
    let response = null;
    var dfs = function(node) {
        if(node.left) {
            dfs(node.left);
        }
        counter ++;
        if(counter === k) {
            response = node;
        }
        if (node.right) {
            dfs(node.right);
        }
    }
    dfs(root);
    return response.val;
};