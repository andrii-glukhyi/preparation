package remove_nth_node

type EduLinkedListNode struct {
	data int
	next *EduLinkedListNode
}

func NewLinkedListNode(data int, next *EduLinkedListNode) *EduLinkedListNode {
	node := new(EduLinkedListNode)
	node.data = data
	node.next = next
	return node
}

func InitLinkedListNode(data int) *EduLinkedListNode {
	node := new(EduLinkedListNode)
	node.data = data
	node.next = nil
	return node
}

func removeNthLastNode(head *EduLinkedListNode, n int) *EduLinkedListNode {
	left := head
	right := head
	steps := 0
	for steps < n {
		steps += 1
		right = right.next
	}
	if right == nil {
		return head.next
	}
	for right.next != nil {
		right = right.next
		left = left.next
	}
	left.next = left.next.next
	return head
}
