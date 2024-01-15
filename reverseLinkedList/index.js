/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(null, head);
    let counter = 1;
    let runner = dummy;
    while(counter < left) {
        counter++
        runner = runner.next
    }
    let l = runner;
    while(counter < right) {
        counter++
        runner = runner.next
    }
    let r = runner.next
    let previus = r.next;
    let curent = l.next
    while(curent !== r) {
        let next = curent.next;
        curent.next = previus;
        previus = curent;
        curent = next;
    }
    curent.next = previus;
    l.next = r;
    return dummy.next
};