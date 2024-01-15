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
var zigzagLevelOrder = function(root) {
    let ans = [];
    let flip = true
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
            let mapped = nextqueue.map(n => n.val)
            if(flip) {
                mapped = mapped.reverse();
            }
            ans.push(mapped);
            flip = !flip;
        }
        queue = nextqueue;
    }
    return ans
};