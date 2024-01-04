class MaxHeap {
    constructor() {
        this.data = []
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(parent) {
        return parent * 2 + 1
    }

    rightChild(parent) {
        return parent * 2 + 2
    }

    swap(x,y) {
        let temp = this.data[x];
        this.data[x] = this.data[y];
        this.data[y] = temp;
    }

    add(value) {
        this.data.push(value);
        this.heapifyUp(this.data.length - 1);
    }

    heapifyUp(index) {
        let parent = this.parent(index);
        while(index > 0 && this.data[index][0] < this.data[parent][0]) {
            this.swap(parent, index);
            index = parent;
            parent = this.parent(index);
        }
    }

    heapifyDown(index) {
        let leftChild = this.leftChild(index);
        let rightChild = this.rightChild(index);
        let smallest = index;
        if(leftChild < this.data.length && this.data[leftChild][0] < this.data[smallest][0]) {
            smallest = leftChild
        }
        if(rightChild < this.data.length && this.data[rightChild][0] < this.data[smallest][0]) {
            smallest = rightChild
        }
        if(index !== smallest) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    pull() {
        if(this.data.length === 0) {
            return null;
        }
        if(this.data.length === 1) {
            return this.data.pop();
        }
        const first = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown(0);
        return first;
    }
    size() {
        return this.data.length;
    }
}
export function kSmallestPairs(list1, list2, k){
    let heap = new MaxHeap();
    function add(n1, n2) {
        heap.add([n1 + n2, [n1, n2]])
        if(heap.size > k) {
            console.log("removed", heap.pull())
        }
    }
    let x = list1[0];
    for(let n2 of list2) {
        add(x, n2)
    }
    let y = list2[0];
    for(let n1 of list1) {
        add(y, n1)
    }
    let res = [];
    while(heap.size() > 0) {
        res.push(heap.pull()[1])
    }
    return res
}