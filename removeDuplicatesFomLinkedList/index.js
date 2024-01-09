/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(null, head);
    let pointer = dummy;
    while(pointer.next) {
        let counter = 1;
        let nextDiff = pointer.next;
        while(nextDiff.next && nextDiff.val === nextDiff.next.val) {
            counter++;
            nextDiff = nextDiff.next;
        }
        if(counter > 1) {
            pointer.next = nextDiff.next;
        } else{
            pointer = pointer.next;
        }
    }
    return dummy.next;
};