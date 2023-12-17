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
var reverseEvenLengthGroups = function(head) {
    // group = 2;
    // prev = > head
    // 1 => 3 => 2 => 4 => 5 => 6 => 7 => 8 => 9 => 10 => null
    let prev = head;
    let groupLen = 2;
    while(prev.next !== null) {
        let node = prev;
        let counter = 0;
        for(let i = 0; i < groupLen; i++) {
            if(node.next === null) {
                break;
            }
            node = node.next;
            counter++;
        }

        if(counter % 2 === 1) {
            prev = node;
        } else {
            let prevGr = node.next;
            let curent = prev.next;
            while(counter > 0) {
                counter--;
                let next = curent.next
                curent.next = prevGr;
                prevGr = curent;
                curent = next
            }
            let prevNext = prev.next;
            prev.next = node;
            prev = prevNext;
        }
        groupLen++;
    }
    return head;
};