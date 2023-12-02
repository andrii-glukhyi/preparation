

class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class MinHeap {
    constructor() {
        this.data = []
    }

    parent(index) {
        return Math.floor((index - 1) / 2)
    }

    leftChild(parent) {
        return parent * 2 + 1;
    }

    rightChild(parent) {
        return parent * 2 + 1;
    }

    swap(left, right) {
        [this.data[left],this.data[right]] = [this.data[right],this.data[left]]
    }

    add(node) {
        this.data.push(node);
        this.heapifyUp(this.data.length - 1);
    }

    remove() {
        if(this.data.length === 0) {
            return null;
        }
        if(this.data.length === 1) {
            return this.data.pop();
        }
        let first = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown(0);
        return first;
    }
    heapifyUp(index) {
        let node = this.data[index]
        while (index > 0 && this.data[index].data < this.data[this.parent(index)].data) {
            const parentIndex = this.parent(index);
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    heapifyDown(index) {
        let smallest = index;
        let leftChild = this.leftChild(index);
        let rightChild = this.rightChild(index);
        if(leftChild < this.data.length && this.data[leftChild].data < this.data[smallest].data) {
            smallest = leftChild;
        }

        if(rightChild < this.data.length && this.data[rightChild].data < this.data[smallest].data) {
            smallest = rightChild;
        }

        if(smallest !== index) {
            this.swap(smallest, index);
            this.heapifyDown(smallest)
        }
    }
}

function mergeKLists(lists){
    let minHeap = new MinHeap();
    for (let head of lists) {
        minHeap.add(head)
    }
    return nextNode(minHeap);

}

function nextNode(heap) {
    let node = heap.remove();
    if (node === null) {
        return node;
    }
    console.log("top node", node.data)
    if (node.next) {
        heap.add(node.next);
    }

    node.next = nextNode(heap);
    return node
}

let arr = [[-8,-7,-7,-5,1,1,3,4],[-2],[-10,-10,-7,0,1,3],[2]]
let nodeList = arr.map(a => {
    let innerArr = a.map(n => new LinkedListNode(n))
    for (let i = 0; i < innerArr.length - 1; i++) {
        innerArr[i].next = innerArr[i+1];
    }
    return innerArr[0];
})
console.log("end", mergeKLists(nodeList))