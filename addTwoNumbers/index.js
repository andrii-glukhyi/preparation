/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//  2345
//   456
//  2801
var addTwoNumbers = function(l1, l2) {
    let head1 = l1
    let head2 = l2;
    let dummy = new ListNode(null);
    let head = dummy;
    let rem = 0;
    while(head1 || head2 || rem > 0) {
        let sum = rem;
        if(head1) {
            sum += head1.val;
            head1 = head1.next
        }
        if(head2) {
            sum += head2.val;
            head2 = head2.next
        }
        if(sum >= 10) {
            rem = 1
            sum = sum - 10
        } else {
            rem = 0;
        }
        head.next = new ListNode(sum);
        head = head.next;
    }
    return dummy.next;
};

// let reverse = function(head) {
//     // console.log(head, "head");
//     let previus = null;
//     let curent = head
//     while(curent.next !== null) {
//         let next = curent.next;
//         curent.next = previus;
//         previus = curent;
//         curent = next;
//     }
//     curent.next = previus
//     // console.log(curent, "curent");
//     return curent;
// }