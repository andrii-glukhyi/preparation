// import MinHeap from './min_heap.js'

class MinHeap {
    constructor() {
        this.heap = [];
    }
    // 1,2,3,4,5,6,7
    //  1 => 2,3 | 2 => 4,5 | 3 => 6,7
    // 567
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(parent) {
        return 2 * parent + 1
    }

    rigthChild(parent) {
        return 2 * parent + 2
    }

    swap(x, y) {
        let temp = this.heap[x];
        this.heap[x] = this.heap[y];
        this.heap[y] = temp;
    }

    heapUP(index) {
        let parentIndex = this.parent(index);
        while(index > 0 && this.heap[index][0] < this.heap[parentIndex][0]) {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    size() {
        return this.heap.length
    }

    heapDown(index) {
        let smallest = index;
        let leftChildIndex = this.leftChild(index);
        let rigthChildIndex = this.rigthChild(index);

        if(leftChildIndex < this.size() && this.heap[leftChildIndex][0] < this.heap[smallest][0]) {
            smallest = leftChildIndex;
        }

        if(rigthChildIndex < this.size() && this.heap[rigthChildIndex][0] < this.heap[smallest][0]) {
            smallest = rigthChildIndex;
        }

        if(smallest != index) {
            this.swap(smallest, index);
            this.heapDown(smallest)
        }
    }

    add(val) {
        this.heap.push(val);
        this.heapUP(this.heap.length - 1);
    }

    peek() {
        return this.heap[0][0];
    }

    pull() {
        if(this.size() === 0) {
            return null
        }
        if(this.size() === 1) {
            return this.heap.pop();
        }
        let top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapDown(0);
        return top;
    }
}

export function  topKFrequent(arr, k=0){
    let heap = new MinHeap();
    let map = {};
    for(let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1
    }
    console.log("map", map)
    let data = Object.entries(map);
    for (let i = 0; i < k; i++) {
        let [n, q] = data[i];
        heap.add([q, parseInt(n)])
    }
    for(let i = k; i < data.length; i++) {
        let [n, q] = data[i];
        if(q > heap.peek()) {
            console.log(`Addin ${q} for top ${heap.peek()} for number ${n}`)
            console.log("removed ", heap.pull());
            heap.add([q, parseInt(n)])
        } else {
            console.log(`Skipping to add ${q} since it's smaller then top ${heap.peek()}`);
        }
    }
    let res = [];
    for(let i = 0; i < k; i++) {
        let item = heap.pull();
        console.log(`Max ${item[0]} for number ${item[1]}`)
        res.push(item[1])
    }
    return res
}

    topKFrequent([5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0, 2, 2, 2, 4, -2, -4, 8, -7, -7, 2, -8, 0, -8, 10, 8, -8, -2, -9, 4, -7, 6, 6, -1, 4, 2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1, -3, 7, 0, 8, -2, -3, -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6, -8, -9, -1, 9, -9, 3, 5, 1, 6, -1, -2, 4, 2, 4, -6, 4, 4, 5, -5] , 7)
