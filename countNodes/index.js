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
var countNodes = function(root) {
    if(!root) {
        return 0;
    }
    let nodes = [root];
    let pointer = 0
    while(pointer < nodes.length) {
        let n = nodes[pointer]
        if(n.left) {
            nodes.push(n.left)
        }
        if(n.right) {
            nodes.push(n.right)
        }
        pointer++;
    }
    return nodes.length
};