/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === 0) {
        return head;
    }

    let length = 1;
    let runner = head;

    // Find the length of the list
    while (runner.next) {
        runner = runner.next;
        length++;
    }

    // Connect the last node with the head to make it circular
    runner.next = head;

    // Adjust k if it's greater than the length of the list
    k = k % length;

    // Find the new tail: (length - k)th node
    for (let i = 0; i < length - k; i++) {
        runner = runner.next;
    }

    // Break the loop and set the new head
    let newHead = runner.next;
    runner.next = null;

    return newHead;
};
