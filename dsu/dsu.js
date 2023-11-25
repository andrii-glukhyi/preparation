class DSU {
  constructor(size) {
    this.size = size;
    this.parents = new Array(size);
    this.sizes = new Array(size);
    this.components = 0;
    for (let i = 0; i < this.parents.length; i++) {
      this.parents[i] = i;
      this.sizes[i] = 1;
    }
  }

  connected(x, y) {
    return this.find(x) == this.find(y);
  }

  componentSize(x) {
    return this.sizes[this.find(x)];
  }

  find(x) {
    if (parent[x] === x) {
      return x;
    }
    return find(parent[x]);
  }

  union(x, y) {
    parents[find(x)] = find(y);
  }
}
