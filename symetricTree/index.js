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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return dfs(root.left, root.right);
};

var dfs = function(l, r) {
    if(!l && !r) {
        return true;
    }
    if(l && !r || !l && r || l.val !== r.val) {
        return false
    }
    let lr = dfs(l.left, r.right);
    let rl = dfs(l.right, r.left);
    return lr && rl;
}