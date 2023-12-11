/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MaxHeap {
    constructor() {
        this.data = [];
    }

    parent(index) {
        return Math.floor((index - 1 ) / 2);
    }

    leftChild(parent) {
        return parent * 2 + 1;
    }

    rightChild(parent) {
        return parent * 2 + 2;
    }

    swap(x, y) {
        let temp = this.data[x];
        this.data[x] = this.data[y];
        this.data[y] = temp;
    }

    add(value) {
        this.data.push(value);
        this.heapifyUp(this.data.length - 1);
    }

    heapifyUp(index) {
        let parentIndex = this.parent(index);
        while(index > 0 && this.data[index][1] > this.data[parentIndex][1]) {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = this.parent(parentIndex)
        }
    }
    pull() {
        const top = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown(0);
        return top;
    }

    peek() {
        return this.data[0]
    }

    heapifyDown(index) {
        let smallest = index;
        let leftChild = this.leftChild(index);
        let rightChild = this.rightChild(index);

        if(leftChild < this.data.length && this.data[leftChild][1] > this.data[smallest][1]) {
            smallest = leftChild;
        }

        if(rightChild < this.data.length && this.data[rightChild][1] > this.data[smallest][1]) {
            smallest = rightChild;
        }

        if(smallest != index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    size() {
        return this.data.length;
    }
}
const topKFrequent = function(nums, k) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    console.log("map", map)
    let heap = new MaxHeap();
    let iterator = map.entries();
    while (!iterator.next().done) {
        heap.add(iterator.next().value)
    }
    console.log(heap.data, "heap");
    let res = [];
    while(k > 0) {
        res.push(heap.pull()[0])
        k--;
    }
};
topKFrequent([-1,-1], 1)
