/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head) {
        return head;
    }
    let dummy1 = new ListNode();
    let dummy2 = new ListNode();
    let runner1 = dummy1;
    let runner2 = dummy2;
    while(head){
        if(head.val < x) {
            runner1.next = head;
            runner1 = runner1.next;
        } else {
            runner2.next = head;
            runner2 = runner2.next;
        }
        head = head.next
    }
    runner1.next = dummy2.next;
    runner2.next = null;
    return dummy1.next
};