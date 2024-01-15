/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) {
        return root;
    }
    let nodes = [root];
    while(nodes.length > 0){
        let next = [];
        for(let node of nodes) {
            if(node.left){
                // node
                next.push(node.left);
            }
            if(node.right) {
                next.push(node.right);
            }
        }
        for(let i = 0; i < next.length-1; i++) {
            next[i].next = next[i+1];
        }
        nodes = next;
    }
    return root
};