class MxHeap {
    constructor() {
        this.heap = [];
    }
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(parent) {
        return parent * 2 + 1;
    }

    rightChild(parent) {
        return parent *2 + 2;
    }

    swap(x, y) {
        let temp = this.heap[x];
        this.heap[x] = this.heap[y];
        this.heap[y] = temp;
    }

    heapUp(index) {
        let parent = this.parent(index);
        while(index > 0 && this.heap[index][1] > this.heap[parent][1]) {
            this.swap(index, parent);
            index = parent;
            parent = this.parent(parent);
        }
    }

    size() {
        return this.heap.length;
    }

    heapDown(index) {
        let leftChild = this.leftChild(index);
        let rightChild = this.rightChild(index);
        let largest = index;
        if(leftChild < this.size() && this.heap[leftChild][1] > this.heap[largest][1]) {
            largest = leftChild;
        }

        if(rightChild < this.size() && this.heap[rightChild][1] > this.heap[largest][1]) {
            largest = rightChild;
        }
        if(largest != index) {
            this.swap(largest, index);
            this.heapDown(largest);
        }
    }

    add(value) {
        this.heap.push(value);
        this.heapUp(this.heap.length - 1);
    }

    remove() {
        if(this.heap.length === 0) {
            return null
        }
        if(this.heap.length === 1) {
            return this.heap.pop();
        }
        let largest = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapDown(0);
        return largest
    }
}



 function reorganizeString(str){
    let map = {}
    for (let char of str) {
        map[char] = (map[char] || 0) + 1
    }
    let maxHeap = new MxHeap();
    Object.entries(map).forEach(e => maxHeap.add(e))
    const result = new Array(str.length);
    let pointer = 0
    let previus = null;
    while(maxHeap.size() > 0 || previus != null) {
        let top = maxHeap.remove();
        if (top) {
            result[pointer] = top[0];
            top[1] = top[1] - 1;
        }
        if(!previus) {
            previus = top;
        }
        if (previus[1] > 0) {
            maxHeap.add(previus);
        }
        if(pointer > 0 && result[pointer] === result[pointer - 1]) {
            return "";
        }
        pointer++;
    }
    return result.join("")
}

reorganizeString("abb")