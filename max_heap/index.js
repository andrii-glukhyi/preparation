class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Get the parent index of a given index
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get the left child index of a given index
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // Get the right child index of a given index
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Swap two elements in the heap
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Heapify up (used after inserting an element)
    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] < this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Heapify down (used after removing the root element)
    heapifyDown(index) {
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
        let maxIndex = index;

        if (
            leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex] > this.heap[maxIndex]
        ) {
            maxIndex = leftChildIndex;
        }

        if (
            rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] > this.heap[maxIndex]
        ) {
            maxIndex = rightChildIndex;
        }

        if (index !== maxIndex) {
            this.swap(index, maxIndex);
            this.heapifyDown(maxIndex);
        }
    }

    // Insert an element into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Remove and return the root element (maximum value)
    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }

        const max = this.heap[0];
        const lastElement = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.heapifyDown(0);
        }

        return max;
    }

    // Get the maximum element without removing it
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Get the size of the heap
    size() {
        return this.heap.length;
    }

    // Check if the heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(10);
maxHeap.insert(7);
maxHeap.insert(1);

console.log(maxHeap.peek()); // Output: 10
console.log(maxHeap.extractMax()); // Output: 10
console.log(maxHeap.peek()); // Output: 7
