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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = [];
    if(!root) {
        return ans;
    }
    let queue = [root];
    ans.push([root.val]);
    while(queue.length > 0) {
        let nextqueue = [];
        for(let node of queue) {
            if(node.left) {
                nextqueue.push(node.left);
            }
            if(node.right) {
                nextqueue.push(node.right);
            }
        }
        if(nextqueue.length > 0) {
            ans.push(nextqueue.map(n => n.val));
        }
        queue = nextqueue;
    }
    return ans
};