class MinHeap {
    constructor() {
        this.heap = []
    }

    parent(index) {
        return Math.floor((index - 1) / 2)
    }

    leftChild(index) {
        return 2 * index + 1
    }

    rightChild(index) {
        return 2 * index + 2
    }

    swap(left, right) {
        [this.heap[left], this.heap[right]] = [this.heap[right], this.heap[left]];
    }

    heapifyUp(index) {
        while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
            const parentIndex = this.parent(index);
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    heapifyDown(index) {
        let left = this.leftChild(index);
        let right = this.rightChild(index);
        let smallest = index;
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }
        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest)
        }
    }

    add(n) {
        this.heap.push(n);
        this.heapifyUp(this.heap.length - 1);
    }

    top() {
        if (this.heap.length === 0) {
            return null
        } else if (this.heap.length === 1) {
            return this.heap.pop();
        } else {
            const min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown(0);
            return min;
        }
    }
}

let minHeap = new MinHeap()
let arr = [[-8,-7,-7,-5,1,1,3,4],[-2],[-10,-10,-7,0,1,3],[2]]
// console.log(arr.flat());
arr.flat().forEach(a => minHeap.add(a))
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())
console.log(minHeap.top())