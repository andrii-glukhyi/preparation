class MinHeap {
    constructor() {
        this.data = []
    }
    swap(x, y) {
        [this.data[x], this.data[y]] = [this.data[y],this.data[x]];
    }
    parent(index) {
        // 12345678
        return Math.floor((index - 1)/2)
    }

    leftChild(index) {
        return index * 2 + 1;
    }

    rightChild(index) {
        return index * 2 + 2;
    }

    add(arr) {
        this.data.push(arr)
        this.heapifyUP(this.data.length - 1);
        console.log(this.data, "sorted")
    }
    heapifyUP(index) {
        let parent = this.parent(index);
        // console.log("PARENT", parent, parent > 0 ? this.data[parent][0][this.data[parent][1]] : "less then 0")
        // console.log("INDEX", index, index > 0 ? this.data[index][0][this.data[index][1]] : "less then 0")
        while(index > 0 && this.data[index][0][this.data[index][1]] < this.data[parent][0][this.data[parent][1]]) {
            this.swap(parent, index);
            index = parent;
            parent = this.parent(parent);
        }
    }

    heapifyDown(index) {
        let leftChild = this.leftChild(index);
        let rightChild = this.rightChild(index);
        let smallest = index;
        // console.log("lf child ", this.data[leftChild])
        if(leftChild < this.data.length && this.data[leftChild][0][this.data[leftChild][1]] < this.data[smallest][0][this.data[smallest][1]]) {
            // console.log("lf child ", this.data[leftChild][0][this.data[leftChild][1]])
            // console.log("smallest", this.data[smallest][0][this.data[smallest][1]])
            smallest = leftChild
        }
        if(rightChild < this.data.length && this.data[rightChild][0][this.data[rightChild][1]] < this.data[smallest][0][this.data[smallest][1]]) {
            // console.log("lf child ", this.data[rightChild][0][this.data[rightChild][1]])
            // console.log("smallest", this.data[smallest][0][this.data[smallest][1]])
            smallest = rightChild
        }
        if(index !== smallest) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    remove() {
        if(this.data.length === 0) {
            return null;
        }
        if(this.data.length === 1) {
            return this.data.pop();
        }
        const first = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown(0);
        console.log("to top", this.data)
        return first;
    }
    size() {
        return this.data.length;
    }
}


function kSmallestNumber(lists, k){
    const heap = new MinHeap();
    for (let i = 0; i < lists.length; i++) {
        heap.add([lists[i], 0])
    }
    let top;
    // console.log("initila heap", heap.data)
    while(k- 1 > 0 && heap.size() > 0) {
        top = heap.remove()
        console.log("top", top)
        if (top[1] + 1 <= top[0].length - 1) {
            top[1] = top[1] + 1;
            heap.add(top)
        }
        k--
    }
    // console.log("end heap", heap.data);
    let last = heap.remove();
    if (k -1 === 0) {
        return last[0][last[1]]
    }
    return top[0][top[1]]
}

console.error(kSmallestNumber([[1, 2, 3], [4, 5], [6, 7, 8, 15], [10, 11, 12, 13], [5, 10]] , 50))