class MinHeap {
  constructor() {
    this.data = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
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
    while (index > 0 && this.data[index][0] < this.data[parentIndex][0]) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  pull() {
    if (this.data.length === 0) {
      return null;
    }
    if (this.data.length === 1) {
      return this.data.pop();
    }
    const top = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown(0);
    return top;
  }

  heapifyDown(index) {
    let smallest = index;
    let leftChild = this.leftChild(index);
    let rightChild = this.rightChild(index);

    if (
      leftChild < this.size() &&
      this.data[leftChild][0] < this.data[smallest][0]
    ) {
      smallest = leftChild;
    }

    if (
      rightChild < this.size() &&
      this.data[rightChild][0] < this.data[smallest][0]
    ) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  size() {
    return this.data.length;
  }
}

function networkDelayTime(times, n, k) {
  let map = new Map();
  for (let time of times) {
    let [x, y, cost] = time;
    if (!map.get(x)) {
      map.set(x, []);
    }
    map.get(x).push([cost, y]);
  }
  let heap = new MinHeap();
  heap.add([0, k]);
  let visited = new Set();
  let delay = 0;
  while (heap.size() > 0) {
    let [time, node] = heap.pull();
    if (visited.has(node)) {
      continue;
    }
    visited.add(node);
    delay = Math.max(time, delay);
    let adjucentNodes = map.get(node) || [];
    for (let neighbor of adjucentNodes) {
      console.log(neighbor);
      let [neighborTime, neighborNode] = neighbor;
      if (!visited.has(neighbor)) {
        heap.add([time + neighborTime, neighborNode]);
      }
    }
  }
  if (visited.size === n) {
    return delay;
  }
  return -1;
}

export { networkDelayTime };
